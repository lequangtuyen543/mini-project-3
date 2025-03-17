import { fetchApi } from "./fetchApi.js";
import { apiProducts } from "./constants.js";
import { params } from "./variable.js";

const products = document.querySelector("#products");
let category = ""

export const drawProducts = () => {
  if (params.category != "") {
    category = `category=${params.category}`
  }
  const api = `${apiProducts}?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}&${category}`;

  fetchApi(api)
    .then(data => {
      let htmls = data.map(item => {
        return `
        <div class="products__item">  
          <img src="${item.thumbnail}" class="products__thumbnail">
          <h3 class="products__discountPercentage">${item.discountPercentage}%</h3>
          <h3 class="products__title">${item.title}</h3>
          <span class="products__price">${item.price}$</span>
          <h4 class="products__stock">Stock: ${item.stock}</h4>          
        </div>
      `;
      })
      products.innerHTML = htmls.join("");
    })
}
