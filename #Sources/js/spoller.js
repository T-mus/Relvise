let spollers = document.querySelectorAll('.item-footer__spoller'),
    contentItems = document.querySelectorAll('.spoller-content');

spollers.forEach((item) => {
    item.addEventListener('click', () => {
        let currentContentItem = item.nextElementSibling;
        
        if (currentContentItem.style.maxHeight) {
            contentItems.forEach((elm) => elm.style.maxHeight = null);
            spollers.forEach((i) => i.classList.remove('active'));
        }
        else {
            contentItems.forEach((elm) => elm.style.maxHeight = null);
            currentContentItem.style.maxHeight = currentContentItem.scrollHeight + 'px';
            spollers.forEach((i) => i.classList.remove('active'));
            item.classList.add('active');
        }
    });
});