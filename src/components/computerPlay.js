export const computerPlay = (board) => {

let computerIndex = Math.floor(Math.random()*8);
let played = false;

while(played == false){   
    
    if(board[computerIndex].id == null){
      
        board[computerIndex] = {id: 1, name: "Computer", icon: "O"};
        played = true;
       
    }else{
     
        computerIndex = Math.floor(Math.random()*8); 

    }     

}

return board;

}