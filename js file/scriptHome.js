function toggleMenu() {
    const nav = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');
     const footer = document.querySelector('footer');
    
    nav.classList.toggle('active');
    menuIcon.classList.toggle('open');
     footer.classList.toggle('footer-shift');
}

function toggleCars(event) {
    event.preventDefault(); 
    const carsDropdown = document.getElementById('cars-dropdown');
    
    
    const btn = event.currentTarget;
    carsDropdown.classList.toggle('show');
    
    if (carsDropdown.classList.contains('show')) {
        btn.innerHTML = "Cars ▴";
    } else {
        btn.innerHTML = "Cars ▾";
    }
}

document.addEventListener('click', function(event) {
    const nav = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');
    const footer = document.querySelector('footer');
    if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
         if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        menuIcon.classList.remove('open');
        footer.classList.remove('footer-shift');
        }
    }

});