// test.js — Full test-taking engine

let currentUser = null;
let series = null;
let questions = [];
let attempt = null;
let currentIndex = 0;
let answers = {}; // questionId -> { selected, isSkipped, startTime }
let bookmarks = new Set();
let timerInterval = null;
let timeRemaining = 0;
let testStartTime = null;
let questionStartTime = null;

async function init() {
  const session = await Auth.requireAuth();
  if (!session) return;
  currentUser = session.user;

  const params = new URLSearchParams(window.location.search);
  const seriesId = params.get('series');
  if (!seriesId) return (window.location.href = 'tests.html');

  setLoadStatus('Fetching test series...');
  try {
    series = await DB.getSeriesById(seriesId);
    document.getElementById('test-title').textContent = series.title;
    document.getElementById('q-total').textContent = '...';

    setLoadStatus('Loading questions...');
    questions = await DB.getQuestionsBySeries(seriesId);
    if (!questions.length) throw new Error('No questions found for this series.');

    setLoadStatus('Creating attempt...');
    attempt = await DB.createAttempt(currentUser.id, seriesId, questions.length);

    // Load bookmarks
    const { data: bms } = await supabase.from('bookmarks').select('question_id').eq('user_id', currentUser.id);
    if (bms) bms.forEach(b => bookmarks.add(b.question_id));

    // Init state
    timeRemaining = series.duration_minutes * 60;
    testStartTime = Date.now();
    questionStartTime = Date.now();

    document.getElementById('q-total').textContent = questions.length;
    document.getElementById('loading-screen').classList.add('hidden');
    document.getElementById('test-container').classList.remove('hidden');

    renderQuestion();
    renderGrid();
    startTimer();

    // Warn on tab close
    window.addEventListener('beforeunload', e => {
      e.preventDefault();
      e.returnValue = 'Test in progress!';
    });
  } catch (e) {
    setLoadStatus('Error: ' + e.message);
    console.error(e);
  }
}

function setLoadStatus(msg) {
  const el = document.getElementById('load-status');
  if (el) el.textContent = msg;
}

// ============================================================
// TIMER
// ============================================================
function startTimer() {
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      UI.showToast('Time is up! Submitting your test.', 'warning', 3000);
      setTimeout(submitTest, 3000);
    }
    // Red timer when < 5 min
    const box = document.getElementById('timer-box');
    if (timeRemaining < 300) {
      box.classList.add('bg-red-100');
      document.getElementById('timer-display').classList.add('text-red-600');
    } else if (timeRemaining < 600) {
      box.classList.add('bg-yellow-100');
      document.getElementById('timer-display').classList.add('text-yellow-600');
    }
  }, 1000);
}

function updateTimerDisplay() {
  document.getElementById('timer-display').textContent = UI.formatTime(timeRemaining);
}

// ============================================================
// RENDER QUESTION
// ============================================================
function renderQuestion() {
  const q = questions[currentIndex];
  const ans = answers[q.id];

  document.getElementById('q-num').textContent = currentIndex + 1;
  document.getElementById('q-current').textContent = currentIndex + 1;
  document.getElementById('question-text').textContent = q.question_text;

  // Bookmark button
  const bmBtn = document.getElementById('bookmark-btn');
  bmBtn.textContent = bookmarks.has(q.id) ? '⭐' : '☆';
  bmBtn.className = `text-2xl transition-colors ml-auto ${bookmarks.has(q.id) ? 'text-yellow-500' : 'text-slate-300 hover:text-yellow-400'}`;

  // Options
  const opts = [
    { key: 'A', text: q.option_a },
    { key: 'B', text: q.option_b },
    { key: 'C', text: q.option_c },
    { key: 'D', text: q.option_d }
  ];

  const container = document.getElementById('options-container');
  container.innerHTML = opts.map(o => {
    const isSelected = ans?.selected === o.key;
    return `
    <button onclick="selectAnswer('${o.key}')" data-opt="${o.key}"
      class="option-btn w-full text-left px-5 py-4 rounded-xl border-2 transition-all flex items-start gap-4 group
        ${isSelected ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50'}">
      <span class="flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all
        ${isSelected ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-slate-300 text-slate-500 group-hover:border-indigo-400'}">
        ${o.key}
      </span>
      <span class="text-sm text-slate-700 leading-relaxed pt-0.5 ${isSelected ? 'font-medium text-slate-800' : ''}">${o.text}</span>
    </button>`;
  }).join('');

  // Progress
  const answered = Object.values(answers).filter(a => !a.isSkipped && a.selected).length;
  const pct = Math.round((answered / questions.length) * 100);
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('progress-text').textContent = pct + '%';

  // Update grid
  renderGrid();
  questionStartTime = Date.now();
}

function selectAnswer(key) {
  const q = questions[currentIndex];
  answers[q.id] = {
    selected: key,
    isSkipped: false,
    startTime: questionStartTime
  };
  renderQuestion();
}

// ============================================================
// NAVIGATION
// ============================================================
function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    confirmSubmit();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}

function skipQuestion() {
  const q = questions[currentIndex];
  if (!answers[q.id] || !answers[q.id].selected) {
    answers[q.id] = { selected: null, isSkipped: true, startTime: questionStartTime };
    renderGrid();
  }
  nextQuestion();
}

function goToQuestion(idx) {
  currentIndex = idx;
  renderQuestion();
}

// ============================================================
// GRID
// ============================================================
function renderGrid() {
  const grid = document.getElementById('q-grid');
  if (!grid) return;
  grid.innerHTML = questions.map((q, i) => {
    const ans = answers[q.id];
    let cls = 'bg-slate-100 border-slate-200 text-slate-500 hover:border-indigo-300';
    if (i === currentIndex) cls = 'bg-indigo-600 border-indigo-600 text-white';
    else if (ans?.selected) cls = 'bg-green-100 border-green-300 text-green-700';
    else if (ans?.isSkipped) cls = 'bg-yellow-100 border-yellow-300 text-yellow-700';
    return `<button onclick="goToQuestion(${i})" class="w-8 h-8 text-xs font-semibold border rounded-lg transition-all ${cls}">${i + 1}</button>`;
  }).join('');
}

// ============================================================
// BOOKMARK
// ============================================================
async function toggleBookmark() {
  const q = questions[currentIndex];
  try {
    const isNowBookmarked = await DB.toggleBookmark(currentUser.id, q.id);
    if (isNowBookmarked) bookmarks.add(q.id);
    else bookmarks.delete(q.id);
    renderQuestion();
    UI.showToast(isNowBookmarked ? 'Bookmarked!' : 'Bookmark removed', 'info', 1500);
  } catch (e) { console.error(e); }
}

// ============================================================
// SUBMIT
// ============================================================
function confirmSubmit() {
  const answered = Object.values(answers).filter(a => a.selected && !a.isSkipped).length;
  const skipped = Object.values(answers).filter(a => a.isSkipped).length;
  const unanswered = questions.length - answered - skipped;

  document.getElementById('submit-summary').innerHTML = `
    <p>✅ Answered: <strong>${answered}</strong></p>
    <p>⏭ Skipped: <strong>${skipped}</strong></p>
    <p>❓ Not visited: <strong>${unanswered}</strong></p>
    <p class="mt-2 text-slate-400">Time remaining: ${UI.formatTime(timeRemaining)}</p>`;

  document.getElementById('submit-modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('submit-modal').classList.add('hidden');
}

async function submitTest() {
  closeModal();
  clearInterval(timerInterval);
  window.removeEventListener('beforeunload', () => {});

  const totalSeconds = Math.floor((Date.now() - testStartTime) / 1000);

  let correct = 0, wrong = 0, skipped = 0;
  const answerRows = [];

  for (const q of questions) {
    const ans = answers[q.id];
    const selected = ans?.selected || null;
    const isSkipped = !selected;
    const isCorrect = selected ? selected === q.correct_answer : null;

    if (isCorrect === true) correct++;
    else if (isCorrect === false) wrong++;
    else skipped++;

    const timeTaken = ans?.startTime ? Math.floor((Date.now() - ans.startTime) / 1000) : null;
    answerRows.push({
      question_id: q.id,
      selected_answer: selected,
      is_correct: isCorrect,
      is_skipped: isSkipped,
      time_taken_seconds: timeTaken
    });
  }

  const scorePct = parseFloat(((correct / questions.length) * 100).toFixed(2));
  const isPassed = scorePct >= (series.passing_score || 70);

  try {
    // Save all answers
    for (const row of answerRows) {
      await DB.saveAnswer(attempt.id, row.question_id, row.selected_answer, row.is_correct, row.is_skipped, row.time_taken_seconds);
    }

    await DB.completeAttempt(attempt.id, {
      time_taken_seconds: totalSeconds,
      answered_questions: correct + wrong,
      correct_answers: correct,
      wrong_answers: wrong,
      skipped_answers: skipped,
      score_percentage: scorePct,
      is_passed: isPassed
    });

    window.removeEventListener('beforeunload', () => {});
    window.location.href = `result.html?attempt=${attempt.id}`;
  } catch (e) {
    UI.showToast('Error saving test: ' + e.message, 'error');
    console.error(e);
  }
}

init();
