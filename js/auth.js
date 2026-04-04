// auth.js — Login / Register logic

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
  document.getElementById(`${prefix}-btn-text`).textContent = loading ? (prefix === 'login' ? 'Signing in…' : 'Creating…') : (prefix === 'login' ? 'Sign In' : 'Create Account');
  document.getElementById(`${prefix}-spinner`).classList.toggle('hidden', !loading);
}

async function handleLogin() {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;

  if (!email || !password) return UI.showToast('Please fill in all fields.', 'warning');
  setLoading('login', true);

  try {
    const { user } = await Auth.signIn(email, password);
    const profile = await Auth.getProfile(user.id);
    UI.showToast('Welcome back!', 'success');
    setTimeout(() => {
      window.location.href = profile.role === 'admin' ? 'admin/index.html' : 'dashboard.html';
    }, 500);
  } catch (e) {
    UI.showToast(e.message || 'Login failed.', 'error');
    setLoading('login', false);
  }
}

async function handleRegister() {
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const password = document.getElementById('reg-password').value;
  const confirm = document.getElementById('reg-confirm').value;

  if (!name || !email || !password || !confirm) return UI.showToast('Please fill in all fields.', 'warning');
  if (password.length < 8) return UI.showToast('Password must be at least 8 characters.', 'warning');
  if (password !== confirm) return UI.showToast('Passwords do not match.', 'warning');

  setLoading('reg', true);
  try {
    await Auth.signUp(email, password, name);
    UI.showToast('Account created! Please check your email to confirm.', 'success', 5000);
    setTimeout(() => switchTab('login'), 2000);
  } catch (e) {
    UI.showToast(e.message || 'Registration failed.', 'error');
  }
  setLoading('reg', false);
}

// Check if already logged in
(async () => {
  const session = await Auth.getSession();
  if (session) {
    const profile = await Auth.getProfile(session.user.id);
    window.location.href = profile.role === 'admin' ? 'admin/index.html' : 'dashboard.html';
  }
})();

// Enter key support
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  if (!document.getElementById('form-login').classList.contains('hidden')) handleLogin();
  else handleRegister();
});
