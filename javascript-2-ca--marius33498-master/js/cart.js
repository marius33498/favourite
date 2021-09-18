import iceCreams from "./data/ice-creams.js";
import { getExistingFavs } from "./data/getFavs.js";

/*
const total = querySelector(".total");*/

const totalPrice = document.querySelector(".total-price b");
const totalProducts = document.querySelector(".total b");

let favourites = getExistingFavs();

const cart = document.querySelector(".cart");

let total = 0;


favourites.forEach(favourite => {
    iceCreams.forEach(iceCream => {
        if(iceCream.id === favourite) {
            cart.innerHTML += `<div class="cart-item" style="border:${iceCream.colour} 2px solid;"><h4 style="color: ${iceCream.colour};">${iceCream.name}</h4>
            ${iceCream.price} kr<button class="cart-delete-button" data-id="${iceCream.id}" data-name="${iceCream.name}"></button></div>`;
            
            total += iceCream.price;
        }
    });
});

totalProducts.innerHTML =`${favourites.length}`;
totalPrice.innerHTML = ` ${total} `;

/* delete button
--------------------------------------*/ 
const buttonDelete = document.querySelectorAll(".cart-item button");
buttonDelete.forEach(function(button){
    button.onclick = function(event){
        const id = parseInt(event.target.dataset.id);

        favourites = favourites.filter(favourite => favourite !== id);

        localStorage.setItem("favourites", JSON.stringify(favourites));

        alert("are you sure you want to remove this?");
    }
}); 

/* button to clear 
-------------------------------*/ 
const buttons = document.querySelectorAll(".clear");

buttons.forEach(function(button){
    button.onclick = function(event){
        localStorage.removeItem('favourites');
       alert("are you sure you want to remove this?");
    }
})

