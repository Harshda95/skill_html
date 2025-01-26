console.log("passwoed")
let password = prompt("enter the password")
if(password.length<8){
    alert("please at least 8 characters")
   
}

 else if (!/[A-Z]/.test(password)) {
    alert("please enter at least a uppper case")
  
    
} 
 else if( !/[0-9]/.test(password)){
    alert("please enter at least a  digit")
   

}
else {
    alert("your password submitted sucessfully")
    
}