document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetElement = document.querySelector(this.getAttribute('href'));
        
        const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 100;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth' 
        });
    });
});
