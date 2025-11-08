// Smooth scrolling for navigation links  
document.querySelectorAll('a[href^="#"]').forEach(anchor => {  
    anchor.addEventListener('click', function (e) {  
        e.preventDefault();  
        const target = document.querySelector(this.getAttribute('href'));  
        target.scrollIntoView({  
            behavior: 'smooth'  
        });  
    });  
});
  
// Form submission handling  
const form = document.querySelector('form');  
form.addEventListener('submit', function(e) {  
    e.preventDefault();  
    alert('Form submitted! (In a real site, this would send data to a server)');  
    form.reset();  
});  
