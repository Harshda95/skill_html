

let user = document.getElementById("password")

document.getElementById("btn").addEventListener( "click", () =>{
    let password = user.value;
    let msg = document.getElementById("output")
    let submitBtn=document.getElementById("btn")
 if (password.length < 8) {
    msg.textContent="password must have 8 characters"
    msg.style.color="red"
   submitBtn.style.backgroundColor="red"
    
 }

 else if (!/[A-Z]/.test(password)) {
    msg.textContent="password have at least one upppercase Character"
    msg.style.color="red"
    submitBtn.style.backgroundColor="red"
    
 } 
 else if(!/[0-9]/.test(password)) {
    msg.textContent="password must have atleast ome no."
    msg.style.color="red"
    submitBtn.style.backgroundColor="red"
    
 }
 
 
 else {
    msg.textContent="password is valid "
    msg.style.color="Green"
    submitBtn.style.backgroundColor="green"
    alert("password is submitted") 
 }


})