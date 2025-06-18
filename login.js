const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

loginTab.addEventListener('click', () => {
  loginTab.classList.add('active');
  signupTab.classList.remove('active');
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
});

signupTab.addEventListener('click', () => {
  signupTab.classList.add('active');
  loginTab.classList.remove('active');
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
});

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Logged in! (Fake login for demo only)');
});

signupForm.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Signed up! (Fake signup for demo only)');
});