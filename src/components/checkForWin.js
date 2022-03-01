export function checkForWin(board){

    for(let x=0;x < board.length;x++){

        let play = null;
        let play2 = null;
        let play3 = null;

        //CHECK FOR VERTICAL WIN
        if(x<3){
            play = board[x].id;
            play2 = board[x+3].id;
            play3 = board[x+6].id; 
        }
        else if(x>3 && x < 6){
            play = board[x-3].id;
            play2 = board[x].id;
            play3 = board[x+3].id;    
        }
        else if(x >= 6){
            play = board[x-6].id;
            play2 = board[x-3].id;
            play3 = board[x].id;     
        }        
        
        if(play !== null && (play === play2 && play === play3)){
            
            //alert(board[x].name+" won!");
            return {"won": true, "reason": `${board[x].name} won the game.`};

        }

        //CHECK FOR HORIZONTAL WIN
        if(x % 3 === 0){
            play = board[x].id;
            play2 = board[x+1].id;
            play3 = board[x+2].id; 
        }
        else if(x % 3 === 1){
            play = board[x-1].id;
            play2 = board[x].id;
            play3 = board[x+1].id;    
        }
        else if(x % 3 === 2){
            play = board[x-2].id;
            play2 = board[x-1].id;
            play3 = board[x].id;     
        }
       
        if(play !== null && (play === play2 && play === play3)){
            
            //alert(board[x].name+" won!");
            return {"won": true, "reason": `${board[x].name} won the game.`};

        }

        //CHECK FOR DIAGONAL WIN
        if(x == 0){
            play = board[x].id;
            play2 = board[x+4].id;
            play3 = board[x+8].id; 
        }
        else if(x == 2){
            play = board[x].id;
            play2 = board[x+2].id;
            play3 = board[x+4].id;    
        }
       
        if(play !== null && (play === play2 && play === play3)){
            
            //alert(board[x].name+" won!");
            return {"won": true, "reason": `${board[x].name} won the game.`};

        }


    }

  //return board;  
  return {"won": false};

}