 let input=document.querySelector("#taskInput");

 let btn=document.querySelector("#addTaskBtn");

  let task=document.querySelector("#taskList");
  
  let completeTask =document.querySelector("#compltedTask"); 


  btn.addEventListener("click" , () =>{
  
    let input = document.querySelector("#taskInput").value.trim();
    if (input === "") return;

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${input}</span>
        <button class="complete-btn">✔</button>
        <button class="delete-btn">❌</button>
    `;

    task.appendChild(li);
    document.querySelector("#taskInput").value = "";

    li.querySelector(".complete-btn").addEventListener("click", () => {
        li.classList.add("completed");
        completeTask.appendChild(li);
        li.querySelector(".complete-btn").remove();
    });

    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
    });
   
  })

  document.querySelector("#theme").addEventListener("click", () => {
    let theme = document.querySelector("body");
    theme.classList.toggle("dark-mode");
});