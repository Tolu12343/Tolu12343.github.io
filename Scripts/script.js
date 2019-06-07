var active1 = 0,
    active2 = 0,
    active3 = 0,
    firstPlayerName = "",
    secondPlayerName = "",
    endPoint = "",
    gameplayCheck,
    gameplayStart;

var active = 1,
    score = [0, 0],
    roundScore = 0,
    diceRoll, gameplay = false,
    inGame = false,
    roundScoreCheck = 0,
    endChecker = false,
    finalGameChecker1, finalGameChecker2, activeCheck;

if (JSON.parse(localStorage.getItem('gamePlayPage')) === null || JSON.parse(localStorage.getItem('gamePlayPage')) === "beginning") {
    gameplayCheck = "true";
    localStorage.setItem('gamePlayPage', JSON.stringify(gameplayCheck));
    activeCheck = "first";
    localStorage.setItem('activeChecker', JSON.stringify(activeCheck));

}


/** hide initial bits */
gameplayStart = JSON.parse(localStorage.getItem('gamePlayPage'));
document.querySelector('.wrongMessage2').style.display = "none";

if (gameplayStart === "true") {

    document.getElementById('gameplayPage').style.display = "block";

    document.getElementById('startGame').style.display = "none";
    if (localStorage.setItem('activeChecker', JSON.stringify(gameplayCheck)) === "first") {
        gameplayCheck = "false";
        localStorage.setItem('gamePlayPage', JSON.stringify(gameplayCheck));

    } else {
        gameplayCheck = "true";
        localStorage.setItem('gamePlayPage', JSON.stringify(gameplayCheck));
    }




} else {
    document.getElementById('startGame').style.display = "block";
    document.getElementById('gameplayPage').style.display = "none";
    gameplay = false;
    document.getElementById('gameplayPage').style.display = "none";
    restart();
    gameplayCheck = "false";
    localStorage.setItem('gamePlayPage', JSON.stringify(gameplayCheck));

}
/** Event listeners definition */
document.getElementById('firstPlayer').addEventListener('keyup', function () {
    document.getElementById('firstPlayer').classList.remove('noInput');
    document.getElementById('firstPlayer').placeholder = "Username";
    firstPlayerName = document.getElementById('firstPlayer').value;
    active1 = 1;
});
document.getElementById('secondPlayer').addEventListener('keyup', function () {
    document.getElementById('secondPlayer').classList.remove('noInput');
    document.getElementById('secondPlayer').placeholder = "Username";
    secondPlayerName = document.getElementById('secondPlayer').value;
    active2 = 1;
});

document.getElementById('number').addEventListener('keyup', function () {
    document.querySelector('.wrongMessage2').style.display = "none";
    document.getElementById('number').classList.remove('noInput');
    document.getElementById('number').placeholder = "End Point";
    endPoint = document.getElementById('number').value;
    active3 = 1;
});
document.getElementById('clickStart').addEventListener('click', function () {

    if (firstPlayerName !== "" && secondPlayerName !== "" && endPoint !== "") {
        numChecker(endPoint);

        check(active1, active2, active3);
    } else {
        if (firstPlayerName === "") {
            document.getElementById('firstPlayer').placeholder = "Name needed!";
            document.getElementById('firstPlayer').classList.add('noInput');
            active1 = 0;
        }
        if (secondPlayerName === "") {
            document.getElementById('secondPlayer').placeholder = "Name needed!";
            document.getElementById('secondPlayer').classList.add('noInput');
            active2 = 0;
        }

        if (endPoint === "") {
            document.getElementById('number').placeholder = "Number needed!";
            document.getElementById('number').classList.add('noInput');
            active3 = 0;
        } else {
            numChecker(endPoint);
        }
    }


});





function numChecker(a) {
    if (a != parseInt(a)) {
        document.querySelector('.wrongMessage2').style.display = "block";
        active3 = 0;
    } else {
        if (a < 50) {
            document.querySelector('.wrongMessage2').style.display = "block";
            document.querySelector('.wrongMessage2').innerHTML = "Must be greater than or equal to 50.";
            active3 = 0;
        } else {
            active3 = 1;
        }

    }

}

function check(a, b, c) {
    if (a === 1 && b === 1 && c === 1) {

        /* Remove the input tags */
        document.getElementById('firstPlayer').style.display = "none";
        document.getElementById('secondPlayer').style.display = "none";
        document.getElementById('number').style.display = "none";

        /* Remove the text */
        document.querySelector('.paragraph').style.display = "none";
        document.querySelector('.paragraph1').style.display = "none";
        document.querySelector('.paragraph2').style.display = "none";
        document.querySelector('.introMessage').style.display = "none";
        document.getElementById('clickStart').style.display = "none";
        localStorage.setItem('firstPlayerDetail', JSON.stringify(firstPlayerName));
        localStorage.setItem('secondPlayerDetail', JSON.stringify(secondPlayerName));
        document.getElementById('firstPlayerName').textContent = JSON.parse(localStorage.getItem('firstPlayerDetail'));
        document.getElementById('secondPlayerName').textContent = JSON.parse(localStorage.getItem('secondPlayerDetail'));

        //        document.getElementById('secondPlayerName').textContent = secondPlayerName;
        localStorage.setItem('endPointNum', JSON.stringify(endPoint));

        document.getElementById('endValue').textContent = JSON.parse(localStorage.getItem('endPointNum'));
        /* start game */
        document.getElementById('startGame').style.display = "block";
        gameplayCheck = "false";
        localStorage.setItem('gamePlayPage', JSON.stringify(gameplayCheck));

        /** setting a variable just incase it refreshes */
    }
}

/** Code for the start of the game */



/** Initialising the dice visibility to hidden **/

document.getElementById('dice').style.display = "none";
document.getElementById('player-2-active').style.display = "none";
document.getElementById('endGame').style.display = "none";
//document.getElementById('startGame').style.display = "none";



/* initialising dice role event listener */

document.getElementById('roll').addEventListener('click', function () {
    inGame = true;
    if (!endChecker) {
        if (gameplay) {
            if (inGame) {
                document.getElementById('dice').style.display = "block";
                diceRoll = Math.round(Math.random() * 5) + 1;
                switch (diceRoll) {
                    case 1:
                        document.getElementById('dice').src = "../images/dice-" + "1" + ".png";
                        break;
                    case 2:
                        document.getElementById('dice').src = "../images/dice-" + "2" + ".png";
                        break;
                    case 3:
                        document.getElementById('dice').src = "../images/dice-" + "3" + ".png";
                        break;

                    case 4:
                        document.getElementById('dice').src = "../images/dice-" + "4" + ".png";
                        break;
                    case 5:
                        document.getElementById('dice').src = "../images/dice-" + "5" + ".png";
                        break;
                    case 6:
                        document.getElementById('dice').src = "../images/dice-" + "6" + ".png";
                        break;
                    default:
                        console.log("Wrong input");
                        break;
                }
                roundScoreCheck = roundScoreCheck + diceRoll;


                if (active === 1) {
                    if (diceRoll === 1 || diceRoll === 6) {
                        roundScore = 0;
                        roundScoreCheck = 0;

                        document.getElementById('player-' + active + '-round').innerHTML = "0";
                        active = 2;
                        player2active();

                    } else {

                        finalGameChecker1 = score[0] + roundScoreCheck;
                        roundScore = roundScoreCheck;
                        if (finalGameChecker1 >= endPoint) {
                            document.querySelector('.player-' + active + '-total').innerHTML = finalGameChecker1;
                            document.getElementById('startGame').style.display = "none";
                            document.getElementById('endGame').style.display = "flex";
                            document.getElementById('endGame').classList.add('endBackground');
                            document.getElementById('endGame').style.paddingTop = "150px";
                            document.getElementById('endText').innerHTML = JSON.parse(localStorage.getItem('firstPlayerDetail')) + ",";
                            gameplay = false;
                            finalGameChecker1 = 0;
                            roundScoreCheck = 0;

                        }
                    }

                    document.getElementById('player-' + active + '-round').innerHTML = roundScore;
                } else {
                    if (diceRoll === 1 || diceRoll === 6) {
                        roundScore = 0;
                        roundScoreCheck = 0;
                        document.getElementById('player-' + active + '-round').innerHTML = "0";
                        active = 1;
                        player1active();

                    } else {
                        finalGameChecker2 = score[1] + roundScoreCheck;
                        roundScore = roundScoreCheck;
                        if (finalGameChecker2 >= endPoint) {
                            document.querySelector('.player-' + active + '-total').innerHTML = finalGameChecker2;
                            document.getElementById('startGame').style.display = "none";
                            document.getElementById('endGame').style.display = "flex";
                            document.getElementById('endGame').classList.add('endBackground');
                            document.getElementById('endText').innerHTML = JSON.parse(localStorage.getItem('secondPlayerDetail')) + ",";
                            gameplay = false;
                            finalGameChecker2 = 0;
                            roundScoreCheck = 0;
                        }
                    }
                    document.getElementById('player-' + active + '-round').innerHTML = roundScore;

                }




            }
        }

    }

});

/** for the hold button **/
document.getElementById('hold').addEventListener('click', function () {
    if (!endChecker) {
        if (gameplay) {
            if (inGame) {

                if (active === 1) {

                    score[0] = score[0] + roundScore;
                    roundScore = 0;
                    document.querySelector('.player-' + active + '-total').innerHTML = score[0];
                    document.getElementById('player-' + active + '-round').innerHTML = "0";
                    active = 2;
                    roundScoreCheck = 0;
                    player2active();
                    inGame = false;
                } else {
                    score[1] = score[1] + roundScore;
                    roundScore = 0;
                    document.querySelector('.player-' + active + '-total').innerHTML = score[1];
                    document.getElementById('player-' + active + '-round').innerHTML = "0";
                    active = 1;
                    roundScoreCheck = 0;
                    player1active();
                    inGame = false;
                }
            }

        }
    }

});

/** Event listener for the end of the game */

document.getElementById('playAgain').addEventListener('click', function () {
    document.getElementById('startGame').style.display = "block";
    document.getElementById('endGame').style.display = "none";
    endChecker = true;
    gameplay = false;
    start();
});

document.getElementById('clickReset').addEventListener('click', function () {

    gameplayCheck = "true";
    localStorage.setItem('gamePlayPage', JSON.stringify(gameplayCheck));
    document.getElementById('gameplayPage').style.display = "block";
    document.getElementById('gameplayPage').style.display = "contents";
    document.getElementById('startGame').style.display = "none";
    location.reload();
    activeCheck = "refresh";
    localStorage.setItem('activeChecker', JSON.stringify(activeCheck));


    /* reset the page */

});
/******************************************/


document.getElementById('newGame').addEventListener('click', function () {
    start();
    endChecker = false;
});


function player2active() {
    document.getElementById('player-1-box').style.background = "none";
    document.getElementById('player-2-box').style.background = "white";
    document.querySelector('.player-1-total').classList.toggle('total1');
    document.querySelector('.player-1-total').classList.toggle('total2');
    document.querySelector('.player-2-total').classList.toggle('total2');
    document.querySelector('.player-2-total').classList.toggle('total1');
    document.querySelector('.secondPlayer').classList.toggle('para1');
    document.querySelector('.secondPlayer').classList.toggle('para2');
    document.querySelector('.firstPlayer').classList.toggle('para1');
    document.querySelector('.firstPlayer').classList.toggle('para2');
    document.getElementById('player-2-active').style.display = "inline-block";
    document.getElementById('player-1-active').style.display = "none";
    document.getElementById('player-2-roundScore').classList.toggle('colour');
    document.getElementById('player-2-roundScore').classList.toggle('colour1');
    document.getElementById('player-1-roundScore').classList.toggle('colour');
    document.getElementById('player-1-roundScore').classList.toggle('colour1');
    document.getElementById('player-1-roundScoreDesign').classList.toggle('para3');
    document.getElementById('player-1-roundScoreDesign').classList.toggle('para4');
    document.getElementById('player-2-roundScoreDesign').classList.toggle('para3');
    document.getElementById('player-2-roundScoreDesign').classList.toggle('para4');
    document.getElementById('player-1-round').classList.toggle('player-1-roundText');
    document.getElementById('player-1-round').classList.toggle('player-2-roundText');
    document.getElementById('player-2-round').classList.toggle('player-1-roundText');
    document.getElementById('player-2-round').classList.toggle('player-2-roundText');
}

function player1active() {
    document.getElementById('player-1-box').style.background = "white";
    document.getElementById('player-2-box').style.background = "none";
    document.querySelector('.player-1-total').classList.toggle('total1');
    document.querySelector('.player-1-total').classList.toggle('total2');
    document.querySelector('.player-2-total').classList.toggle('total2');
    document.querySelector('.player-2-total').classList.toggle('total1');
    document.querySelector('.firstPlayer').classList.toggle('para1');
    document.querySelector('.firstPlayer').classList.toggle('para2');
    document.querySelector('.secondPlayer').classList.toggle('para1');
    document.querySelector('.secondPlayer').classList.toggle('para2');
    document.getElementById('player-1-active').style.display = "inline-block";
    document.getElementById('player-2-active').style.display = "none";
    document.getElementById('player-2-roundScore').classList.toggle('colour');
    document.getElementById('player-2-roundScore').classList.toggle('colour1');
    document.getElementById('player-1-roundScore').classList.toggle('colour');
    document.getElementById('player-1-roundScore').classList.toggle('colour1');
    document.getElementById('player-1-roundScoreDesign').classList.toggle('para3');
    document.getElementById('player-1-roundScoreDesign').classList.toggle('para4');
    document.getElementById('player-2-roundScoreDesign').classList.toggle('para3');
    document.getElementById('player-2-roundScoreDesign').classList.toggle('para4');
    document.getElementById('player-1-round').classList.toggle('player-1-roundText');
    document.getElementById('player-1-round').classList.toggle('player-2-roundText');
    document.getElementById('player-2-round').classList.toggle('player-1-roundText');
    document.getElementById('player-2-round').classList.toggle('player-2-roundText');



}

function start() {
    gameplay = true;
    document.getElementById('player-1-round').innerHTML = "0";
    document.getElementById('player-2-round').innerHTML = "0";
    document.querySelector('.player-1-total').innerHTML = "0";
    document.querySelector('.player-2-total').innerHTML = "0";
    document.getElementById('firstPlayerName').textContent = JSON.parse(localStorage.getItem('firstPlayerDetail'));
    document.getElementById('secondPlayerName').textContent = JSON.parse(localStorage.getItem('secondPlayerDetail'));
    document.getElementById('endValue').textContent = JSON.parse(localStorage.getItem('endPointNum'));
    document.getElementById('dice').style.display = "none";
    score = [0, 0];
    roundScore = 0;
    if (active === 2) {
        active = 1;
        player1active();
    }
    inGame = false;

}

function restart() {
    gameplay = false;
    document.getElementById('player-1-round').innerHTML = "0";
    document.getElementById('player-2-round').innerHTML = "0";
    document.querySelector('.player-1-total').innerHTML = "0";
    document.querySelector('.player-2-total').innerHTML = "0";
    document.getElementById('firstPlayerName').textContent = JSON.parse(localStorage.getItem('firstPlayerDetail'));
    document.getElementById('secondPlayerName').textContent = JSON.parse(localStorage.getItem('secondPlayerDetail'));
    document.getElementById('endValue').textContent = JSON.parse(localStorage.getItem('endPointNum'));
    endPoint = JSON.parse(localStorage.getItem('endPointNum'));
    document.getElementById('dice').style.display = "none";
    score = [0, 0];
    roundScore = 0;
    if (active === 2) {
        active = 1;
        player1active();
    }
    inGame = false;

}
