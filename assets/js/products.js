import { drawProducts } from "./drawProducts.js";
import { params } from "./variable.js";

drawProducts();

// Search Query 
const inputSearch = document.querySelector("#search input")
const buttonSearch = document.querySelector("#search button")
const search = () => {
  params.q = inputSearch.value;
  drawProducts();
}
buttonSearch.addEventListener("click", function (e) {
  search();
})
inputSearch.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    search();
  }
})

//Filter Query
const filter = document.querySelector("#filter");
filter.addEventListener("change", function (e) {
  console.log(e.target.value);
  switch (e.target.value) {
    case "mac-dinh":
      params.sort = "";
      params.order = "";
      break;
    case "gia-thap-den-cao":
      params.sort = "price";
      params.order = "asc";
      break;
    case "gia-cap-den-thap":
      params.sort = "price";
      params.order = "desc";
      break;
    case "giam-gia-nhieu":
      params.sort = "discountPercentage";
      params.order = "desc";
      break;

    default:
      break;
  }
  drawProducts();
})

// Pagination Query 
const prevButton = document.querySelector(".pagination__button--prev")
const nextButton = document.querySelector(".pagination__button--next")
const numberPagination = document.querySelector(".pagination__number")

prevButton.addEventListener("click", function (e) {
  if (params.page > 1) {
    params.page = params.page - 1;
    numberPagination.innerHTML = params.page;
    drawProducts();
  }
})
nextButton.addEventListener("click", function (e) {
  if (params.page < 3) {
    params.page = params.page + 1;
    numberPagination.innerHTML = params.page;
    drawProducts();
  }
})

