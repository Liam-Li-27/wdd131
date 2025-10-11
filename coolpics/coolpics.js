
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

function handleResize(){
    if (window.innerWidth > 1000){
        menu.classList.remove('hide')
    }else{
        menu.classList.add('hide')
    }
}
handleResize();
window.addEventListener('resize',handleResize)

/* Modal */

const gallery = document.querySelector('.pictures')
const modal = document.querySelector('dialog')
const modalImage = modal.querySelector('img')
const closeButton = document.querySelector('.close-viewer')

gallery.addEventListener('click',function(e){
    if(e.target.tagName ==='IMG'){
        openModal(e)
    }
})

function openModal(e){
    modalImage.src=e.target.src
    modalImage.alt=e.target.alt
    modal.showModal()
}

closeButton.addEventListener('click', ()=>{
    modal.close()
})
