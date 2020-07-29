"use strict";

// Step 1

// Selectors
const playAgainst = document.querySelector(".play-against");
const playAgainstPlayer = document.querySelector(".play-against-player");
const playAgainstComputer = document.querySelector(".play-against-computer");
const formPlayers = document.querySelector(".form-players");
const startGameButton = document.querySelector(".start-game-button");
const inputPlayer1 = document.querySelector(".input-player-1");
const labelPlayer2 = document.querySelector(".label-player-2");
const inputPlayer2 = document.querySelector(".input-player-2");
const startGamePlay = document.querySelector(".start-game-play");
const gameboardGrid = document.querySelector(".gameboard-grid");
const playGameButtons = document.querySelector(".play-game-buttons");
const startGame = document.querySelector(".start-game");
const startGameEnd = document.querySelector(".start-game-end");
const resetGame = document.querySelector(".reset-game");
const resetGameEnd = document.querySelector(".reset-game-end");
const resetGameRoundRedo = document.querySelector(".reset-game-round-redo");
const resetGameRoundNext = document.querySelector(".reset-game-round-next");
const playersScore = document.querySelector(".players-score");
const bgModal = document.querySelector(".bg-modal");
const player1Score = document.querySelector(".player-1-score");
const player2Score = document.querySelector(".player-2-score");

playAgainstPlayer.addEventListener("click", function() {
  playAgainstPlayer.setAttribute("style", "opacity: 1;");
  playAgainstComputer.setAttribute("style", "opacity: .5;");

  if (!playAgainstPlayer.classList.contains("active-play-mode")) {
    playAgainstPlayer.classList += " active-play-mode";
  }
  playAgainstComputer.classList.remove("active-play-mode");

  formPlayers.setAttribute("style", "display: flex;");
  labelPlayer2.setAttribute("style", "display: block");
  inputPlayer2.setAttribute("style", "display: block");
  startGameButton.setAttribute("style", "display: flex;");
});

playAgainstComputer.addEventListener("click", function() {
  playAgainstPlayer.setAttribute("style", "opacity: .5;");
  playAgainstComputer.setAttribute("style", "opacity: 1;");

  if (!playAgainstComputer.classList.contains("active-play-mode")) {
    playAgainstComputer.classList += " active-play-mode";
  }
  playAgainstPlayer.classList.remove("active-play-mode");

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
  gameBoard.gameBoardArray = [
    "", "", "", 
    "", "", "", 
    "", "", ""
  ];
  displayController.render(gameBoard.gameBoardArray);
  // Give default names to empty player inputs
  if (inputPlayer1.value == "") {
    player1.name = "Player 1";
  } else {
    player1.name = inputPlayer1.value;
  }
  if (inputPlayer2.value == "") {
    // Give player 2 "Computer" as name if computer playmode is selected
    if (playAgainstComputer.classList.contains("active-play-mode")) {
      player2.name = "Computer";
    } else {
      player2.name = "Player 2";
    }
  } else {
    player2.name = inputPlayer2.value;
  }
  player1Score.innerHTML = `${player1.name} ("X")`;
  player2Score.innerHTML = `${player2.name} ("O")`;
  displayController.addMark();
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
  // reset gameBoard
  gameBoard.gameBoardArray = [
    "", "", "", 
    "", "", "", 
    "", "", ""
  ];
  displayController.render(gameBoard.gameBoardArray);
  player1.resetPlayers();
  player2.resetPlayers();
  // Set Player mode to default and remove class active-play-mode from computer if needed
  if (!playAgainstPlayer.classList.contains("active-play-mode")) {
    playAgainstPlayer.classList += " active-play-mode";
  }
  playAgainstComputer.classList.remove("active-play-mode");
});

startGameEnd.addEventListener("click", function() {
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
  // reset gameBoard
  gameBoard.gameBoardArray = ["", "", "", "", "", "", "", "", ""];
  displayController.render(gameBoard.gameBoardArray);
  bgModal.setAttribute("style", "display: none;");
  player1.resetPlayers();
  player2.resetPlayers();
  if (!playAgainstPlayer.classList.contains("active-play-mode")) {
    playAgainstPlayer.classList += " active-play-mode";
  }
  playAgainstComputer.classList.remove("active-play-mode");
});

resetGameRoundRedo.addEventListener("click", function() {
  gameBoard.gameBoardArray = ["", "", "", "", "", "", "", "", ""];
  displayController.render(gameBoard.gameBoardArray);
});

resetGameRoundNext.addEventListener("click", function() {
  gameBoard.gameBoardArray = ["", "", "", "", "", "", "", "", ""];
  displayController.render(gameBoard.gameBoardArray);
  bgModal.setAttribute("style", "display: none;");
  // Start with a computermove if its the computers turn
  // if (playAgainstComputer.classList.contains("active-play-mode")) {
  //   if (player2.isFirstMove == true) {
  //     displayController.addMark().randomComputerMove();
  //   }
  // }
});

resetGame.addEventListener("click", function() {
  gameBoard.gameBoardArray = ["", "", "", "", "", "", "", "", ""];
  displayController.render(gameBoard.gameBoardArray);
});

resetGameEnd.addEventListener("click", function() {
  gameBoard.gameBoardArray = ["", "", "", "", "", "", "", "", ""];
  displayController.render(gameBoard.gameBoardArray);
  bgModal.setAttribute("style", "display: none;");
});


// Step 2

const gameBoard = (() => {
  let gameBoardArray = ["", "", "", "", "", "", "", "", ""];
  
  return {
    gameBoardArray
  };
})();

// Step 3

const displayController = (() => {

  const item0 = document.querySelector(".gridboard-item-0-0");
  const item1 = document.querySelector(".gridboard-item-0-1");
  const item2 = document.querySelector(".gridboard-item-0-2");
  const item3 = document.querySelector(".gridboard-item-1-0");
  const item4 = document.querySelector(".gridboard-item-1-1");
  const item5 = document.querySelector(".gridboard-item-1-2");
  const item6 = document.querySelector(".gridboard-item-2-0");
  const item7 = document.querySelector(".gridboard-item-2-1");
  const item8 = document.querySelector(".gridboard-item-2-2");
  
  const render = function(gameBoardArray) {

    item0.innerHTML = `${gameBoardArray[0]}`;
    item1.innerHTML = `${gameBoardArray[1]}`;
    item2.innerHTML = `${gameBoardArray[2]}`;
    item3.innerHTML = `${gameBoardArray[3]}`;
    item4.innerHTML = `${gameBoardArray[4]}`;
    item5.innerHTML = `${gameBoardArray[5]}`;
    item6.innerHTML = `${gameBoardArray[6]}`;
    item7.innerHTML = `${gameBoardArray[7]}`;
    item8.innerHTML = `${gameBoardArray[8]}`;
    displayController.isTheWinner(gameBoard.gameBoardArray);
    displayController.winnerMessage(gameBoard.gameBoardArray);
  };

  // Step 4
  const addMark = function() {
   
    let marker = "";
    const changeMarker = function() {
      if (player1.isTurn == true) {
        marker = player1.playerMarker;
        player1.isTurn = false;
        player2.isTurn = true;
      } else {
        marker = player2.playerMarker;
        player2.isTurn = false;
        player1.isTurn = true;
      }
    }

    

    /*
    7.1 Start by just getting the computer to make a random legal move.

    check if player or computer is pressed at new game. check with active-play-mode class
    if player is pressed execute normally like below
    else if marker == "O" && isComputer {
      let randomnumber = (0-8);
      gameBoard.gameBoardArray[randomnumber] random that are empty that gameBoard.gameBoardArray[?][?] = marker;
    }
    */

    // const randomComputerMove = function() {

    //   // check if gameBoard.Array is full or if there is a winner
    //   for(let i=0; i < gameBoard.gameBoardArray.length; i++){
    //     if(gameBoard.gameBoardArray[i] !== "" || player1.isWinner == true || player2.isWinner == true) {
    //       console.log("hi");
    //     }
    //   }

    //   changeMarker();
    //   console.log("hibbb");
    //   let randomArrayIndex = Math.floor(Math.random() * gameBoard.gameBoardArray.length);
    //   while (gameBoard.gameBoardArray[randomArrayIndex] !== "") {
    //     randomArrayIndex = Math.floor(Math.random() * gameBoard.gameBoardArray.length);                      
    //   }
    //   gameBoard.gameBoardArray[randomArrayIndex] = marker;
    //   displayController.render(gameBoard.gameBoardArray);
    // }

    

    item0.addEventListener("click", function() {
      if (gameBoard.gameBoardArray[0] === "") {
        changeMarker();
        gameBoard.gameBoardArray[0] = marker;
        displayController.render(gameBoard.gameBoardArray);
        // execute randomComputerMove is the Computer play option is selected at start game
        // if (playAgainstComputer.classList.contains("active-play-mode")) {
        //   randomComputerMove();
        // }
      } else {
        return;
      }
    });

    item1.addEventListener("click", function() {
      if (gameBoard.gameBoardArray[1] === "") {
        changeMarker();
        gameBoard.gameBoardArray[1] = marker;
        displayController.render(gameBoard.gameBoardArray);
        // execute randomComputerMove is the Computer play option is selected at start game
        // if (playAgainstComputer.classList.contains("active-play-mode")) {
        //   randomComputerMove();
        // }
      } else {
        return;
      }
    });

    item2.addEventListener("click", function() {
      if (gameBoard.gameBoardArray[2] === "") {
        changeMarker();
        gameBoard.gameBoardArray[2] = marker;
        displayController.render(gameBoard.gameBoardArray);
        // execute randomComputerMove is the Computer play option is selected at start game
        // if (playAgainstComputer.classList.contains("active-play-mode")) {
        //   randomComputerMove();
        // }
      } else {
        return;
      }
    });
  
    item3.addEventListener("click", function() {
      if (gameBoard.gameBoardArray[3] === "") {
        changeMarker();
        gameBoard.gameBoardArray[3] = marker;
        displayController.render(gameBoard.gameBoardArray);
        // execute randomComputerMove is the Computer play option is selected at start game
        // if (playAgainstComputer.classList.contains("active-play-mode")) {
        //   randomComputerMove();
        // }
      } else {
        return;
      }
    });

    item4.addEventListener("click", function() {
      if (gameBoard.gameBoardArray[4] === "") {
        changeMarker();
        gameBoard.gameBoardArray[4] = marker;
        displayController.render(gameBoard.gameBoardArray);
        // execute randomComputerMove is the Computer play option is selected at start game
        // if (playAgainstComputer.classList.contains("active-play-mode")) {
        //   randomComputerMove();
        // }
      } else {
        return;
      }
    });

    item5.addEventListener("click", function() {
      if (gameBoard.gameBoardArray[5] === "") {
        changeMarker();
        gameBoard.gameBoardArray[5] = marker;
        displayController.render(gameBoard.gameBoardArray);
        // execute randomComputerMove is the Computer play option is selected at start game
        // if (playAgainstComputer.classList.contains("active-play-mode")) {
        //   randomComputerMove();
        // }
      } else {
        return;
      }
    });

    item6.addEventListener("click", function() {
      if (gameBoard.gameBoardArray[6] === "") {
        changeMarker();
        gameBoard.gameBoardArray[6] = marker;
        displayController.render(gameBoard.gameBoardArray);
        // execute randomComputerMove is the Computer play option is selected at start game
        // if (playAgainstComputer.classList.contains("active-play-mode")) {
        //   randomComputerMove();
        // }
      } else {
        return;
      }
    });

    item7.addEventListener("click", function() {
      if (gameBoard.gameBoardArray[7] === "") {
        changeMarker();
        gameBoard.gameBoardArray[7] = marker;
        displayController.render(gameBoard.gameBoardArray);
        // execute randomComputerMove is the Computer play option is selected at start game
        // if (playAgainstComputer.classList.contains("active-play-mode")) {
        //   randomComputerMove();
        // }
      } else {
        return;
      }
    });

    item8.addEventListener("click", function() {
      if (gameBoard.gameBoardArray[8] === "") {
        changeMarker();
        gameBoard.gameBoardArray[8] = marker;
        displayController.render(gameBoard.gameBoardArray);
        // execute randomComputerMove is the Computer play option is selected at start game
        // if (playAgainstComputer.classList.contains("active-play-mode")) {
        //   randomComputerMove();
        // }
      } else {
        return;
      }
    });

    

    /*
    7.1 Start by just getting the computer to make a random legal move.

    check if player or computer is pressed at new game. check with active-play-mode class
    if player is pressed execute normally like below
    else if marker == "O" && isComputer {
      let randomnumber = (0-8);
      gameBoard.gameBoardArray[randomnumber] random that are empty that gameBoard.gameBoardArray[?][?] = marker;
    }
    */


  };

  const decideFirstMove = function() {

    startGamePlay.addEventListener("click", function() {
      player1.isFirstMove = true;
      player2.isFirstMove = false;
      player1.isTurn = true;
      player2.isTurn = false;
    });

    startGame.addEventListener("click", function() {
      player1.isFirstMove = true;
      player2.isFirstMove = false;
      player1.isTurn = true;
      player2.isTurn = false;
    });

    startGameEnd.addEventListener("click", function() {
      player1.isFirstMove = true;
      player2.isFirstMove = false;
      player1.isTurn = true;
      player2.isTurn = false;
    });

    resetGame.addEventListener("click", function() {
      player1.isFirstMove = true;
      player2.isFirstMove = false;
      player1.isTurn = true;
      player2.isTurn = false;
    });

    resetGameEnd.addEventListener("click", function() {
      player1.isFirstMove = true;
      player2.isFirstMove = false;
      player1.isTurn = true;
      player2.isTurn = false;
    });

    resetGameRoundRedo.addEventListener("click", function() {
      player1.isTurn = player1.isFirstMove;
      player2.isTurn = player2.isFirstMove;
    });

    resetGameRoundNext.addEventListener("click", function() {
      if (player1.isFirstMove === true) {
        player1.isFirstMove = false;
        player1.isTurn = false;
        player2.isFirstMove = true;
        player2.isTurn = true;
      } else {
        player1.isFirstMove = true;
        player1.isTurn = true;
        player2.isFirstMove = false;
        player2.isTurn = false;
      };
    });

  };

  const isTheWinner = function(gameBoardArray) {
    if (gameBoardArray[0] == "X" && gameBoardArray[1] == "X" && gameBoardArray[2] == "X") {
      player1.isWinner = true;
      player2.isWinner = false;
    } else if (gameBoardArray[3] == "X" && gameBoardArray[4] == "X" && gameBoardArray[5] == "X") {
      player1.isWinner = true;
      player2.isWinner = false;
    } else if (gameBoardArray[6] == "X" && gameBoardArray[7] == "X" && gameBoardArray[8] == "X") {
      player1.isWinner = true;
      player2.isWinner = false;
    } else if (gameBoardArray[0] == "X" && gameBoardArray[3] == "X" && gameBoardArray[6] == "X") {
      player1.isWinner = true;
      player2.isWinner = false;
    } else if (gameBoardArray[1] == "X" && gameBoardArray[4] == "X" && gameBoardArray[7] == "X") {
      player1.isWinner = true;
      player2.isWinner = false;
    } else if (gameBoardArray[2] == "X" && gameBoardArray[5] == "X" && gameBoardArray[8] == "X") {
      player1.isWinner = true;
      player2.isWinner = false;
    } else if (gameBoardArray[0] == "X" && gameBoardArray[4] == "X" && gameBoardArray[8] == "X") {
      player1.isWinner = true;
      player2.isWinner = false;
    } else if (gameBoardArray[6] == "X" && gameBoardArray[4] == "X" && gameBoardArray[2] == "X") {
      player1.isWinner = true;
      player2.isWinner = false;
    } else if (gameBoardArray[0] == "O" && gameBoardArray[1] == "O" && gameBoardArray[2] == "O") {
      player1.isWinner = false;
      player2.isWinner = true;
    } else if (gameBoardArray[3] == "O" && gameBoardArray[4] == "O" && gameBoardArray[5] == "O") {
      player1.isWinner = false;
      player2.isWinner = true;
    } else if (gameBoardArray[6] == "O" && gameBoardArray[7] == "O" && gameBoardArray[8] == "O") {
      player1.isWinner = false;
      player2.isWinner = true;
    } else if (gameBoardArray[0] == "O" && gameBoardArray[3] == "O" && gameBoardArray[6] == "O") {
      player1.isWinner = false;
      player2.isWinner = true;
    } else if (gameBoardArray[1] == "O" && gameBoardArray[4] == "O" && gameBoardArray[7] == "O") {
      player1.isWinner = false;
      player2.isWinner = true;
    } else if (gameBoardArray[2] == "O" && gameBoardArray[5] == "O" && gameBoardArray[8] == "O") {
      player1.isWinner = false;
      player2.isWinner = true;
    } else if (gameBoardArray[0] == "O" && gameBoardArray[4] == "O" && gameBoardArray[8] == "O") {
      player1.isWinner = false;
      player2.isWinner = true;
    } else if (gameBoardArray[6] == "O" && gameBoardArray[4] == "O" && gameBoardArray[2] == "O") {
      player1.isWinner = false;
      player2.isWinner = true;
    } else if (gameBoardArray[0] !== "" && gameBoardArray[1] !== "" && gameBoardArray[2] !== "" 
              && gameBoardArray[3] !== "" && gameBoardArray[3] !== "" && gameBoardArray[5] !== "" 
              && gameBoardArray[6] !== "" && gameBoardArray[7] !== "" && gameBoardArray[8] !== "") {
      player1.isWinner = false;
      player2.isWinner = false;
    }
  };

  const winnerMessage = function(gameBoardArray) {
    if (player1.isWinner == false && player2.isWinner == false && gameBoardArray[0] !== "" && gameBoardArray[1] !== "" && gameBoardArray[2] !== "" 
    && gameBoardArray[3] !== "" && gameBoardArray[3] !== "" && gameBoardArray[5] !== "" 
    && gameBoardArray[6] !== "" && gameBoardArray[7] !== "" && gameBoardArray[8] !== "") {
      document.querySelector(".winner-message").innerHTML = "It's a draw!";
      showWinnerScreen.showTheWinnerScreen();
      player1.isWinner = false;
      player2.isWinner = false;
    } else if (player1.isWinner == true && player2.isWinner == false) {
      player1.playerScore += 1;
      document.querySelector(".score").innerHTML = `${player1.playerScore}:${player2.playerScore}`;
      document.querySelector(".winner-message").innerHTML = `${player1.name} is the winner!`;
      showWinnerScreen.showTheWinnerScreen();
      player1.isWinner = false;
      player2.isWinner = false;
    } else if (player1.isWinner == false && player2.isWinner == true) {
      player2.playerScore += 1;
      document.querySelector(".score").innerHTML = `${player1.playerScore}:${player2.playerScore}`;
      document.querySelector(".winner-message").innerHTML = `${player2.name} is the winner!`;
      showWinnerScreen.showTheWinnerScreen();
      player1.isWinner = false;
      player2.isWinner = false;     
    }
  };

  const resetScores = function() {
    document.querySelector(".start-game-play").addEventListener("click", function() {
      player1.playerScore = 0;
      player2.playerScore = 0;
      document.querySelector(".score").innerHTML = `${player1.playerScore}:${player2.playerScore}`
    });
    document.querySelector(".reset-game").addEventListener("click", function() {
      player1.playerScore = 0;
      player2.playerScore = 0;
      document.querySelector(".score").innerHTML = `${player1.playerScore}:${player2.playerScore}`
    });
    document.querySelector(".reset-game-end").addEventListener("click", function() {
      player1.playerScore = 0;
      player2.playerScore = 0;
      document.querySelector(".score").innerHTML = `${player1.playerScore}:${player2.playerScore}`
    });
    document.querySelector(".start-game").addEventListener("click", function() {
      player1.playerScore = 0;
      player2.playerScore = 0;
      document.querySelector(".score").innerHTML = `${player1.playerScore}:${player2.playerScore}`
    });
    document.querySelector(".start-game-end").addEventListener("click", function() {
      player1.playerScore = 0;
      player2.playerScore = 0;
      document.querySelector(".score").innerHTML = `${player1.playerScore}:${player2.playerScore}`
    });
  }

  const showWinnerScreen = (function() {
    const showTheWinnerScreen = function() {
      document.querySelector(".bg-modal").setAttribute("style", "display: flex;");
    }
    const hideTheWinnerScreen = function() {
      document.querySelector(".bg-modal").setAttribute("style", "display: none;");
    }
    return {
      showTheWinnerScreen,
      hideTheWinnerScreen
    };
  })();



  return {
    render,
    decideFirstMove,
    addMark,
    // new
    isTheWinner,
    winnerMessage,
    resetScores
  };
})();


// Step 4

const player = (name, marker, isPlayerTurn, isPlayerFirstMove) => {
  
  let playerMarker = marker;
  let isTurn = isPlayerTurn;
  let isFirstMove = isPlayerFirstMove;
  let isWinner = false;
  let playerScore = 0;

  const resetPlayers = function() {
    inputPlayer1.value = "";
    inputPlayer2.value = "";
    player1.playerMarker = "X";
    player2.playerMarker = "O";
    player1.isTurn = true;
    player2.isTurn = false;
    player1.isFirstMove = true;
    player2.isFirstMove = false;
    player1.isWinner = false;
    player2.isWinner = false;
    player1.playerScore = 0;
    player2.playerScore = 0;
  };

  return {
    name,
    isTurn,
    isFirstMove,
    playerMarker,
    isWinner,
    playerScore,
    resetPlayers
  };
};

let player1 = player("Player 1", "X", true, true);
let player2 = player("Player 2", "O", false, false);

displayController.render(gameBoard.gameBoardArray);
displayController.decideFirstMove();
// displayController.addMark();
displayController.resetScores();

// Step 5




/*
7.  Optional - If you’re feeling ambitious create an AI 
    so that a player can play against the computer! 

    7.1 Start by just getting the computer to make a random legal move.
    7.2 Once you’ve gotten that, work on making the computer smart. 
        It is possible to create an unbeatable AI using the minimax algorithm 
        (read about it here, some googling will help you out with this one)
    7.3 If you get this running definitely come show it off in the chatroom. 
        It’s quite an accomplishment!
*/



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
              - tile1.innerHTML = `${gameBoardArray[1]}`;
              - tile2.innerHTML = `${gameBoardArray[2]}`;

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
            update player.score


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