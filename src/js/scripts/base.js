/*
   : ibg
   : altTextForImg
   : menu-burger
*/

// ! ibg
if (document.querySelectorAll(".ibg").length > 0) {
   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}

// ! altTextForImg
let allImg = document.querySelectorAll("img");
let messageIfImgNotLoaded = "Сдесь должно было быть изображение";

function setText(tag) {
   tag.removeAttribute("alt");
   tag.setAttribute("alt", messageIfImgNotLoaded);
}

if (allImg.length > 0) {
   allImg.forEach(el => {
      setText(el);
   });
}

// ! menu-burger
if (document.querySelector(".header__burger")) {
   const headerBurger = document.querySelector(".header__burger");
   const headerMenu = document.querySelector(".header__menu");

   headerBurger.addEventListener("click", function (e) {
      headerBurger.classList.toggle("active");
      headerMenu.classList.toggle("active");
      document.body.classList.toggle("lock");
   });
}