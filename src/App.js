import React, { useState } from 'react';
import './App.css';
import dice1 from './assets/dice1.png';
import dice2 from './assets/dice2.png';
import dice3 from './assets/dice3.png';
import dice4 from './assets/dice4.png';
import dice5 from './assets/dice5.png';
import dice6 from './assets/dice6.png';

function App() {
  const [player1Name, setPlayer1Name] = useState("Player 1");
  const [player2Name, setPlayer2Name] = useState("Player 2");
  const [player1Dice, setPlayer1Dice] = useState(dice6);
  const [player2Dice, setPlayer2Dice] = useState(dice6);
  const [winner, setWinner] = useState("");
  
  const editNames = () => {
    const newPlayer1Name = prompt("Enter Player 1 Name:");
    const newPlayer2Name = prompt("Enter Player 2 Name:");
    
    setPlayer1Name(newPlayer1Name || "Player 1");
    setPlayer2Name(newPlayer2Name || "Player 2");
  }
  
  const rollDice = () => {
    const randomDice1 = Math.floor(Math.random() * 6 + 1);
    const randomDice2 = Math.floor(Math.random() * 6 + 1);
    
    setPlayer1Dice(getDiceImage(randomDice1));
    setPlayer2Dice(getDiceImage(randomDice2));
    
    if (randomDice1 === randomDice2) {
      setWinner("Draw!");
    } else if (randomDice1 < randomDice2) {
      setWinner(player2Name + " WINS!");
    } else {
      setWinner(player1Name + " WINS!");
    }
  }
  
  const getDiceImage = (diceValue) => {
    switch(diceValue) {
      case 1:
        return dice1;
      case 2:
        return dice2;
      case 3:
        return dice3;
      case 4:
        return dice4;
      case 5:
        return dice5;
      case 6:
        return dice6;
      default:
        return dice6;
    }
  }
  
  return (
    <div className="App">
      <h1>Dice Roll Game</h1>
      <div className="container">
        <div className="dice">
          <p>{player1Name}</p>
          <img src={player1Dice} alt="Player 1 Dice" style={{width: "150px"}} />
        </div>
        <div className="dice">
          <p>{player2Name}</p>
          <img src={player2Dice} alt="Player 2 Dice" style={{width: "150px"}} />
        </div>
      </div>
      <div className="buttons">
        <button onClick={rollDice}>Roll the Dice</button>
        <button onClick={editNames}>Edit Names</button>
      </div>
      <h2>{winner}</h2>
    </div>
  );
}

export default App;






