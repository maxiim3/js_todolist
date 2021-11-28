const menuBt = document.getElementById('btn');
const sideBar = document.getElementById('nav');
let menuIsVisible = false;

const hideNavbav = () => {
    sideBar.className = "menuOut";
    setTimeout(() => {
        sideBar.style.display = 'none'
    }, 300)
}

const showNavBar = () => {
    sideBar.className = "menuIn";
    sideBar.style.display = 'flex';
}

menuBt.addEventListener('click', () => {
    if (!menuIsVisible) {
        showNavBar();
    }
    else {
        hideNavbav();
    }
    menuIsVisible = !menuIsVisible;
})

