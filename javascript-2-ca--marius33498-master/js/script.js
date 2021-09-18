import iceCreams from "./data/ice-creams.js";
import { getExistingFavs } from "./data/getFavs.js";

const currentFavs = getExistingFavs();

const container = document.querySelector(".ice-creams");

iceCreams.forEach((iceCream) => {
    container.innerHTML += `<div class="ice-cream" style="border:${iceCream.colour} 2px solid;"><h4 style="color: ${iceCream.colour};">${iceCream.name}</h4>
    <div class="price"> ${iceCream.price} kr</div><p>Flavour: ${iceCream.flavours}</p>
    <button class="cart-button " data-id="${iceCream.id}" data-name="${iceCream.name}"></button></div>`;
});

const favButton = document.querySelectorAll(".ice-cream button");

favButton.forEach((button) => {
    button.addEventListener("click", handleClick);
});

function handleClick() {
    this.classList.toggle("button");
    this.classList.toggle("added");

    
    const id = this.dataset.id;

    currentFavs.push(parseInt(id));
    localStorage.setItem("favourites", JSON.stringify(currentFavs));
}


