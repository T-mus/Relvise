window.addEventListener("DOMContentLoaded",(()=>{}));let spollers=document.querySelectorAll(".item-footer__spoller"),contentItems=document.querySelectorAll(".spoller-content");spollers.forEach((e=>{e.addEventListener("click",(()=>{let t=e.nextElementSibling;t.style.maxHeight?(contentItems.forEach((e=>e.style.maxHeight=null)),spollers.forEach((e=>e.classList.remove("active")))):(contentItems.forEach((e=>e.style.maxHeight=null)),t.style.maxHeight=t.scrollHeight+"px",spollers.forEach((e=>e.classList.remove("active"))),e.classList.add("active"))}))}));let burger=document.querySelector(".menu__burger"),menuBody=document.querySelector(".js-menu-body"),documentBody=document.querySelector("body");function clickOutside(){document.addEventListener("click",(e=>{if(bodyPath=e.composedPath().includes(menuBody),burgerPath=e.composedPath().includes(burger),!bodyPath){if(burgerPath)return!1;burger.classList.remove("active"),menuBody.classList.remove("active"),documentBody.classList.remove("stop-scroll")}}))}burger.addEventListener("click",(function(){documentBody.classList.toggle("stop-scroll"),this.classList.toggle("active"),menuBody.classList.toggle("active"),menuBody.classList.contains("active")&&clickOutside()}));let header=document.querySelector(".js-header"),headerHeight=header.clientHeight,headerBackground=document.querySelector(".js-header-row"),scrollPos=window.pageYOffset;window.addEventListener("scroll",(()=>{scrollPos=window.pageYOffset,scrollPos>headerHeight?header.classList.add("fixed"):0==scrollPos&&header.classList.remove("fixed")}));let animItems=document.querySelectorAll("._anim-items");if(animItems.length>0){function animOnScroll(){for(let e=0;e<animItems.length;e++){let t=animItems[e],o=t.offsetHeight,s=offset(t).top,n=4,l=window.innerHeight-o/n;o>window.innerHeight&&(l=window.innerHeight-window.innerHeight/n),pageYOffset>s-l&&pageYOffset<s+o?t.classList.add("_animation"):t.classList.contains("no-hide")||t.classList.remove("_animation")}}function offset(e){let t=e.getBoundingClientRect(),o=window.pageXOffset||document.documentElement.scrollLeft,s=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+s,left:t.left+o}}window.addEventListener("scroll",animOnScroll),setTimeout((()=>{animOnScroll()}),300)}