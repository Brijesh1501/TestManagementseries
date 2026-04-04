// auth.js — Login / Register logic (fixed)

function switchTab(tab) {
  const isLogin = tab === 'login';
  document.getElementById('form-login').classList.toggle('hidden', !isLogin);
  document.getElementById('form-register').classList.toggle('hidden', isLogin);

  const loginTab = document.getElementById('tab-login');
  const regTab = document.getElementById('tab-register');
  loginTab.className = `flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all ${isLogin ? 'bg-white text-indigo-700 shadow-sm' : 'text-white/70 hover:text-white'}`;
  regTab.className = `flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all ${!isLogin ? 'bg-white text-indigo-700 shadow-sm' : 'text-white/70 hover:text-white'}`;
}

function togglePassword(id) {
  const el = document.getElementById(id);
  el.type = el.type === 'password' ? 'text' : 'password';
}

function setLoading(prefix, loading) {
  const btnText = document.getElementById(`${prefix}-btn-text`);
  const spinner = document.getElementById(`${prefix}-spinner`);
  if (btnText) btnText.textContent = loading
    ? (prefix === 'login' ? 'Signing in…' : 'Creating…')
    : (prefix === 'login' ? 'Sign In' : 'Create Account');
  if (spinner) spinner.classList.toggle('hidden', !loading);
}

// ============================================================
// LOGIN
// ============================================================
async function handleLogin() {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;

  if (!email || !password) return UI.showToast('Please fill in all fields.', 'warning');
  setLoading('login', true);

  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;

    const user = data.user;
    if (!user) throw new Error('Login failed — no user returned.');

    const { data: profile, error: pe } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (pe || !profile) throw new Error('Could not fetch profile. Please try again.');

    UI.showToast('Welcome back, ' + profile.full_name.split(' ')[0] + '!', 'success');
    setTimeout(() => {
      window.location.href = profile.role === 'admin' ? 'admin/index.html' : 'dashboard.html';
    }, 600);
  } catch (e) {
    console.error('Login error:', e);
    UI.showToast(friendlyError(e.message), 'error');
    setLoading('login', false);
  }
}

// ============================================================
// REGISTER
// ============================================================
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
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name, role: 'student' } }
    });

    if (error) throw error;

    const user = data?.user;
    if (!user) throw new Error('Sign up failed — no user returned.');

    // If session exists → email confirmation is OFF → auto login
    if (data.session) {
      await ensureProfile(user.id, name, email);
      UI.showToast('🎉 Account created! Redirecting…', 'success');
      setTimeout(() => { window.location.href = 'dashboard.html'; }, 800);
    } else {
      // Email confirmation is ON → ask user to verify
      UI.showToast('✅ Account created! Check your email to confirm, then sign in.', 'success', 7000);
      setLoading('reg', false);
      setTimeout(() => switchTab('login'), 3000);
    }
  } catch (e) {
    console.error('Register error:', e);
    UI.showToast(friendlyError(e.message), 'error');
    setLoading('reg', false);
  }
}

// ============================================================
// ENSURE PROFILE EXISTS (fallback if DB trigger is slow)
// ============================================================
async function ensureProfile(userId, fullName, email) {
  try {
    const { data: existing } = await supabase
      .from('profiles').select('id').eq('id', userId).single();
    if (!existing) {
      await supabase.from('profiles').insert({
        id: userId, full_name: fullName,
        email: email, role: 'student', is_active: true
      });
    }
  } catch (_) { /* trigger may have already created it */ }
}

// ============================================================
// FRIENDLY ERROR MESSAGES
// ============================================================
function friendlyError(msg) {
  if (!msg) return 'Something went wrong. Please try again.';
  if (msg.includes('Invalid login credentials'))
    return 'Incorrect email or password.';
  if (msg.includes('Email not confirmed'))
    return 'Please confirm your email first, then sign in.';
  if (msg.includes('User already registered') || msg.includes('already been registered'))
    return 'This email is already registered. Please sign in instead.';
  if (msg.includes('Password should be'))
    return 'Password must be at least 6 characters.';
  if (msg.includes('Unable to validate email'))
    return 'Please enter a valid email address.';
  if (msg.includes('Failed to fetch') || msg.includes('NetworkError') || msg.includes('fetch'))
    return '❌ Cannot connect — check your Supabase URL & API key in js/config.js';
  if (msg.includes('Invalid API key') || msg.includes('apikey') || msg.includes('401'))
    return '❌ Invalid Supabase API key — update js/config.js with your real credentials.';
  return msg;
}

// ============================================================
// AUTO-REDIRECT IF ALREADY LOGGED IN
// ============================================================
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
    console.warn('Session check failed:', e.message);
  }
})();

// ============================================================
// ENTER KEY SUPPORT
// ============================================================
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  const loginHidden = document.getElementById('form-login').classList.contains('hidden');
  if (!loginHidden) handleLogin();
  else handleRegister();
});