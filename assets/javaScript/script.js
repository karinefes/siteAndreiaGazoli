function menuShow(){
    let menuMobile =document.querySelector('.nav-responsivo');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white.svg";

} else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "img/close_white_.svg";

}
}
