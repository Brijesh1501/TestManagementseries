// auth.js — v3 (Vercel + Supabase compatible)

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
    console.log('[AUTH] Starting signUp for:', email);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name, role: 'student' },
        emailRedirectTo: window.location.origin + '/dashboard.html'
      }
    });

    console.log('[AUTH] signUp response:', { data, error });

    if (error) throw error;

    const user = data?.user;
    if (!user) throw new Error('No user returned from Supabase signUp.');

    // Always manually upsert profile — don't rely only on trigger
    console.log('[AUTH] Upserting profile for user:', user.id);
    const { error: profileErr } = await supabase.from('profiles').upsert({
      id:        user.id,
      full_name: name,
      email:     email,
      role:      'student',
      is_active: true
    }, { onConflict: 'id' });

    if (profileErr) {
      console.warn('[AUTH] Profile upsert warning:', profileErr.message);
    } else {
      console.log('[AUTH] Profile upserted successfully');
    }

    // Check if session exists (email confirmation OFF) or not (email confirmation ON)
    if (data.session) {
      console.log('[AUTH] Session received — redirecting to dashboard');
      UI.showToast('🎉 Account created! Redirecting…', 'success');
      setTimeout(() => { window.location.href = 'dashboard.html'; }, 800);
    } else {
      console.log('[AUTH] No session — email confirmation required');
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
      <h3 class="text-white font-bold text-lg mb-2">Hi ${name}! Check your email</h3>
      <p class="text-white/60 text-sm mb-1">Confirmation link sent to:</p>
      <p class="text-indigo-300 font-bold text-sm mb-4">${email}</p>
      <div class="bg-white/10 rounded-xl p-4 mb-5 text-left space-y-2">
        <p class="text-white/70 text-xs font-semibold uppercase tracking-wide">To skip email confirmation:</p>
        <p class="text-white/60 text-xs">1. Go to Supabase Dashboard</p>
        <p class="text-white/60 text-xs">2. Authentication → Settings → Email</p>
        <p class="text-white/60 text-xs">3. Toggle OFF "Enable email confirmations"</p>
        <p class="text-white/60 text-xs">4. Register again — you'll go straight to dashboard</p>
      </div>
      <button onclick="switchTab('login')"
        class="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition-all">
        I've confirmed — Sign In →
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
    console.log('[AUTH] Starting signIn for:', email);

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    console.log('[AUTH] signIn response:', { user: data?.user?.id, error });

    if (error) throw error;

    const user = data?.user;
    if (!user) throw new Error('No user returned from Supabase signIn.');

    // Fetch or create profile
    let profile = null;

    const { data: p, error: pe } = await supabase
      .from('profiles').select('*').eq('id', user.id).single();

    if (pe || !p) {
      console.warn('[AUTH] Profile not found, creating it now…');
      await supabase.from('profiles').upsert({
        id:        user.id,
        full_name: user.user_metadata?.full_name || email.split('@')[0],
        email:     user.email,
        role:      'student',
        is_active: true
      }, { onConflict: 'id' });
      profile = { role: 'student', full_name: user.user_metadata?.full_name || 'User' };
    } else {
      profile = p;
    }

    console.log('[AUTH] Profile:', profile);
    UI.showToast('Welcome, ' + profile.full_name.split(' ')[0] + '! 👋', 'success');
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
    return '📧 Please confirm your email first — check your inbox. Or disable email confirmation in Supabase Auth settings.';
  if (m.includes('user already registered') || m.includes('already been registered'))
    return '⚠️ Email already registered — please sign in instead.';
  if (m.includes('signups not allowed') || m.includes('signup') && m.includes('disabled'))
    return '⛔ Sign-ups are disabled. Go to Supabase → Authentication → Settings → turn ON "Enable sign-ups".';
  if (m.includes('password should be') || m.includes('weak_password'))
    return '⚠️ Password too weak — use at least 6 characters.';
  if (m.includes('rate limit') || m.includes('too many requests') || m.includes('429'))
    return '⏳ Too many attempts. Wait 60 seconds and try again.';
  if (m.includes('failed to fetch') || m.includes('networkerror') || m.includes('load failed'))
    return '🌐 Network error — check your internet or Supabase project status.';
  return msg;
}

// ─────────────────────────────────────────────
// AUTO-REDIRECT IF ALREADY LOGGED IN
// ─────────────────────────────────────────────
(async () => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;
    console.log('[AUTH] Existing session found, fetching profile…');
    const { data: profile } = await supabase
      .from('profiles').select('role').eq('id', session.user.id).single();
    if (profile) {
      window.location.href = profile.role === 'admin' ? 'admin/index.html' : 'dashboard.html';
    }
  } catch (e) {
    console.warn('[AUTH] Session check failed:', e.message);
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