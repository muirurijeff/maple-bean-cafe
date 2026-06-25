// ===== CONTACT FORM VALIDATION =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    let isValid = true;

    if (name.value.trim() === '') {
      name.classList.add('is-invalid');
      isValid = false;
    } else {
      name.classList.remove('is-invalid');
      name.classList.add('is-valid');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      email.classList.add('is-invalid');
      isValid = false;
    } else {
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
    }

    if (subject.value === '') {
      subject.classList.add('is-invalid');
      isValid = false;
    } else {
      subject.classList.remove('is-invalid');
      subject.classList.add('is-valid');
    }

    if (message.value.trim() === '') {
      message.classList.add('is-invalid');
      isValid = false;
    } else {
      message.classList.remove('is-invalid');
      message.classList.add('is-valid');
    }

    if (isValid) {
      document.getElementById('successMsg').classList.remove('d-none');
      contactForm.reset();
      [name, email, subject, message].forEach(el => el.classList.remove('is-valid'));
    }
  });
}

// ===== MENU FILTER =====
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    filterButtons.forEach(btn => {
      btn.classList.remove('active-filter', 'btn-warning');
      btn.classList.add('btn-outline-warning');
    });
    this.classList.add('active-filter', 'btn-warning');
    this.classList.remove('btn-outline-warning');

    const filter = this.getAttribute('data-filter');
    const items = document.querySelectorAll('.menu-item');

    items.forEach(function(item) {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// ===== WELCOME MESSAGE BY TIME OF DAY =====
document.addEventListener('DOMContentLoaded', function () {
  const greetingEl = document.getElementById('timeGreeting');

  if (greetingEl) {
    const hour = new Date().getHours();
    let message = 'Good day — we’re brewing fresh coffee just for you.';

    if (hour < 12) {
      message = 'Good morning — we’re brewing fresh coffee just for you.';
    } else if (hour < 17) {
      message = 'Good afternoon — we’re brewing fresh coffee just for you.';
    } else {
      message = 'Good evening — we’re brewing fresh coffee just for you.';
    }

    greetingEl.textContent = message;
  }
});

// ===== DARK MODE TOGGLE =====
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const btns = document.querySelectorAll('.darkModeBtn');
  btns.forEach(btn => {
    if (document.body.classList.contains('dark-mode')) {
      btn.textContent = '☀️ Light Mode';
    } else {
      btn.textContent = '🌙 Dark Mode';
    }
  });
}