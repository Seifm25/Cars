function toggleMenu() {
    const nav = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');
    
    nav.classList.toggle('active');
    menuIcon.classList.toggle('open');
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
    if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
        nav.classList.remove('active');
        menuIcon.classList.remove('open');
    }
});