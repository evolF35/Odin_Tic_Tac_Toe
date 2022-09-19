
let player = function (name,char) {
    return{
        name:name,
        char:char
    }
};

const gameBoard = (function () {

    let p1 = player("3","4");
    let p2 = player("1","2");
    let char;

    let clickor = true;

    function getP1name(){
        return(p1.name);
    }
    function getP2name(){
        return(p2.name);
    }
    function getChar(){
        return(char);
    }
    function getP1Symb(){
        return(p1.char);
    }
    function changeClickor(){
        clickor = !clickor;
    }

    let start = document.querySelector('button');

    start.addEventListener('click', () => {
        let p1name = document.getElementById("plyr1").value;
        let p2name = document.getElementById("plyr2").value;

        let p1symb = document.getElementById("plyr1symb").value;
        let p2symb = document.getElementById("plyr2symb").value;

        if(p1name != "" && p2name != "" && p1symb != "" && p2symb != "" 
        && p1symb != p2symb)
        {
        p1 = player(p1name,p1symb);
        p2 = player(p2name,p2symb);

        char = p1.char;

        generateCleanBoard();
        }
    });


    let board = [0,0,0,0,0,0,0,0,0];

    let Board = document.querySelector('#Board')

        function changeTurn(place){
            if(char == p1.char){
                board[place] = 2;
                char = p2.char;
            }
            else{
                board[place] = 1;
                char = p1.char;
            }
        }

        function generateCleanBoard(){

            start.innerHTML = "Restart";
            Board.innerHTML = "";
            flow.resultbar.innerText = "";
            clickor = true;
        
        for(let i = 0; i < 9; i++){

            board[i] = 0;

            let box = document.createElement("div");    
            box.setAttribute("id",`box_${i}`);
            box.classList.add("box");

            box.addEventListener('click', () => {
                let index = box.id;
                index = index.replace("box_","");
                index = +index;
                if(clickor == true)
                {
                addCharacter(index);
                }
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
    generateCleanBoard,getChar,getP1name,getP2name,getP1Symb,changeClickor};
})();


const flow = (function(){
    //const winningPositions = [[0,1,2],[0,4,8],[0,3,6]
    //[1,4,7],[2,5,8],[3,4,5],[6,7,8],[6,4,2]];

    let resultbar = document.getElementById("results");
    let resString = ""

    let button = document.querySelector("button");


    function checkBoard(board) {

        if(board.includes(0) == false){
            resultbar.innerText = "A Tie!";
        }

        let currentChar = gameBoard.getChar();

        if(currentChar == gameBoard.getP1Symb()){
            resString = `${gameBoard.getP2name()} Wins!`;
        }
        else{
            resString = `${gameBoard.getP1name()} Wins!`;
        }

        for(let i = 0; i < 7; i = i + 3){
            if(board[i] == board[i+1] 
            && board[i+1] == board[i+2]
            && board[i] != 0){
                resultbar.innerText = resString;
                gameBoard.changeClickor();
                button.innerText = "Play Again";
            }
        }

        for(let i = 0; i < 3; i++){
            if(board[i] == board[i+3] 
            && board[i+3] == board[i+6]
            && board[i] != 0){
                resultbar.innerText = resString;
                gameBoard.changeClickor();
                button.innerText = "Play Again";

            }
        }

        if(board[0] == board[4] && board[4] == board[8]
            && board[0] != 0){
            resultbar.innerText = resString;
            gameBoard.changeClickor();
            button.innerText = "Play Again";

        }

        if(board[6] == board[4] && board[4] == board[2] 
            && board[6] != 0){
            resultbar.innerText = resString;
            gameBoard.changeClickor();
            button.innerText = "Play Again";

        }
    }



    return {checkBoard,resultbar};

})();
