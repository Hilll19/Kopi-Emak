// This toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// When user click the hambuger menu or 3 side menu
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// When click out sidebar this for undisplay nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.targe)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
    // when user click out from e target its humburgermenu and navbar will be non active
});