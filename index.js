
const buttonElement = document.getElementById('read-more');
const pElement = document.getElementById('more-info');
const showInfo = (domElement) => {
    if (domElement.style.display !== 'block') {
        domElement.style.display = 'block';
    } else {
        domElement.style.display = 'none'

    }
}
buttonElement.addEventListener('click', () => {
    showInfo(pElement);
})
const menu = document.querySelector(".header__right-menu ");
const items = document.querySelectorAll(".item");
const hamburger = document.querySelector(".hamburger");
const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");
function navmenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}
hamburger.addEventListener('click', navmenu);
items.forEach(
    function (item) {
        item.addEventListener('click', navmenu);
    }
)
const apikey = "169ea1bcf7343a0cc211782e287a9b74";

