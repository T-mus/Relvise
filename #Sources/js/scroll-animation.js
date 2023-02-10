let animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);

   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         let animItem = animItems[index],
            animItemHeight = animItem.offsetHeight,
            animItemOffset = offset(animItem).top,
            animStart = 4; // - Коефіцієнт регулювання початку анімації

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < animItemOffset + animItemHeight)) {
            animItem.classList.add('_animation');
         }
         else {
            if (!animItem.classList.contains('no-hide')) {
               animItem.classList.remove('_animation');
            }
         }
      }
   }
   setTimeout(() => {
      animOnScroll();
   }, 300);

   //* Кросбраузерна функція для отримання відступу ↓
   function offset(el) {
      let rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      return {
         top: rect.top + scrollTop,
         left: rect.left + scrollLeft,
      }
   }
}