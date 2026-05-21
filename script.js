const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('open');
  menuToggle.classList.toggle('active');
});

const fadeItems = document.querySelectorAll('.fade-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,
});

fadeItems.forEach(item => observer.observe(item));

const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (targetId.length > 1) {
      event.preventDefault();
      document.querySelector(targetId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      if (navigation.classList.contains('open')) {
        navigation.classList.remove('open');
      }
    }
  });
});

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for reaching out. Our team will contact you shortly.');
    contactForm.reset();
  });
}
