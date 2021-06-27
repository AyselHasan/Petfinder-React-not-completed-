var breedBtn = document.getElementById("nav-breed");
var resourcesBtn = document.getElementById("nav-resources");
var searchBtn = document.getElementById("search-btn");

function openSection() {
  breedBtn.classList.toggle("d-none");
  if (!resourcesBtn.classList.contains("d-none")) {
    resourcesBtn.classList.add("d-none");
  }
}

function openSection2() {
  resourcesBtn.classList.toggle("d-none");
  if (!breedBtn.classList.contains("d-none")) {
    breedBtn.classList.add("d-none");
  }
}

function openSearch() {
  searchBtn.classList.toggle("d-none");
}
