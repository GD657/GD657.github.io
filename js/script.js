// Smooth scrolling for in-page links with safety checks and header offset  
const header = document.querySelector('header');  
const headerOffset = header ? header.offsetHeight : 0;
  
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {  
  anchor.addEventListener('click', (e) => {  
    const hash = anchor.getAttribute('href');  
    if (!hash || hash === '#') return; // ignore empty fragments
  
    const target = document.querySelector(hash);  
    if (!target) return; // do nothing if target doesn't exist
  
    e.preventDefault();
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;  
    const top =  
      target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
  
    if (prefersReduced) {  
      window.scrollTo(0, top);  
    } else {  
      window.scrollTo({ top, behavior: 'smooth' });  
    }
  
    // Accessibility: move focus to the target without jumping  
    target.setAttribute('tabindex', '-1');  
    target.focus({ preventScroll: true });
  
    // Update the URL hash without an abrupt jump  
    if (history.pushState) history.pushState(null, '', hash);  
  });  
});
  
// Form submission handling (safe if no form exists)  
const form = document.querySelector('form');  
if (form) {  
  form.addEventListener('submit', (e) => {  
    e.preventDefault();  
    alert('Thanks! This demo form does not send yet.');  
    form.reset();  
  });  
}  
