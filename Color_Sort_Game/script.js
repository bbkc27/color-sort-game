
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
    if(ev.target === ev.target.parentElement.lastElementChild){
    ev.dataTransfer.setData("text", ev.target.id);
    } else {
        ev.preventDefault();
    }
}

const drop = (ev) => {
    if (ev.target.children.length === 0){
   
        ev.preventDefault(); 

    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
 
    } else if (ev.target.children.length < 3){
    
        ev.preventDefault(); 

    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    console.log(ev.target.firstElementChild.dataset.color, ev.target.lastElementChild.dataset.color, boxes, ev.target.children[1].dataset.color, ev.target.children.length)  
    } else if (ev.target.children.length >= 3){
        console.log(ev.target.children.length, "There are already 3 balls in this tube.")
    }
}

//BUTTONS - EVENT LISTENERS
howToPlayButton.addEventListener("click", openHowToPlayModal);
closeModalButton.addEventListener("click", closeHowToPlayModal);
resetButton.addEventListener("click", resetGame);

