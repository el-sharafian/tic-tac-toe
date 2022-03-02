let squares = [0, 0, 0, 0, 0, 0, 0, 0, 0]       // 0 is empty, 1 is x, 2 is o
let playerXScore = 0;
let playerOScore = 0;
let XO = 'x';
let winner = false;
let numberOfX = 5;
let numberOfO = 5;

replay.onclick = function replayGame() {
    for (let i = 0; i < 9; i++) {
        squares[i] = 0;
    }
    winner = false;
    XO = 'x';
    numberOfX = 5;
    numberOfO = 4;
    displayElements();
}
function displayElements() {
    console.log("dont display a thing");
    document.getElementById("winnerX").style.display = "none";
    document.getElementById("winnerO").style.display = "none";
    for (let j = 0; j < 9; j++) {
        document.getElementsByClassName("game_sec")[0].getElementsByTagName('img')[j].style.display = "none";
    }
    for (let i = 0; i < 9; i++) {
        document.getElementsByClassName("piece")[0].getElementsByTagName('img')[i].style.display = "inline-flex";
        document.getElementsByClassName("piece")[1].getElementsByTagName('img')[i].style.display = "inline-flex";
    }

}
function setSquare(event, squareNumber) {
    changeImg(squareNumber);
    console.log('mew');    
}
function changeImg(i) {
    if (squares[i] == 0 && winner == false) {
        if (XO == 'x') {
            document.getElementById("square" + i).getElementsByTagName('img')[0].src = "../img/icon-x.png";
            squares[i] = 1;     // 1 is x
            XO = 'o';
            document.getElementsByClassName("piece")[0].getElementsByTagName('img')[numberOfX - 1].style.display = "none";
            numberOfX--;
        }
        else {
            document.getElementById("square" + i).getElementsByTagName('img')[0].src = "../img/icon-o.png";
            squares[i] = 2;     // 2 is o
            XO = 'x';
            document.getElementsByClassName("piece")[1].getElementsByTagName('img')[numberOfO - 1].style.display = "none";
            numberOfO--;
        }
        document.getElementById("square" + i).getElementsByTagName('img')[0].style.display = "block";
        checkBoard();
    }
}
function checkBoard() {
    for (let i = 0; i < 7; i += 3) {
        if (squares[i] == squares[i + 1] && squares[i] == squares[i + 2] && squares[i] != 0) {
            console.log("check");
            chooseWinner(i);
            break;
        }
    }
    for (let i = 0; i < 3; i++) {
        if (squares[i] == squares[i + 3] && squares[i + 3] == squares[i + 6] && squares[i] != 0) {
            chooseWinner(i);
            console.log("in her");
            break;
        }
    }
    if (squares[0] == squares[4] && squares[4] == squares[8] && squares[0] != 0) {
        chooseWinner(0);
    }
    else if (squares[2] == squares[6] && squares[6] == squares[4] && squares[2] != 0) {
        chooseWinner(2);
    }
}

function chooseWinner(i) {
    if (squares[i] == 1) {
        console.log("winner is declared");
        document.getElementById("winnerX").style.display = "block";
        playerXScore++;
        document.getElementById("scoresX").innerHTML = playerXScore;
        winner = true;
    }
    else {
        console.log("winner is declared");
        document.getElementById("winnerO").style.display = "block";
        playerOScore++;
        document.getElementById("scoresO").innerHTML = playerOScore;
        winner = true
    }
}
document.getElementById("square0").onclick = (event) => setSquare(event, 0);
document.getElementById("square1").onclick = (event) => setSquare(event, 1);
document.getElementById("square2").onclick = (event) => setSquare(event, 2);
document.getElementById("square3").onclick = (event) => setSquare(event, 3);
document.getElementById("square4").onclick = (event) => setSquare(event, 4);
document.getElementById("square5").onclick = (event) => setSquare(event, 5);
document.getElementById("square6").onclick = (event) => setSquare(event, 6);
document.getElementById("square7").onclick = (event) => setSquare(event, 7);
document.getElementById("square8").onclick = (event) => setSquare(event, 8);