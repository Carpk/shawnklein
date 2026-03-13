// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));

// Post modal
const modal = document.getElementById('post-modal');
const modalBody = modal.querySelector('.modal-body');
const modalClose = modal.querySelector('.modal-close');

function openModal(src) {
  modalBody.innerHTML = '<p class="modal-loading">Loading...</p>';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  fetch(src)
    .then(r => {
      if (!r.ok) throw new Error('Not found');
      return r.text();
    })
    .then(md => { modalBody.innerHTML = marked.parse(md); })
    .catch(() => { modalBody.innerHTML = '<p class="modal-error">Post coming soon.</p>'; });
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.post-card[data-src]').forEach(card => {
  card.addEventListener('click', e => {
    e.preventDefault();
    openModal(card.dataset.src);
  });
});

modalClose.addEventListener('click', closeModal);
modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
