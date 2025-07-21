document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
  
  addThemeToggleButton();
  
  updateThemeIcon(savedTheme);
});

function addThemeToggleButton() {
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.innerHTML = '<i class="bi"></i> <span class="theme-text"></span>';
  themeToggle.addEventListener('click', toggleTheme);
  
  const navbarRight = document.querySelector('.navbar-right');
  if (navbarRight) {
    navbarRight.insertBefore(themeToggle, navbarRight.firstChild);
  }
}

function toggleTheme() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

function setTheme(theme) {
  const themeStyle = document.getElementById('theme-style');
  if (theme === 'dark') {
    themeStyle.href = './css/dark-mode.css';
    document.body.classList.add('dark-mode');
  } else {
    themeStyle.href = './css/light-mode.css';
    document.body.classList.remove('dark-mode');
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('.theme-toggle i');
  const text = document.querySelector('.theme-text');
  if (theme === 'dark') {
    icon.className = 'bi bi-sun';
  } else {
    icon.className = 'bi bi-moon';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbarNav = document.querySelector('.navbar-nav');

  menuToggle.addEventListener('click', function() {
    navbarNav.classList.toggle('active');
    menuToggle.innerHTML = navbarNav.classList.contains('active') 
      ? '<i class="bi bi-x"></i>' 
      : '<i class="bi bi-list"></i>';
  });

  document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', () => {
      navbarNav.classList.remove('active');
      menuToggle.innerHTML = '<i class="bi bi-list"></i>';
    });
  });
});