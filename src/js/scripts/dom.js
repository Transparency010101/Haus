// * тут небольшие DOM/BOM скрипты

// * Споилер для stay
const stayTitles = document.querySelectorAll(".stay-list__title");

stayTitles.forEach(title => {
   title.addEventListener("click", function (e) {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
   });
});

