//const input = document.querySelector(".input");
const search = document.querySelector("#search");
const button = document.querySelector(".btn");
const searchInput = document.querySelector("#searchInput");

button.addEventListener("click", function () {
  search.classList.toggle("active");
  searchInput.focus();
  console.log("ls1");
});

searchInput.addEventListener("input", function () {
  search.classList.toggle("active");
  //input.focus();
  pattern = document.getElementById("searchInput").value;
  console.log("ls2 : ", pattern); //TODO rm
  showFiltered(pattern);
});
