//BUTTONS - GRABBING ELEMENTS
let howToPlayButton = document.querySelector(".howToPlayButton");
let modal = document.querySelector(".modal");
let closeModalButton = document.querySelector(".closeModalButton");
let closeScreenButton = document.querySelector(".closeScreenButton")
let resetLevelButton = document.getElementById("resetLevelButton");
let resetGameButton = document.getElementById("resetGameButton");
let winnerScreen = document.querySelector(".levelWinner")

//COLORS - GRABBING ELEMENTS
let boxes = document.querySelectorAll(".box");
let ball = document.querySelectorAll(".ball");

//WINNING CONDITIONS
let wins = 0;

//WINNING FUNCTION
const completeLevelThree = () => {
    winnerScreen.style.display = "block";
}

const closeScreen = () => {
    winnerScreen.style.display = "none";
}

//BUTTONS - FUNCTIONS
const openHowToPlayModal = () => {
    modal.style.display = "block";
}

const closeHowToPlayModal = () => {
    modal.style.display = "none";
}

const resetLevel = () => { 
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
    if (ev.target.children.length >= 4 || ev.target.classList[0] === "ball"){
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

    } else if (ev.target.children.length == 3 && ev.target.lastElementChild.classList[1] === draggedBall.classList[1]){
        ev.preventDefault(); 

        let data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));

        for (let i=0; i<6; i++){
            if(boxes[i].children.length === 4 && boxes[i].children[0].classList.value == boxes[i].children[1].classList.value && boxes[i].children[1].classList.value == boxes[i].children[2].classList.value && boxes[i].children[2].classList.value == boxes[i].children[3].classList.value){
                wins += 1
                console.log(wins)
                if (wins == 10){
                    console.log("You Won!")
                    completeLevelThree();
                }
            }
        }
    }  
}


//BUTTONS - EVENT LISTENERS
howToPlayButton.addEventListener("click", openHowToPlayModal);
closeModalButton.addEventListener("click", closeHowToPlayModal);
resetLevelButton.addEventListener("click", resetLevel);
closeScreenButton.addEventListener("click", closeScreen);

