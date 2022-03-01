import {useState} from 'react';

function Spaces (props){

    const [space, setSpace] = useState({id: props.id});   

    const handleClick = () => {  
           
        if(props.player.playerTurn === 0){

            if(props.board[props.id].id == null ){        
            
            let board = props.board;
                board[props.id] = props.player.allPlayers[props.player.playerTurn];
            
            props.setBoard(board)      
            props.player.setPlayerTurn(1);
                        
            }

        }        

    } 

    return(
        <>                                  
            <div className="col-2 m-1 text-center" onClick={() => (props.player.playerTurn === 0) ? handleClick(): ""}><span className="align-middle">{(props.board[props.id]) ? props.board[props.id].icon : ""}</span></div>
        </>
        
    )

}

export default Spaces;