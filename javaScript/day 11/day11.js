alert("to add the numbers please enter 'sum' after giving all input")
let inputarray=[];
let user=prompt("enter the no ")
let input=parseInt(user)

while (user!="sum") {
    inputarray.push(input) 
    input=parseInt(user)
    user=prompt("enter the no ")
}

function sum(p) {
    let result=0;
    for (let index = 0; index < p.length; index++) {
         
        result= result+p[index]
    }
    return result
    
}

alert(`the sum of numbers is ${sum(inputarray)}`)