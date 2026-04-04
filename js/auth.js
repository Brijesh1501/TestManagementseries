// auth.js — Login / Register logic (v2 — fully fixed)

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
    // 1. Create auth user
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name, role: 'student' } }
    });

    if (error) throw error;

    const user = data?.user;
    if (!user) throw new Error('No user returned from signUp.');

    // 2. Manually upsert profile (don't rely solely on DB trigger)
    const { error: profileError } = await supabase.from('profiles').upsert({
      id:        user.id,
      full_name: name,
      email:     email,
      role:      'student',
      is_active: true
    }, { onConflict: 'id' });

    if (profileError) console.warn('Profile upsert warning:', profileError.message);

    // 3. Check if we got a session (email confirmation OFF) or not (email confirmation ON)
    if (data.session) {
      // Email confirmation is DISABLED — user is already logged in
      UI.showToast('🎉 Account created! Redirecting to dashboard…', 'success');
      setTimeout(() => { window.location.href = 'dashboard.html'; }, 900);
    } else {
      // Email confirmation is ENABLED — Supabase sent a confirmation email
      setLoading('reg', false);
      showSuccessBanner(email);
    }

  } catch (e) {
    console.error('Register error:', e);
    UI.showToast(friendlyError(e.message), 'error', 6000);
    setLoading('reg', false);
  }
}

// Show a nice banner instead of just a toast when email confirmation needed
function showSuccessBanner(email) {
  const formEl = document.getElementById('form-register');
  formEl.innerHTML = `
    <div class="text-center py-4">
      <div class="text-5xl mb-4">📧</div>
      <h3 class="text-white font-bold text-lg mb-2">Check your email!</h3>
      <p class="text-white/70 text-sm mb-1">We sent a confirmation link to:</p>
      <p class="text-indigo-300 font-semibold text-sm mb-5">${email}</p>
      <p class="text-white/50 text-xs mb-6">Click the link in the email, then come back and sign in.</p>
      <button onclick="switchTab('login')"
        class="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all text-sm">
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
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;

    const user = data?.user;
    if (!user) throw new Error('No user returned from signIn.');

    // Fetch profile — with retry in case trigger hasn't run yet
    let profile = null;
    for (let attempt = 0; attempt < 3; attempt++) {
      const { data: p } = await supabase.from('profiles').select('*').eq('id', user.id).single();
      if (p) { profile = p; break; }
      await new Promise(r => setTimeout(r, 600)); // wait 600ms and retry
    }

    // If still no profile, create it now
    if (!profile) {
      await supabase.from('profiles').upsert({
        id:        user.id,
        full_name: user.user_metadata?.full_name || email.split('@')[0],
        email:     user.email,
        role:      'student',
        is_active: true
      }, { onConflict: 'id' });
      profile = { role: 'student' };
    }

    UI.showToast('Welcome back, ' + (profile.full_name || 'User').split(' ')[0] + '! 👋', 'success');
    setTimeout(() => {
      window.location.href = profile.role === 'admin' ? 'admin/index.html' : 'dashboard.html';
    }, 700);

  } catch (e) {
    console.error('Login error:', e);
    UI.showToast(friendlyError(e.message), 'error', 6000);
    setLoading('login', false);
  }
}

// ─────────────────────────────────────────────
// FRIENDLY ERROR MESSAGES
// ─────────────────────────────────────────────
function friendlyError(msg) {
  if (!msg) return 'Something went wrong. Please try again.';
  const m = msg.toLowerCase();
  if (m.includes('invalid login credentials') || m.includes('invalid_credentials'))
    return '❌ Incorrect email or password.';
  if (m.includes('email not confirmed'))
    return '📧 Please confirm your email first — check your inbox, then sign in.';
  if (m.includes('user already registered') || m.includes('already been registered'))
    return '⚠️ This email is already registered. Please sign in instead.';
  if (m.includes('password should be') || m.includes('weak_password'))
    return '⚠️ Password must be at least 6 characters.';
  if (m.includes('unable to validate email') || m.includes('invalid email'))
    return '⚠️ Please enter a valid email address.';
  if (m.includes('failed to fetch') || m.includes('networkerror') || m.includes('load failed'))
    return '🌐 Network error — check your internet connection.';
  if (m.includes('rate limit') || m.includes('too many'))
    return '⏳ Too many attempts. Please wait a minute and try again.';
  if (m.includes('signup disabled') || m.includes('signups not allowed'))
    return '⛔ Sign-ups are disabled on this Supabase project. Enable them in Authentication → Settings.';
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
    console.warn('Session check:', e.message);
  }
})();

// ─────────────────────────────────────────────
// ENTER KEY SUPPORT
// ─────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  const loginHidden = document.getElementById('form-login').classList.contains('hidden');
  if (!loginHidden) handleLogin(); else handleRegister();
});