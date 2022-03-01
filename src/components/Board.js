import '../css/board.css';
import {useState, useEffect} from 'react';
import Spaces from './Spaces.js';
import {checkForWin} from './checkForWin.js';
import {computerPlay} from './computerPlay.js';

function Board(props){ 
    
    const [board, setBoard] = useState(new Array(9).fill({id: null}));

    useEffect(() => {

        if(props.playerTurn == 1){
    
            let currentBoard = board;
            
            let newBoard = computerPlay(currentBoard);
                     
            setBoard(newBoard)  
            props.setPlayerTurn(0);    
                        
        }

        let winCheck = checkForWin(board);

        if(winCheck.won){ props.setGameStatus({status: "finished", reason: winCheck.reason}); }


    })    
   
    return (
    <div className="container">
        {(props.gameStatus.status === "finished") ? 
            <div className="row text-center">
            <h1>{props.gameStatus.reason}</h1>
            </div> : ""        
        }
        
        <div className="row">
            <Spaces player={props} board={board} setBoard={setBoard} id={0} />
            <Spaces player={props} board={board} setBoard={setBoard} id={1} />
            <Spaces player={props} board={board} setBoard={setBoard} id={2} />       
        </div>
        <div className="row">
            <Spaces player={props} board={board} setBoard={setBoard} id={3} />
            <Spaces player={props} board={board} setBoard={setBoard} id={4} />
            <Spaces player={props} board={board} setBoard={setBoard} id={5} />    
        </div>
        <div className="row">
            <Spaces player={props} board={board} setBoard={setBoard} id={6} />
            <Spaces player={props} board={board} setBoard={setBoard} id={7} />
            <Spaces player={props} board={board} setBoard={setBoard} id={8} />           
        </div>
    </div>
    );  

}

export default Board;