// SnapBrief v2 - Script

document.addEventListener('DOMContentLoaded', function () {
  const uploadForm = document.getElementById('uploadForm');
  const loginForm = document.getElementById('loginForm');
  const contactForm = document.getElementById('contactForm');

  if (uploadForm) {
    uploadForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('File uploaded and processed! (demo only)');
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Logged in successfully (demo only).');
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thanks for reaching out! We’ll get back to you soon.');
    });
  }
});
