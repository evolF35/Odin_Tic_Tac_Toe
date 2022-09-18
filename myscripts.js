let Board = document.querySelector('#Board')


function generateCleanBoard(){
    Board.innerHTML = "";

    for(let i = 0; i < 9; i++){
        let box = document.createElement("div");
        box.setAttribute("id",`box_${i}`);
        box.classList.add("box");
        Board.appendChild(box);
    }
}


let GameBoard = (function (){

})();








