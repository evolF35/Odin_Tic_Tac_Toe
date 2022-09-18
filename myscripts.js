let Board = document.querySelector('#Board')


function generateCleanBoard(){
    Board.innerHTML = "";

    for(let i = 0; i < 9; i++){
        let box = document.createElement("div");
        box.setAttribute("class","box");
        if(i > 5){
            box.classList.add("bottomRow");
        }
        if(i <= 5 && i > 2){
            box.classList.add("middleRow");
        }
        if(i < 3){
            box.classList.add("topRow");
        }

        Board.appendChild(box);
    }

}