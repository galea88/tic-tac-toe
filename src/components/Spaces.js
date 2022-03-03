import {useState} from 'react';
import {checkForWin} from './checkForWin.js';

function Spaces (props){

    const [space, setSpace] = useState({id: props.id});   

    const handleClick = () => {  

        if(props.player.gameStatus.status === "inProgress"){  
           
        if(props.player.playerTurn === 0){

            if(props.board[props.id].id == null ){        
            
            let board = props.board;
                board[props.id] = props.player.allPlayers[props.player.playerTurn];
            
            props.setBoard(board)      
            props.player.setPlayerTurn(1);
                        
            }           

            let winCheck = checkForWin(props.board);

            if(winCheck.won){ props.player.setGameStatus({status: "finished", reason: winCheck.reason}); }
            
            console.log(winCheck);

        }   
        
    }

    } 

    return(
        <>                                  
            <div className="col-2 m-1 rounded text-center" onClick={() => (props.player.playerTurn === 0) ? handleClick(): ""}><span className="align-middle">{(props.board[props.id]) ? props.board[props.id].icon : ""}</span></div>
        </>
        
    )

}

export default Spaces;