
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


//BALLS - FUNCTIONS

const allowDrop = (ev) => {
    ev.preventDefault();
}

const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
}

const drop = (ev) => {
    let data = ev.dataTransfer.getData("text");
    ev.target.textContent = data;
    ev.preventDefault();
}

//BUTTONS - EVENT LISTENERS
howToPlayButton.addEventListener("click", openHowToPlayModal);
closeModalButton.addEventListener("click", closeHowToPlayModal);

