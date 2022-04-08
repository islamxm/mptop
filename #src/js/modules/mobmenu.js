export const mobmenu = () => {
    const btn = document.querySelector('.header__burger');
    const closeBtn = document.querySelector('.mobmenu__head_close');
    const menu = document.querySelector('.mobmenu');



    if(btn) {
        btn.addEventListener('click', () => {
            menu.classList.add('active');
        });
    }

    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    }
}