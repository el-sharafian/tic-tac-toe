let squares = new Array(9).fill("");
let playerXScore = 0;
let playerOScore = 0;
let XO = 'x';
let winner = false;
let numberOfX = 5;
let numberOfO = 4;

for (let i = 0; i < 9; i++) {
    document.getElementsByClassName("game_sec")[0].getElementsByTagName("div")[i].onclick = () => setSquare(i);
}
document.getElementById("replay").onclick = () => replayGame();
document.getElementById("restart").onclick = () => restartGame();

function replayGame() {
    squares.fill("");
    winner = false;
    XO = 'x';
    numberOfX = 5;
    numberOfO = 4;
    displayElements();
}
function restartGame() {
    playerXScore = 0;
    playerOScore = 0;
    document.getElementById("scoresX").textContent = playerXScore;
    document.getElementById("scoresO").textContent = playerOScore;
    replayGame();
}
function displayElements() {
    document.getElementById("winner").style.display = "none";
    for (let j = 0; j < 9; j++) {
        document.getElementsByClassName("game_sec")[0].getElementsByTagName('img')[j].style.display = "none";
    }
    for (let i = 0; i < 5; i++) {
        document.getElementsByClassName("piece")[0].getElementsByTagName('img')[i].style.display = "inline-flex";
        if (i < 4) {
            document.getElementsByClassName("piece")[1].getElementsByTagName('img')[i].style.display = "inline-flex";
        }
    }
}
function setSquare(i) {
    if (squares[i] == "" && winner == false) {
        if (XO == 'x') {
            document.getElementsByClassName("game_sec")[0].getElementsByTagName("div")[i].getElementsByTagName('img')[0].src = "./img/icon-x.png";
            squares[i] = 'x';
            XO = 'o';
            document.getElementsByClassName("piece")[0].getElementsByTagName('img')[numberOfX - 1].style.display = "none";
            numberOfX--;
        }
        else {
            document.getElementsByClassName("game_sec")[0].getElementsByTagName("div")[i].getElementsByTagName('img')[0].src = "./img/icon-o.png";
            squares[i] = 'o';
            XO = 'x';
            document.getElementsByClassName("piece")[1].getElementsByTagName('img')[numberOfO - 1].style.display = "none";
            numberOfO--;
        }
        document.getElementsByClassName("game_sec")[0].getElementsByTagName("div")[i].getElementsByTagName('img')[0].style.display = "block";
        checkBoard();
    }
}
function checkBoard() {
    for (let i = 0; i < 7; i += 3) {
        if (squares[i] != "" && squares[i] == squares[i + 1] && squares[i] == squares[i + 2]) {
            chooseWinner(i);
            break;
        }
    }
    for (let i = 0; i < 3; i++) {
        if (squares[i] != "" && squares[i] == squares[i + 3] && squares[i + 3] == squares[i + 6]) {
            chooseWinner(i);
            break;
        }
    }
    if (squares[0] != "" && squares[0] == squares[4] && squares[4] == squares[8]) {
        chooseWinner(0);
    }
    else if (squares[2] != "" && squares[2] == squares[6] && squares[6] == squares[4]) {
        chooseWinner(2);
    }
    else if (numberOfX == 0 && winner == false) {
        document.getElementById("winner").textContent = "DRAW";
        document.getElementById("winner").style.display = "block";
    }
}
function chooseWinner(i) {
    if (squares[i] == 'x') {
        document.getElementById("winner").textContent = "winner is X";
        playerXScore++;
        document.getElementById("scoresX").textContent = playerXScore;
    }
    else {
        document.getElementById("winner").textContent = "winner is O";
        playerOScore++;
        document.getElementById("scoresO").textContent = playerOScore;
    }
    document.getElementById("winner").style.display = "block";
    winner = true;
}