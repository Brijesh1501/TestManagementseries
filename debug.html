// auth.js — v4 Final (RLS-safe)

function switchTab(tab) {
  const isLogin = tab === 'login';
  document.getElementById('form-login').classList.toggle('hidden', !isLogin);
  document.getElementById('form-register').classList.toggle('hidden', isLogin);
  document.getElementById('tab-login').className  = `flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all ${isLogin  ? 'bg-white text-indigo-700 shadow-sm' : 'text-white/70 hover:text-white'}`;
  document.getElementById('tab-register').className = `flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all ${!isLogin ? 'bg-white text-indigo-700 shadow-sm' : 'text-white/70 hover:text-white'}`;
}

function togglePassword(id) {
  const el = document.getElementById(id);
  el.type = el.type === 'password' ? 'text' : 'password';
}

function setLoading(prefix, loading) {
  const btnText = document.getElementById(`${prefix}-btn-text`);
  const spinner  = document.getElementById(`${prefix}-spinner`);
  if (btnText) btnText.textContent = loading
    ? (prefix === 'login' ? 'Signing in…' : 'Creating account…')
    : (prefix === 'login' ? 'Sign In'     : 'Create Account');
  if (spinner) spinner.classList.toggle('hidden', !loading);
}

// ─────────────────────────────────────────────
// REGISTER
// ─────────────────────────────────────────────
async function handleRegister() {
  const name     = document.getElementById('reg-name').value.trim();
  const email    = document.getElementById('reg-email').value.trim();
  const password = document.getElementById('reg-password').value;
  const confirm  = document.getElementById('reg-confirm').value;

  if (!name || !email || !password || !confirm)
    return UI.showToast('Please fill in all fields.', 'warning');
  if (password.length < 6)
    return UI.showToast('Password must be at least 6 characters.', 'warning');
  if (password !== confirm)
    return UI.showToast('Passwords do not match.', 'warning');

  setLoading('reg', true);

  try {
    console.log('[AUTH] signUp:', email);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name, role: 'student' },
        emailRedirectTo: window.location.origin + '/dashboard.html'
      }
    });

    if (error) throw error;

    const user = data?.user;
    if (!user) throw new Error('No user returned from Supabase.');

    console.log('[AUTH] signUp success, user:', user.id);
    console.log('[AUTH] session:', data.session ? 'YES' : 'NO');

    if (data.session) {
      // Email confirmation OFF — logged in immediately
      // Trigger handles profile creation via SECURITY DEFINER
      // Just wait a moment for trigger to fire then redirect
      UI.showToast('🎉 Account created! Redirecting…', 'success');
      setTimeout(() => { window.location.href = 'dashboard.html'; }, 1000);
    } else {
      // Email confirmation ON
      setLoading('reg', false);
      showEmailConfirmBanner(name, email);
    }

  } catch (e) {
    console.error('[AUTH] Register error:', e);
    UI.showToast(friendlyError(e.message), 'error', 7000);
    setLoading('reg', false);
  }
}

function showEmailConfirmBanner(name, email) {
  document.getElementById('form-register').innerHTML = `
    <div class="text-center py-2">
      <div class="text-5xl mb-3">📧</div>
      <h3 class="text-white font-bold text-lg mb-2">Check your email, ${name}!</h3>
      <p class="text-white/60 text-sm mb-1">Confirmation sent to:</p>
      <p class="text-indigo-300 font-bold text-sm mb-5">${email}</p>
      <p class="text-white/40 text-xs mb-5">After confirming, come back and sign in.</p>
      <button onclick="switchTab('login')"
        class="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm">
        Go to Sign In →
      </button>
    </div>`;
}

// ─────────────────────────────────────────────
// LOGIN
// ─────────────────────────────────────────────
async function handleLogin() {
  const email    = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;

  if (!email || !password) return UI.showToast('Please fill in all fields.', 'warning');
  setLoading('login', true);

  try {
    console.log('[AUTH] signIn:', email);

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;

    const user = data?.user;
    if (!user) throw new Error('No user returned.');

    console.log('[AUTH] signIn success:', user.id);

    // Fetch profile — retry up to 3 times (trigger may still be running)
    let profile = null;
    for (let i = 0; i < 3; i++) {
      const { data: p } = await supabase
        .from('profiles').select('*').eq('id', user.id).single();
      if (p) { profile = p; break; }
      await new Promise(r => setTimeout(r, 800));
    }

    // If profile still missing, create it now (user is authenticated, so RLS allows it)
    if (!profile) {
      console.warn('[AUTH] Profile not found after 3 retries, creating manually…');
      const { error: pe } = await supabase.from('profiles').insert({
        id:        user.id,
        full_name: user.user_metadata?.full_name || email.split('@')[0],
        email:     user.email,
        role:      'student',
        is_active: true
      });
      if (pe) console.error('[AUTH] Profile insert error:', pe.message);
      profile = { role: 'student', full_name: user.user_metadata?.full_name || 'User' };
    }

    console.log('[AUTH] Profile:', profile.role);
    UI.showToast('Welcome, ' + (profile.full_name || 'User').split(' ')[0] + '! 👋', 'success');
    setTimeout(() => {
      window.location.href = profile.role === 'admin' ? 'admin/index.html' : 'dashboard.html';
    }, 700);

  } catch (e) {
    console.error('[AUTH] Login error:', e);
    UI.showToast(friendlyError(e.message), 'error', 7000);
    setLoading('login', false);
  }
}

// ─────────────────────────────────────────────
// FRIENDLY ERRORS
// ─────────────────────────────────────────────
function friendlyError(msg) {
  if (!msg) return 'Something went wrong. Please try again.';
  const m = msg.toLowerCase();
  if (m.includes('invalid login credentials') || m.includes('invalid_credentials'))
    return '❌ Wrong email or password.';
  if (m.includes('email not confirmed'))
    return '📧 Please confirm your email first, then sign in.';
  if (m.includes('user already registered') || m.includes('already been registered'))
    return '⚠️ Already registered — please sign in instead.';
  if (m.includes('signups not allowed') || m.includes('signup') && m.includes('disabled'))
    return '⛔ Sign-ups disabled — enable in Supabase Auth Settings.';
  if (m.includes('password should be') || m.includes('weak_password'))
    return '⚠️ Password too weak — use at least 6 characters.';
  if (m.includes('rate limit') || m.includes('too many requests'))
    return '⏳ Too many attempts. Wait 60 seconds and try again.';
  if (m.includes('violates row-level security'))
    return '🔒 RLS policy error — run FIX_RLS.sql in Supabase SQL Editor.';
  if (m.includes('database error'))
    return '🗄️ Database error — make sure all tables exist (run STEP1_TABLES_ONLY.sql).';
  return msg;
}

// ─────────────────────────────────────────────
// AUTO-REDIRECT IF ALREADY LOGGED IN
// ─────────────────────────────────────────────
(async () => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;
    const { data: profile } = await supabase
      .from('profiles').select('role').eq('id', session.user.id).single();
    if (profile) {
      window.location.href = profile.role === 'admin' ? 'admin/index.html' : 'dashboard.html';
    }
  } catch (e) {
    console.warn('[AUTH] Session check:', e.message);
  }
})();

// ─────────────────────────────────────────────
// ENTER KEY
// ─────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  const loginHidden = document.getElementById('form-login').classList.contains('hidden');
  if (!loginHidden) handleLogin(); else handleRegister();
});