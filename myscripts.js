
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

    const winningPositions = [[1,2,3],[1,5,9],[1,4,7]
    [2,5,8],[3,6,9],[4,5,6],[7,8,9],[7,5,3]];

    function checkBoard(board) {


        for(let i = 0; i < 3; i++){
            if(board[i] == board[i+1] 
            && board[i+1] == board[i+2]
            && board[i] != 0){
                gameBoard.generateCleanBoard();
            }

        }
    }

    return (checkBoard);

})();

let player = function (name) {


    



};