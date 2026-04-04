// ============================================================
// config.js - Supabase Configuration & Shared Utilities
// ============================================================

// ⚠️ REPLACE THESE WITH YOUR ACTUAL SUPABASE CREDENTIALS
const SUPABASE_URL = 'https://clvqomxagijowwvpkyzb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsdnFvbXhhZ2lqb3d3dnBreXpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyNzk2MTEsImV4cCI6MjA5MDg1NTYxMX0.gf4zj3TdSCscH-6wqGdH5SBjdyMrOHPXytToubGyikw';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============================================================
// AUTH HELPERS
// ============================================================
const Auth = {
  async getSession() {
    const { data: { session } } = await supabase.auth.getSession();
    return session;
  },

  async getUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },

  async getProfile(userId) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    if (error) throw error;
    return data;
  },

  async signUp(email, password, fullName) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName, role: 'student' } }
    });
    if (error) throw error;
    return data;
  },

  async signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async requireAuth(redirectTo = 'index.html') {
    const session = await this.getSession();
    if (!session) {
      window.location.href = redirectTo;
      return null;
    }
    return session;
  },

  async requireAdmin() {
    const session = await this.getSession();
    if (!session) { window.location.href = '../index.html'; return null; }
    const profile = await this.getProfile(session.user.id);
    if (profile.role !== 'admin') { window.location.href = '../dashboard.html'; return null; }
    return { session, profile };
  }
};

// ============================================================
// UI HELPERS
// ============================================================
const UI = {
  showToast(message, type = 'info', duration = 3500) {
    const colors = {
      success: 'bg-green-600',
      error: 'bg-red-600',
      warning: 'bg-yellow-500',
      info: 'bg-blue-600'
    };
    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ'
    };
    const toast = document.createElement('div');
    toast.className = `fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl text-white shadow-2xl transform translate-y-16 opacity-0 transition-all duration-300 ${colors[type]}`;
    toast.innerHTML = `<span class="text-lg font-bold">${icons[type]}</span><span class="text-sm font-medium">${message}</span>`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-16', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
    });
    setTimeout(() => {
      toast.classList.add('translate-y-16', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  showLoading(containerId, message = 'Loading...') {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = `
      <div class="flex flex-col items-center justify-center py-16 gap-4">
        <div class="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <p class="text-slate-500 text-sm">${message}</p>
      </div>`;
  },

  showError(containerId, message = 'Something went wrong.') {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = `
      <div class="flex flex-col items-center justify-center py-16 gap-3 text-center">
        <div class="text-5xl">⚠️</div>
        <p class="text-slate-600 font-medium">${message}</p>
      </div>`;
  },

  formatDate(iso) {
    if (!iso) return '—';
    return new Date(iso).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  },

  formatTime(seconds) {
    if (!seconds) return '00:00';
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  },

  formatDuration(seconds) {
    if (!seconds) return '0 min';
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    if (h > 0) return `${h}h ${m}m`;
    return `${m} min`;
  },

  scoreColor(pct) {
    if (pct >= 80) return 'text-green-600';
    if (pct >= 70) return 'text-yellow-600';
    return 'text-red-600';
  },

  scoreBg(pct) {
    if (pct >= 80) return 'bg-green-100 text-green-700';
    if (pct >= 70) return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  }
};

// ============================================================
// DATABASE HELPERS
// ============================================================
const DB = {
  async getTestSeries(activeOnly = true) {
    let query = supabase.from('test_series').select('*').order('series_number');
    if (activeOnly) query = query.eq('is_active', true);
    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  async getSeriesById(id) {
    const { data, error } = await supabase
      .from('test_series').select('*').eq('id', id).single();
    if (error) throw error;
    return data;
  },

  async getQuestionsBySeries(seriesId) {
    const { data, error } = await supabase
      .from('questions')
      .select('*')
      .eq('series_id', seriesId)
      .order('question_number');
    if (error) throw error;
    return data;
  },

  async getUserAttempts(userId, seriesId = null) {
    let query = supabase
      .from('test_attempts')
      .select('*, test_series(title, series_number)')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    if (seriesId) query = query.eq('series_id', seriesId);
    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  async createAttempt(userId, seriesId, totalQuestions) {
    const { data, error } = await supabase
      .from('test_attempts')
      .insert({ user_id: userId, series_id: seriesId, total_questions: totalQuestions, status: 'in_progress' })
      .select().single();
    if (error) throw error;
    return data;
  },

  async saveAnswer(attemptId, questionId, selectedAnswer, isCorrect, isSkipped, timeTaken) {
    const { error } = await supabase
      .from('attempt_answers')
      .upsert({
        attempt_id: attemptId,
        question_id: questionId,
        selected_answer: selectedAnswer,
        is_correct: isCorrect,
        is_skipped: isSkipped,
        time_taken_seconds: timeTaken
      }, { onConflict: 'attempt_id,question_id' });
    if (error) throw error;
  },

  async completeAttempt(attemptId, stats) {
    const { error } = await supabase
      .from('test_attempts')
      .update({
        status: 'completed',
        completed_at: new Date().toISOString(),
        ...stats
      })
      .eq('id', attemptId);
    if (error) throw error;
  },

  async getAttemptAnswers(attemptId) {
    const { data, error } = await supabase
      .from('attempt_answers')
      .select('*, questions(*)')
      .eq('attempt_id', attemptId);
    if (error) throw error;
    return data;
  },

  async getNotifications(userId) {
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .or(`user_id.eq.${userId},is_global.eq.true`)
      .order('created_at', { ascending: false })
      .limit(20);
    if (error) throw error;
    return data;
  },

  async markNotificationRead(id) {
    await supabase.from('notifications').update({ is_read: true }).eq('id', id);
  },

  async toggleBookmark(userId, questionId) {
    const { data: existing } = await supabase
      .from('bookmarks').select('id').eq('user_id', userId).eq('question_id', questionId).single();
    if (existing) {
      await supabase.from('bookmarks').delete().eq('id', existing.id);
      return false;
    } else {
      await supabase.from('bookmarks').insert({ user_id: userId, question_id: questionId });
      return true;
    }
  }
};

// ============================================================
// SEED DATA HELPER (used by seed-data.js)
// ============================================================
const Seed = {
  async insertSeriesAndQuestions(seriesData) {
    for (const series of seriesData) {
      const { data: s, error: se } = await supabase
        .from('test_series')
        .upsert({
          title: series.title,
          series_number: series.series_number,
          description: `NCLEX RN Practice Test Series ${series.series_number} — ${series.questions.length} questions covering key nursing concepts.`,
          duration_minutes: 60,
          total_questions: series.questions.length,
          passing_score: 70,
          category: 'NCLEX RN',
          is_active: true
        }, { onConflict: 'series_number' })
        .select().single();
      if (se) { console.error('Series insert error:', se); continue; }

      const questionsToInsert = series.questions.map((q, idx) => ({
        series_id: s.id,
        question_number: idx + 1,
        question_text: q.question,
        option_a: q.option_a,
        option_b: q.option_b,
        option_c: q.option_c,
        option_d: q.option_d,
        correct_answer: q.correct_answer
      }));

      // Insert in batches of 50
      for (let i = 0; i < questionsToInsert.length; i += 50) {
        const batch = questionsToInsert.slice(i, i + 50);
        const { error: qe } = await supabase.from('questions').upsert(batch, { onConflict: 'series_id,question_number' });
        if (qe) console.error('Questions insert error:', qe);
      }
      console.log(`✓ Series ${series.series_number}: ${series.questions.length} questions`);
    }
    console.log('✅ Seed complete!');
  }
};
