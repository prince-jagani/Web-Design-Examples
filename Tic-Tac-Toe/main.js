var arr = [[,,],[,,],[,,]]; //defining 3x3 2D array

var tictac = "";
var winner;
// console.log(arr);
document.getElementById("winnerPageId").style.display = 'none';
setUp();
function setUp() {
    for (let i = 0; i < 3; i++) {

        for(let j = 0; j < 3; j++) {
            var tempId = "a"+(i+1)+(j+1);
            // console.log(tempId);
            arr[i][j] = document.getElementById(tempId);
            
        }
    }
}
// console.log(arr);

function getBox(id) {
    boxIdLoop:for (let i = 0; i < 3; i++) {

            for(let j = 0; j < 3; j++) {
                if(id == arr[i][j].id) {
                    // console.log(arr[i][j]);
                    setValue(arr[i][j]);
                    break boxIdLoop;
                }
                
            }
    }
}

function setValue(box) {
    if(tictac == "O") {
        tictac = "X";
        box.innerHTML = tictac;
    }
    else {
        tictac = "O";
        box.innerHTML = tictac;
    }

    checkWinner();
}

function checkWinner() {
    // console.log("Chwcking Winner");
    var boxValues = [[,,],[,,],[,,]];
    const allEqual = arr => arr.every( v => v === arr[0] )

    for (let i = 0; i < 3; i++) {

        for(let j = 0; j < 3; j++) { 
            boxValues[i][j] = arr[i][j].innerHTML;           
        }
    }
    console.log(boxValues);


    switch (true) {

        case boxValues[0][0] == boxValues[0][1] && boxValues[0][1] == boxValues[0][2]: {
            var currentSelect = [boxValues[0][0], boxValues[0][1], boxValues[0][0]]
            if(currentSelect.includes("O")) winner = 1;
            else if(currentSelect.includes("X")) winner = 2;
            else winner = 0;
            break;
        }

        case boxValues[1][0] == boxValues[1][1] && boxValues[1][1] == boxValues[1][2]: {
            var currentSelect = [boxValues[1][0], boxValues[1][1], boxValues[1][2]]
            if(currentSelect.includes("O")) winner = 1;
            else if(currentSelect.includes("X")) winner = 2;
            else winner = 0;
            break;
        }

        case boxValues[2][0] == boxValues[2][1] && boxValues[2][1] == boxValues[2][2]: {
            var currentSelect = [boxValues[2][0], boxValues[2][1], boxValues[2][2]]
            if(currentSelect.includes("O")) winner = 1;
            else if(currentSelect.includes("X")) winner = 2;
            else winner = 0;
            break;
        }

        case boxValues[0][0] == boxValues[1][0] && boxValues[1][0] == boxValues[2][0]: {
            var currentSelect = [boxValues[0][0], boxValues[1][0], boxValues[2][0]]
            if(currentSelect.includes("O")) winner = 1;
            else if(currentSelect.includes("X")) winner = 2;
            else winner = 0;
            break;
        }

        case boxValues[0][1] == boxValues[1][1] && boxValues[1][1] == boxValues[2][1]: {
            var currentSelect = [boxValues[0][1], boxValues[1][1], boxValues[2][1]]
            if(currentSelect.includes("O")) winner = 1;
            else if(currentSelect.includes("X")) winner = 2;
            else winner = 0;
            break;
        }

        case boxValues[0][2] == boxValues[1][2] && boxValues[1][2] == boxValues[2][2]: {
            var currentSelect = [boxValues[0][2], boxValues[1][2], boxValues[2][2]]
            if(currentSelect.includes("O")) winner = 1;
            else if(currentSelect.includes("X")) winner = 2;
            else winner = 0;
            break;
        }

        case boxValues[0][0] == boxValues[1][1] && boxValues[1][1] == boxValues[2][2]: {
            var currentSelect = [boxValues[0][0], boxValues[1][1], boxValues[2][2]]
            if(currentSelect.includes("O")) winner = 1;
            else if(currentSelect.includes("X")) winner = 2;
            else winner = 0;
            break;
        }

        case boxValues[0][2] == boxValues[1][1] && boxValues[1][1] == boxValues[2][0]: {
            var currentSelect = [boxValues[0][2], boxValues[1][1], boxValues[2][0]]
            if(currentSelect.includes("O")) winner = 1;
            else if(currentSelect.includes("X")) winner = 2;
            else winner = 0;
            break;
        }
    }
    console.log(winner);
    if(winner != 0) showWinner(winner);
}

function showWinner(winner) {
    var winName = "";
    document.getElementById("winnerPageId").style.display = 'flex';
        winName = "Player " + winner + " is Winner"; 
        document.getElementById("winnerText").innerHTML = winName;
}
