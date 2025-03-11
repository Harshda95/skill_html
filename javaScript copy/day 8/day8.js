
const arr = [];
let i=1
let input = document.getElementById('element');

document.getElementById("btn").addEventListener("click", () => {
    let msg = document.getElementById("output");

    if (input.value.trim() !== "") {
        arr.push(input.value); 
        msg.textContent= arr.join(" ") 
        
        input.value = ""; 
    document.getElementById("pra").textContent=`You added ${i} new elements`

    i++
    }
}


);
