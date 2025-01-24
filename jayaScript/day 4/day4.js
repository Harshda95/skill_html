let a = parseIntprompt("Enter the no upto you want the even no.")

for (let index = 1; index <a; index++) {
    
    if (index%2===0) {
        console.log(index)
     
        
    }
    
}

//randam no guessing game

let b = Math.floor(Math.random()*10 +1);
console.log(b)
let c=parseIntprompt("Guess the no between 1 to 10"); 

while ( b!=c) {
    c=parseIntprompt(" you enter the wronge no try again"); 
    
}
console.log( c)
alert("Congrats")
alert("you guess the corect no.")



