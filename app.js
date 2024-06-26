
document.getElementById("btnguestCheck").onclick = function(){

    if(document.getElementById("Guess").value == randomNumber){
        alert ("Well Done !!!.Your Answer is Correct");
    }
    else{
        alert("Try Again......");
    }
  
}

let randomNumber = Math.floor((Math.random()*10)+1);


