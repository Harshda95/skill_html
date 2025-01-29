let a = parseIntprompt("enter a no :")
let b = parseIntprompt("enter another no :")

if (a>b) {
    console.log("greatest no. is ")
    console.log(a)
}
else if (b>a) {
    console.log("greatest no is")
    console.log(b)
}
else {
    console.log("both no. is equal")
    
}

// question 2 multiple of  9 

let c=parseIntprompt("enter a no ")
if (c%9===0) {
    console.log("entered no. is multiple of 9")
} else {
    console.log("entered no. is not  multiple of 9")
}