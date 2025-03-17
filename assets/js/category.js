import { fetchApi } from "./fetchApi.js";
import { apiCategory } from "./constants.js";
import { params } from "./variable.js";
import { drawProducts } from "./drawProducts.js";

const category = document.querySelector("#category");

fetchApi(apiCategory)
  .then(data => {
    let htmls = data.map(item => {
      return `
        <div class="category__item" data-category=${item.name}>
          ${item.name}
        </div>
      `;
    })
    category.innerHTML = htmls.join("");

    const categoryList = document.querySelectorAll("#category .category__item");
    categoryList.forEach(item => {
      item.addEventListener("click", function (e) {
        params.category = item.getAttribute("data-category")
        drawProducts();
      })
    })
  })

