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
// ----------------------------------------------------------------------------
function openSearch() {
  const btn = document.getElementById("searchBtn");
  const input = document.getElementById("searchInput");

  btn.style.display = "none";     // يخفي الصورة
  input.style.display = "block";  // يظهر مربع الكتابة
  input.focus();                  // يخلي الماوس جاهز للكتابة
}

function filterList() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();
  const ul = document.getElementById("resultsList");
  const li = ul.getElementsByTagName("li");

  // تظهر القائمة فقط لو في كلام مكتوب
  ul.style.display = input.value.length > 0 ? "block" : "none";

  for (let i = 0; i < li.length; i++) {
    let a =li[i].getElementsByTagName("a")[0];
    
    if (a){
      let text = a.textContent || a.innerText;
    if (text.toLowerCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
    }
  }
}