
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


let draggedBall;

const drag = (ev) => {   
    if(ev.target === ev.target.parentElement.lastElementChild){
    ev.dataTransfer.setData("text", ev.target.id);
    draggedBall = ev.target
    } else {
        ev.preventDefault();
    }
    return draggedBall;
}



const drop = (ev) => {
    if (ev.target.children.length >= 3 || ev.target.classList[0] === "ball"){
        console.log("Cannot Drop Ball Here.")

    } else if (ev.target.children.length === 0){
        ev.preventDefault(); 

        let data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));

 
    } else if (ev.target.children.length == 1 && ev.target.firstElementChild.classList[1] === draggedBall.classList[1]){
 
        ev.preventDefault(); 

        let data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));

        
    } else if (ev.target.children.length == 2 && ev.target.lastElementChild.classList[1] === draggedBall.classList[1]){
    
        ev.preventDefault(); 

        let data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    } 
}

//BUTTONS - EVENT LISTENERS
howToPlayButton.addEventListener("click", openHowToPlayModal);
closeModalButton.addEventListener("click", closeHowToPlayModal);
resetButton.addEventListener("click", resetGame);

