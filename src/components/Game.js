import {useState} from 'react';
import Board from './Board.js';
import Players from './Players.js';

function Game(){

    const [gameStatus, setGameStatus] = useState({status: 'pending', reason: ""});
    const [playerTurn, setPlayerTurn] = useState(0);
    const [players, setPlayers] = useState([{id: 0, name: "Player 1", icon: "X"}, {id: 1, name: "Computer", icon: "O"}]);        

    return (
    <>       
        <Board allPlayers={players} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} gameStatus={gameStatus} setGameStatus={setGameStatus} />
    </>
    )   

}

export default Game;