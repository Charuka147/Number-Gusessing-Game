/*class Customer{
    name;
    age;
    address;

    constructor(name,age,address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    setName(name){
        this.name = name;
    }
    getName(){
        return this.name ;
    }
}
    let customer01 = new Customer("Saman",12,"Panadura");

    console.log(customer01.getName());
*/

document.getElementById("btnguestCheck").onclick = function(){

   
    //let randomNumber = Math.random();
    //randomNumber = randomNumber *11;
    //randomNumber = Math.floor(randomNumber);

    if(document.getElementById("Guess").value == randomNumber){
        alert ("Well Done !!!.Your Answer is Correct");
    }
    else{
        alert("Try Again......The correct number is :"+randomNumber);
    }

}

let randomNumber = Math.floor((Math.random()*10)+1);
console.log(randomNumber);

