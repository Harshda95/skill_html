document.addEventListener("DOMContentLoaded", function () {
    let input = document.querySelector("#taskInput");
    let btn = document.querySelector("#addTaskBtn");
    let taskList = document.querySelector("#taskList");
    let completeTask = document.querySelector("#compltedTask");
    let selectedDate = null;
    let tasks = JSON.parse(localStorage.getItem("tasks")) || {};
    let dateDisplay = document.createElement("h3");
    dateDisplay.style.color = "red";

    document.querySelector(".container").insertBefore(dateDisplay, taskList);

    let dateSelectionContainer = document.createElement("div");
    dateSelectionContainer.id = "dateSelectionContainer";
    document.querySelector(".calendar-container").appendChild(dateSelectionContainer);

    // Handling Month Selection
    document.querySelectorAll(".month-btn").forEach(button => {
        button.addEventListener("click", function () {
            let month = this.getAttribute("data-month");
            let currentYear = new Date().getFullYear();
            let firstDayOfMonth = `${currentYear}-${String(parseInt(month) + 1).padStart(2, "0")}-01`;

            // Clear previous month's dates
            dateSelectionContainer.innerHTML = "";

            selectedDate = firstDayOfMonth;
            dateDisplay.textContent = `📅 Tasks for: ${selectedDate}`;

            let daysInMonth = new Date(currentYear, parseInt(month) + 1, 0).getDate();
            let dateSelection = document.createElement("div");
           

            
            dateSelection.innerHTML = `<h3>Select a Date in ${this.innerText}</h3>`;
            dateSelection.style.marginTop="60px"
            

            for (let day = 1; day <= daysInMonth; day++) {
                let dateBtn = document.createElement("button");
                dateBtn.textContent = day;
                dateBtn.style.margin = "6px";
                dateBtn.addEventListener("click", () => {
                    selectedDate = `${currentYear}-${String(parseInt(month) + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                    dateDisplay.textContent = `📅 Tasks for: ${selectedDate}`;
                    loadTasksForDate(selectedDate);
                });
                dateSelection.appendChild(dateBtn);
            }

            dateSelectionContainer.appendChild(dateSelection);
            loadTasksForDate(selectedDate);
        });
    });

   

    function loadTasksForDate(date) {
        taskList.innerHTML = "";
        completeTask.innerHTML = "";
        let dayTasks = tasks[date] || { pending: [], completed: [] };

        dayTasks.pending.forEach(task => addTaskToList(task, date, false));
        dayTasks.completed.forEach(task => addTaskToList(task, date, true));

        displayPendingTasks();
    }

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function addTaskToList(taskText, date, isCompleted) {
        let li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText} (${date})</span>
            ${!isCompleted ? `<button class="complete-btn">✔</button>` : ""}
            <button class="delete-btn">❌</button>
        `;

        if (isCompleted) {
            li.classList.add("completed");
            completeTask.appendChild(li);
        } else {
            taskList.appendChild(li);
        }

        if (!isCompleted) {
            li.querySelector(".complete-btn").addEventListener("click", () => {
                markTaskAsCompleted(taskText, date, li);
            });
        }

        li.querySelector(".delete-btn").addEventListener("click", () => {
            deleteTask(taskText, date, li);
        });
    }

    function markTaskAsCompleted(taskText, date, li) {
        li.classList.add("completed");
        completeTask.appendChild(li);
        li.querySelector(".complete-btn").remove();

        tasks[date].pending = tasks[date].pending.filter(t => t !== taskText);
        tasks[date].completed.push(taskText);
        saveTasks();
        displayPendingTasks();
    }

    function deleteTask(taskText, date, li) {
        li.remove();
        tasks[date].pending = tasks[date].pending.filter(t => t !== taskText);
        tasks[date].completed = tasks[date].completed.filter(t => t !== taskText);
        saveTasks();
        displayPendingTasks();
    }

    btn.addEventListener("click", () => {
        let taskText = input.value.trim();
        if (!taskText || !selectedDate) {
            alert("Please select a date before adding a task.");
            return;
        }

        if (!tasks[selectedDate]) {
            tasks[selectedDate] = { pending: [], completed: [] };
        }

        tasks[selectedDate].pending.push(taskText);
        saveTasks();
        addTaskToList(taskText, selectedDate, false);
        input.value = "";
        displayPendingTasks();
    });

    function displayPendingTasks() {
        taskList.innerHTML = "";
        for (let date in tasks) {
            tasks[date].pending.forEach(task => {
                let li = document.createElement("li");
                li.innerHTML = `📅 ${date}: ${task} 
                    <button class="complete-btn">✔</button>
                    <button class="delete-btn">❌</button>`;

                li.querySelector(".complete-btn").addEventListener("click", () => {
                    markTaskAsCompleted(task, date, li);
                });

                li.querySelector(".delete-btn").addEventListener("click", () => {
                    deleteTask(task, date, li);
                });

                taskList.appendChild(li);
            });
        }
    }

    function updateTasksDaily() {
        let today = new Date().toISOString().split("T")[0];
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        let yesterdayStr = yesterday.toISOString().split("T")[0];

        if (tasks[yesterdayStr]) {
            if (!tasks[today]) tasks[today] = { pending: [], completed: [] };
            tasks[today].pending.push(...tasks[yesterdayStr].pending);
            delete tasks[yesterdayStr];
            saveTasks();
        }
    }

    updateTasksDaily();
    displayPendingTasks();

    document.querySelector("#theme").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});

