const searchBtn = document.querySelector(".subMenu__search");
const searchFormWrap = document.querySelector(".searchFormWrap");
const header = document.querySelector(".header");
searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  searchFormWrap.classList.toggle("is--active");
  header.classList.toggle("bg--gray");
});
