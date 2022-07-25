// * тут небольшие DOM/BOM скрипты

// * Аккордион для stay
const stayTitles = document.querySelectorAll(".stay-list__title");

stayTitles.forEach(title => {
   title.addEventListener("click", function () {

      stayTitles.forEach(titleRemove => {
         titleRemove.classList.remove("active");
         titleRemove.nextElementSibling.classList.remove("active");
      });

      title.classList.add("active");
      title.nextElementSibling.classList.add("active");
   });
});

