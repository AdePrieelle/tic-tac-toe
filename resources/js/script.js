"use strict";

const playAgainst = document.querySelector(".play-against");
const playAgainstPlayer = document.querySelector(".play-against-player");
const playAgainstComputer = document.querySelector(".play-against-computer");
const formPlayers = document.querySelector(".form-players");
const startGameButton = document.querySelector(".start-game-button");
const labelPlayer2 = document.querySelector(".label-player-2");
const inputPlayer2 = document.querySelector(".input-player-2");
const startGamePlay = document.querySelector(".start-game-play");
const gameboardGrid = document.querySelector(".gameboard-grid");
const playGameButtons = document.querySelector(".play-game-buttons");
const startGame = document.querySelector(".start-game");
const playersScore = document.querySelector(".players-score");

playAgainstPlayer.addEventListener("click", function() {
  playAgainstPlayer.setAttribute("style", "opacity: 1;");
  playAgainstComputer.setAttribute("style", "opacity: .5;");
  formPlayers.setAttribute("style", "display: flex;");
  labelPlayer2.setAttribute("style", "display: block");
  inputPlayer2.setAttribute("style", "display: block");
  startGameButton.setAttribute("style", "display: flex;");
});

playAgainstComputer.addEventListener("click", function() {
  playAgainstPlayer.setAttribute("style", "opacity: .5;");
  playAgainstComputer.setAttribute("style", "opacity: 1;");
  formPlayers.setAttribute("style", "display: flex;");
  startGameButton.setAttribute("style", "display: flex;");
  labelPlayer2.setAttribute("style", "display: none");
  inputPlayer2.setAttribute("style", "display: none");
});

startGamePlay.addEventListener("click", function() {
  playAgainst.setAttribute("style", "display: none;");
  formPlayers.setAttribute("style", "display: none;");
  startGameButton.setAttribute("style", "display: none;");
  gameboardGrid.setAttribute("style", "display: grid");
  playGameButtons.setAttribute("style", "display: flex");
  playersScore.setAttribute("style", "display: flex");
});

startGame.addEventListener("click", function() {
  playAgainst.setAttribute("style", "display: flex;");
  playAgainstPlayer.setAttribute("style", "opacity: 1;");
  playAgainstComputer.setAttribute("style", "opacity: .5;");
  labelPlayer2.setAttribute("style", "display: flex");
  inputPlayer2.setAttribute("style", "display: flex");
  formPlayers.setAttribute("style", "display: flex;");
  startGameButton.setAttribute("style", "display: flex;");
  gameboardGrid.setAttribute("style", "display: none");
  playGameButtons.setAttribute("style", "display: none");
  playersScore.setAttribute("style", "display: none");
});



/*
Steps

1.  Set up your project with a HTML, CSS and Javascript files and get the Git repo all set up.
      
      - Set up html structure and styling
   

2.  You’re going to store the gameboard as an array inside of a Gameboard object, 
    so start there! Your players are also going to be stored in objects… 
    and you’re probably going to want an object to control the flow of the game itself. 

    2.1 Your main goal here is to have as little global code as possible. 
        Try tucking everything away inside of a module or factory. 
        Rule of thumb: 
        if you only ever need ONE of something (gameBoard, displayController), use a module. 
        If you need multiples of something (players!), create them with factories.

          - Make a module for gameBoard
              - make an array to store moves in

          - Make a module for displayController

          - Make a factory function for player


3.  Set up your HTML and write a JavaScript function that will 
    render the contents of the gameboard array to the webpage 
    (for now you can just manually fill in the array with "X"s and "O"s)

      - displayController
          - Make a function render() that will render the gameboard array to the webpage
              - const tile1 = document.querySelector(".tile1");
              - tile1.innerHTML = `${gameBoardArray[0][1]}`;
              - tile2.innerHTML = `${gameBoardArray[0][2]}`;

4.  Build the functions that allow players to add marks to a specific spot on the board, 
    and then tie it to the DOM, letting players click on the gameboard to place their marker. 
    Don’t forget the logic that keeps players from playing in spots that are already taken! 

    4.1 Think carefully about where each bit of logic should reside. 
        Each little piece of functionality should be able to fit 
        in the game, player or gameboard objects.. 
        but take care to put them in “logical” places. 
        Spending a little time brainstorming here can make your life much easier later!

          - player
              - isTurn = true;

          - displayController
              - let marker = "";
              - if (innerHTML of document.queryselector(".class") is empty )
                - Make a function addMark() that will change innerHTML based on 
                  - if (playerX.isTurn) change to "X") {
                    marker = "X"
                    playerX.isTurn = false;
                    playerO.isTurn = true;
                  } else {
                    marker = "O"
                    playerX.isTurn = true;
                    playerO.isTurn = false;
                  }

              - update the gameboard array with marker where is clicked
                  - tile1.addeventlistener("click", add marker to gameBoard array location)
                  - tile2.adaddeventlistener("click", add marker to gameBoard array location)
                  - ....

              - render the gameboard from the gameBoard array


5.  Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.

      - if (check gameBoard array for 3 in a row)
        - player object
            -isWinner = true;


6.  Clean up the interface to allow players to put in their names, 
    include a button to start/restart the game and 
    add a display element that congratulates the winning player!
    
      - add html form elements to store names
      - save names in player object when pressing start
      - reset objects when pressing reset
      - if (playerX.isWinner == true) {
        display name + is the winner;
      }

7.  Optional - If you’re feeling ambitious create an AI 
    so that a player can play against the computer! 

    7.1 Start by just getting the computer to make a random legal move.
    7.2 Once you’ve gotten that, work on making the computer smart. 
        It is possible to create an unbeatable AI using the minimax algorithm 
        (read about it here, some googling will help you out with this one)
    7.3 If you get this running definitely come show it off in the chatroom. 
        It’s quite an accomplishment!

*/