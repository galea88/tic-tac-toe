export const computerPlay = (currentBoard) => {

let computerIndex = Math.floor(Math.random()*8);
let played = false;

while(played == false){   
    
    if(currentBoard[computerIndex].id == null){
      
        currentBoard[computerIndex] = {id: 1, name: "Computer", icon: "O"};
        played = true;
       
    }else{
     
        computerIndex = Math.floor(Math.random()*8); 

    }     

}

return currentBoard;

}
