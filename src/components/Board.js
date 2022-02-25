import '../css/board.css';
import {useState, useEffect} from 'react';
import Spaces from './Spaces.js';
import {checkForWin} from './checkForWin.js';
import {computerPlay} from './computerPlay.js';

function Board(props){ 
    
    const [board, setBoard] = useState(new Array(9).fill({id: null}));

    //console.log(board);

    if(props.playerTurn == 1){
        
        let newBoard = computerPlay(board);
        console.log(newBoard);
        props.setPlayerTurn(0);  
        //setBoard(board)       

    }
    
    //checkForWin(board);

    return (
    <div className="container">
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