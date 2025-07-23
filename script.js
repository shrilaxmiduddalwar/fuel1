// Show clicked section and add active class to menu item
function showSection(id, el) {
  // Hide all sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('active');
    section.classList.add('hidden');
  });

  // Show selected section
  const activeSection = document.getElementById(id);
  activeSection.classList.add('active');
  activeSection.classList.remove('hidden');

  // Handle active nav effect
  const navItems = document.querySelectorAll('.nav-links li');
  navItems.forEach(item => item.classList.remove('active'));
  el.classList.add('active');
}

// Zoom-out effect on logo after 10s
setTimeout(() => {
  const logo = document.querySelector('.logo');
  logo.style.transition = 'transform 1s ease';
  logo.style.transform = 'scale(0.85)';
}, 10000);
function showSection(id, el) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('active');
    section.classList.add('hidden');
  });

  // Special handling for App
  if (id === 'app') {
    document.getElementById('appAlert').style.display = 'flex';
  } else {
    const activeSection = document.getElementById(id);
    activeSection.classList.add('active');
    activeSection.classList.remove('hidden');
  }

  const navItems = document.querySelectorAll('.nav-links li');
  navItems.forEach(item => item.classList.remove('active'));
  el.classList.add('active');
}

// Close alert
function closeAlert() {
  document.getElementById('appAlert').style.display = 'none';
}
