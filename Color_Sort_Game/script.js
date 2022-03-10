
//BUTTONS - GRABBING ELEMENTS
let howToPlayButton = document.querySelector(".howToPlayButton");
let modal = document.querySelector(".modal");
let closeModalButton = document.querySelector(".closeModalButton");
let resetButton = document.getElementById("resetButton");

//COLORS - GRABBING ELEMENTS
let boxes = document.querySelectorAll(".box");
let ball = document.querySelectorAll(".ball");

//BUTTONS - FUNCTIONS
const openHowToPlayModal = () => {
    modal.style.display = "block";
}

const closeHowToPlayModal = () => {
    modal.style.display = "none";
}

const resetGame = () => { 
    location.reload();
}

//COLORS - FUNCTIONS

const allowDrop = (ev) => {
    ev.preventDefault();
}

const drag = (ev) => {   
    if(ev.target === ev.target.parentElement.firstElementChild){
    ev.dataTransfer.setData("text", ev.target.id);
    } else {
        ev.preventDefault();
    }
}

const drop = (ev) => {
    if (ev.target.children.length < 3){
    ev.preventDefault();


    console.log()    

    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    } 
}

//BUTTONS - EVENT LISTENERS
howToPlayButton.addEventListener("click", openHowToPlayModal);
closeModalButton.addEventListener("click", closeHowToPlayModal);
resetButton.addEventListener("click", resetGame);

