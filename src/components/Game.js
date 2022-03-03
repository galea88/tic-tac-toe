import {useState} from 'react';
import Board from './Board.js';
import Welcome from './Welcome.js';
import Icon from '../images/tic-tac-toe.png';

function Game(){

    const [gameStatus, setGameStatus] = useState({status: 'pending', reason: ""});
    const [playerTurn, setPlayerTurn] = useState(0);
    const [players, setPlayers] = useState([{id: 0, name: "Player 1", icon: "X"}, {id: 1, name: "Computer", icon: "O"}]);        

    return (
    <div className="container"> 
        <div className="row mt-5">
            <div className="col py-3 d-flex justify-content-center">
                <img height={100} width={100} src={Icon} />                
            </div>
        </div>        
        {
            (gameStatus.status === "pending") ? <Welcome setGameStatus={setGameStatus} /> : <Board allPlayers={players} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} gameStatus={gameStatus} setGameStatus={setGameStatus} />
        }        
    </div>
    )   

}

export default Game;