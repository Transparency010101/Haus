// * тут небольшие DOM/BOM скрипты

// * Споилер для stay
const stayTitles = document.querySelectorAll(".stay-list__title");
const stayList = document.querySelectorAll('.stay-list__list');

stayTitles.forEach(title => {
   title.addEventListener("click", function (e) {
      title.nextElementSibling.style.maxHeight = 0;
      title.classList.toggle("active");
      title.nextElementSibling.classList.toggle('active');
      title.nextElementSibling.style.maxHeight = title.nextElementSibling.scrollHeight + 'px';
   });
});