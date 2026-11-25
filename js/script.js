'use strict'
const productItemsEl = document.querySelector('.product-items');
(async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json();
    data.map((pr) =>{
        productItemsEl.innerHTML += `
            <div class="product-card">
                <img src="${pr.image}" alt="${pr.title}">
                <h3>${pr.title}</h3>
                <p>$${pr.price}</p>
            </div>
        `
    })
})()