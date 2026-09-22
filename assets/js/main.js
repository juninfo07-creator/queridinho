// Menu mobile
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
const nav = navList ? navList.closest('.nav') : null;

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navList.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Fallback visual para fotos ainda não adicionadas ao projeto
document.querySelectorAll('.product-card__media img, .about__photo img').forEach((img) => {
  img.addEventListener('error', () => {
    img.style.display = 'none';
  }, { once: true });
});

// Revelação suave dos elementos ao rolar a página
const revealEls = document.querySelectorAll('.reveal');

if (revealEls.length) {
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }
}
