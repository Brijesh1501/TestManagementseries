// dashboard.js

let currentUser = null;
let currentProfile = null;

async function init() {
  const session = await Auth.requireAuth();
  if (!session) return;
  currentUser = session.user;
  currentProfile = await Auth.getProfile(currentUser.id);

  document.getElementById('user-name').textContent = currentProfile.full_name.split(' ')[0];
  document.getElementById('user-initial').textContent = currentProfile.full_name[0].toUpperCase();

  await Promise.all([loadStats(), loadRecentAttempts(), loadAvailableSeries(), loadNotifications()]);
}

async function loadStats() {
  try {
    const attempts = await DB.getUserAttempts(currentUser.id);
    const completed = attempts.filter(a => a.status === 'completed');
    const passed = completed.filter(a => a.is_passed);
    const avgScore = completed.length ? (completed.reduce((s, a) => s + (a.score_percentage || 0), 0) / completed.length).toFixed(1) : 0;
    const totalTime = attempts.reduce((s, a) => s + (a.time_taken_seconds || 0), 0);

    document.getElementById('stat-total').textContent = attempts.length;
    document.getElementById('stat-passed').textContent = passed.length;
    document.getElementById('stat-avg').textContent = avgScore + '%';
    document.getElementById('stat-time').textContent = UI.formatDuration(totalTime);

    renderScoreChart(completed.slice(0, 10).reverse());
    renderPerfChart(completed);
  } catch (e) {
    console.error(e);
  }
}

function renderScoreChart(attempts) {
  const ctx = document.getElementById('score-chart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: attempts.map((a, i) => `Test ${i + 1}`),
      datasets: [{
        label: 'Score %',
        data: attempts.map(a => a.score_percentage),
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99,102,241,0.1)',
        borderWidth: 2.5,
        pointBackgroundColor: '#6366f1',
        pointRadius: 4,
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { min: 0, max: 100, grid: { color: '#f1f5f9' }, ticks: { callback: v => v + '%' } },
        x: { grid: { display: false } }
      }
    }
  });
}

function renderPerfChart(attempts) {
  const ctx = document.getElementById('perf-chart').getContext('2d');
  const correct = attempts.reduce((s, a) => s + (a.correct_answers || 0), 0);
  const wrong = attempts.reduce((s, a) => s + (a.wrong_answers || 0), 0);
  const skipped = attempts.reduce((s, a) => s + (a.skipped_answers || 0), 0);
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Correct', 'Wrong', 'Skipped'],
      datasets: [{ data: [correct, wrong, skipped], backgroundColor: ['#22c55e', '#ef4444', '#f59e0b'], borderWidth: 0, hoverOffset: 6 }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom', labels: { padding: 16, font: { size: 12 } } }
      },
      cutout: '68%'
    }
  });
}

async function loadRecentAttempts() {
  const container = document.getElementById('recent-list');
  try {
    const attempts = await DB.getUserAttempts(currentUser.id);
    const recent = attempts.slice(0, 6);
    if (!recent.length) {
      container.innerHTML = '<div class="flex flex-col items-center py-10 text-slate-400"><p class="text-sm">No attempts yet</p><a href="tests.html" class="text-indigo-600 text-sm mt-2 hover:underline">Start a test →</a></div>';
      return;
    }
    container.innerHTML = recent.map(a => `
      <div class="flex items-center justify-between px-6 py-3.5 hover:bg-slate-50 transition-colors">
        <div>
          <p class="text-sm font-semibold text-slate-800">${a.test_series?.title || 'Test Series'}</p>
          <p class="text-xs text-slate-400 mt-0.5">${UI.formatDate(a.created_at)} · ${UI.formatDuration(a.time_taken_seconds)}</p>
        </div>
        <div class="flex items-center gap-2">
          ${a.status === 'completed'
            ? `<span class="text-sm font-bold ${UI.scoreColor(a.score_percentage)}">${a.score_percentage?.toFixed(1)}%</span>
               <span class="text-xs px-2 py-0.5 rounded-full font-medium ${a.is_passed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}">${a.is_passed ? 'Pass' : 'Fail'}</span>`
            : `<span class="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 font-medium">In Progress</span>`}
          ${a.status === 'completed' ? `<a href="result.html?attempt=${a.id}" class="text-indigo-500 hover:text-indigo-700 text-xs">Review</a>` : ''}
        </div>
      </div>`).join('');
  } catch (e) {
    container.innerHTML = '<div class="px-6 py-4 text-sm text-red-500">Failed to load.</div>';
  }
}

async function loadAvailableSeries() {
  const container = document.getElementById('series-list');
  try {
    const series = await DB.getTestSeries(true);
    const attempts = await DB.getUserAttempts(currentUser.id);
    const attemptedIds = new Set(attempts.map(a => a.series_id));
    const shown = series.slice(0, 6);

    container.innerHTML = shown.map(s => `
      <div class="flex items-center justify-between px-6 py-3.5 hover:bg-slate-50 transition-colors">
        <div>
          <p class="text-sm font-semibold text-slate-800">${s.title}</p>
          <p class="text-xs text-slate-400 mt-0.5">${s.total_questions} questions · ${s.duration_minutes} min</p>
        </div>
        <div class="flex items-center gap-2">
          ${attemptedIds.has(s.id) ? '<span class="text-xs text-slate-400">Attempted</span>' : ''}
          <a href="test.html?series=${s.id}" class="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition-colors">Start</a>
        </div>
      </div>`).join('');
  } catch (e) {
    container.innerHTML = '<div class="px-6 py-4 text-sm text-red-500">Failed to load.</div>';
  }
}

async function loadNotifications() {
  try {
    const notifs = await DB.getNotifications(currentUser.id);
    const unread = notifs.filter(n => !n.is_read);
    const badge = document.getElementById('notif-badge');
    badge.classList.toggle('hidden', unread.length === 0);

    const list = document.getElementById('notif-list');
    if (!notifs.length) return;
    list.innerHTML = notifs.map(n => `
      <div class="px-4 py-3 ${n.is_read ? '' : 'bg-indigo-50/50'} cursor-pointer hover:bg-slate-50 transition-colors" onclick="markRead('${n.id}', this)">
        <p class="text-sm font-medium text-slate-800">${n.title}</p>
        <p class="text-xs text-slate-500 mt-0.5">${n.message}</p>
        <p class="text-xs text-slate-400 mt-1">${UI.formatDate(n.created_at)}</p>
      </div>`).join('');
  } catch (e) { console.error(e); }

  document.getElementById('notif-btn').addEventListener('click', () => {
    document.getElementById('notif-panel').classList.toggle('hidden');
  });
}

async function markRead(id, el) {
  await DB.markNotificationRead(id);
  el.classList.remove('bg-indigo-50/50');
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('-translate-x-full');
  document.getElementById('sidebar-overlay').classList.toggle('hidden');
}

async function handleLogout() {
  await Auth.signOut();
  window.location.href = 'index.html';
}

init();
