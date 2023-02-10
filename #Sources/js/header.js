//Todo: Burger ↓
let burger = document.querySelector('.menu__burger'),
    menuBody = document.querySelector('.js-menu-body'),
    documentBody = document.querySelector('body');

burger.addEventListener('click', function() {
    documentBody.classList.toggle('stop-scroll');

    this.classList.toggle('active');
    menuBody.classList.toggle('active');

    //* Click outside
    if (menuBody.classList.contains('active')) {
        clickOutside();
    }
});

//Todo: Click outside the element ↓
function clickOutside() {
    document.addEventListener('click', (e) => {
        bodyPath = e.composedPath().includes(menuBody);
        burgerPath = e.composedPath().includes(burger);

        if (!bodyPath) {
            if (burgerPath) {
                return false;
            }
            else {
                burger.classList.remove('active');
                menuBody.classList.remove('active');
                documentBody.classList.remove('stop-scroll');
            }
        }
    });
}

//Todo: Header fixed ↓
let header = document.querySelector('.js-header'),
    headerHeight = header.clientHeight,
    headerBackground = document.querySelector('.js-header-row'),
    scrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
    scrollPos = window.pageYOffset;

    if(scrollPos > headerHeight) {
        header.classList.add('fixed');
    }
    else if(scrollPos == 0) {
        header.classList.remove('fixed');
    }
});

