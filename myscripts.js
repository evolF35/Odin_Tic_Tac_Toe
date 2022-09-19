
const gameBoard = (function () {
    let board = [0,0,0,0,0,0,0,0,0];


    let Board = document.querySelector('#Board')

    let char = "X";

        function changeTurn(place){
            if(char == "X"){
                board[place] = 2;
                char = "O";
            }
            else{
                board[place] = 1;
                char = "X";
            }
        }

        function generateCleanBoard(){
            Board.innerHTML = "";
        
        for(let i = 0; i < 9; i++){

            board[i] = 0;

            let box = document.createElement("div");    
            box.setAttribute("id",`box_${i}`);
            box.classList.add("box");

            box.addEventListener('click', () => {
                let index = box.id;
                index = index.replace("box_","");
                index = +index;

                addCharacter(index);
            });

            Board.appendChild(box);
        }
        }

        function addCharacter(place) {

            let area = document.getElementById(`box_${place}`)

            if(area.innerText == ""){
            let jar = document.createElement("div");
            jar.setAttribute("class","char");
            jar.innerText = char;

            area.appendChild(jar);

            changeTurn(place);

            flow.checkBoard(board);
        }

        }

    return{board,
    generateCleanBoard};

})();


const flow = (function(){

    const winningPositions = [[0,1,2],[0,4,8],[0,3,6]
    [1,4,7],[2,5,8],[3,4,5],[6,7,8],[6,4,2]];

    function checkBoard(board) {

        for(let i = 0; i < 7; i = i + 3){
            if(board[i] == board[i+1] 
            && board[i+1] == board[i+2]
            && board[i] != 0){
                alert("You Win");
                gameBoard.generateCleanBoard();
            }
        }

        for(let i = 0; i < 3; i++){
            if(board[i] == board[i+3] 
            && board[i+3] == board[i+6]
            && board[i] != 0){
                alert("You Win");
                gameBoard.generateCleanBoard();
            }
        }

        if(board[0] == board[4] && board[4] == board[8]
            && board[0] != 0){
            alert("You Win");
            gameBoard.generateCleanBoard();
        }

        if(board[6] == board[4] && board[4] == board[2] 
            && board[6] != 0){
            alert("You Win");
            gameBoard.generateCleanBoard();
        }




    }

    return {checkBoard};

})();

let player = function (name) {


    



};