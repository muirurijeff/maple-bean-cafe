// ===== CONTACT FORM VALIDATION =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // stop the page from refreshing

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    let isValid = true;

    // Check name
    if (name.value.trim() === '') {
      name.classList.add('is-invalid');
      isValid = false;
    } else {
      name.classList.remove('is-invalid');
      name.classList.add('is-valid');
    }

    // Check email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      email.classList.add('is-invalid');
      isValid = false;
    } else {
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
    }

    // Check subject
    if (subject.value === '') {
      subject.classList.add('is-invalid');
      isValid = false;
    } else {
      subject.classList.remove('is-invalid');
      subject.classList.add('is-valid');
    }

    // Check message
    if (message.value.trim() === '') {
      message.classList.add('is-invalid');
      isValid = false;
    } else {
      message.classList.remove('is-invalid');
      message.classList.add('is-valid');
    }

    // If all valid, show success message
    if (isValid) {
      document.getElementById('successMsg').classList.remove('d-none');
      contactForm.reset();
      // Remove green borders after reset
      [name, email, subject, message].forEach(el => el.classList.remove('is-valid'));
    }
  });
}