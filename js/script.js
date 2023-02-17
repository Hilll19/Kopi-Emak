// This toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// When user click the hambuger menu or 3 side menu
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};