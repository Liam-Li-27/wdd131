
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");


menuToggle.addEventListener("click", (e) => {
    e.stopPropagation(); 
    toggleMenu();
});


function toggleMenu() {
    menu.classList.toggle("show");
    menuToggle.classList.toggle("active");

    if (menu.classList.contains("show")) {
        menuToggle.innerHTML = "✕"; 
    } else {
        menuToggle.innerHTML = "☰";
    }
}

const menuItems = document.querySelectorAll(".menu a");
menuItems.forEach(item => {
    item.addEventListener("click", (e) => {
  
        if (window.innerWidth < 1024) {
            e.preventDefault(); 
            setTimeout(() => {
                closeMenu();
                console.log("Navigating to:", item.getAttribute("href"));
            }, 300);
        }
    });
});



function closeMenu() {
    menu.classList.remove("show");
    menuToggle.classList.remove("active");
    menuToggle.innerHTML = "☰";
}

