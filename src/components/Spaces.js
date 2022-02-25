import {useState} from 'react';

function Spaces (props){

    const [space, setSpace] = useState({id: props.id});
    const [player, setPlayer] = useState(null);    

    const handleClick = () => {  
            
        if(props.player.playerTurn === 0){

            if(!player){            
            
            setPlayer(props.player.allPlayers[props.player.playerTurn])
            let board = props.board;
                board[props.id] = props.player.allPlayers[props.player.playerTurn];
            
            props.setBoard(board)      
            props.player.setPlayerTurn(1);
                        
            }

        }
        // else{ 

        //     if(!player){
            
        //     props.player.setPlayerTurn(0); 
        //     setPlayer(props.player.allPlayers[props.player.playerTurn]) 
        //     let board = props.board;
        //         board[props.id] = props.player.allPlayers[props.player.playerTurn];
           
        //     props.setBoard(board) 
            
        //     }

        // } 

    } 

    return(
        <>                                  
            <div className="col text-center" onClick={() => (props.player.playerTurn === 0) ? handleClick(): ""}><span className="align-middle">{(player) ? player.icon : ""}</span></div>
        </>
        
    )

}

export default Spaces;