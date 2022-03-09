
//BUTTONS - GRABBING ELEMENTS
let howToPlayButton = document.querySelector(".howToPlayButton");
let modal = document.querySelector(".modal");
let closeModalButton = document.querySelector(".closeModalButton");

//BUTTONS - FUNCTIONS
const openHowToPlayModal = () => {
    modal.style.display = "block";
}

const closeHowToPlayModal = () => {
    modal.style.display = "none";
}

//BUTTONS - EVENT LISTENERS
howToPlayButton.addEventListener("click", openHowToPlayModal);
closeModalButton.addEventListener("click", closeHowToPlayModal);