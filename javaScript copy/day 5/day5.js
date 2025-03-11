let targetNumber = Math.floor(Math.random() * 10) + 1; 
  
  let targetDiv = document.querySelector("#main");
  let i=1 

  document.getElementById("submitBtn").addEventListener("click", () => {
    const resultMessage = document.getElementById("resultMessage");
    
      
      let userInput = parseInt(document.getElementById("userInput").value, 10);
        
      if (userInput === targetNumber) {
        let img = document.createElement("img");
        img.src = "https://i.pinimg.com/236x/85/65/02/856502a5f264883834fb0707fa68b4f6.jpg";
        img.alt = "Trophy";
        img.style.width = "100px";
        targetDiv.innerHTML = ""; 
        targetDiv.appendChild(img); 
        resultMessage.textContent = "🎉 Correct! You win!";
        resultMessage.style.color = "green";
        flag = 0;
        
      } else {
        resultMessage.textContent = `❌ Incorrect ${i} times. Try again!n  `;
        resultMessage.style.color = "red";
        i++
         
      }
    
  });