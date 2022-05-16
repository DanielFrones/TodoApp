const form = document.getElementById("new-task-form");
const input = document.getElementById("new-task-input");
const task = document.getElementById("tasks");

//getTasks
const getTasks = () => {
    let allTasks = localStorage.getItem("taskList") /*tasklist heter listan i storage*/
    allTasks = allTasks.split(","); /*SPlita upp för att få array av items istället för string */
    console.log(allTasks) /*För varje element du hittar (foraech)*/
    if(allTasks != ""){
     /*för varje element du hittar bygg ett block av detta*/
     /*.map använder sig utav foreach elem, i-funktionalitet*/
    task.innerHTML = allTasks.map((element, index) => `
    <div class="task">
    <div class="content">
    <input class="text" type="text" readonly="readonly" value="${element}">
    </div>
    <div class="actions">
    <button class="delete" onclick="deleteTask(${index})">Delete</button> 
    </div>
    </div>
    `).join("") /*join tar bort kommatecken  i task presentationen*/ /* Index för att kunna koppla varje item till ett index för att kunan ta bort det*/

}
else{
    task.innerHTML = `<div class="no-tasks-found">
    <h2>No tasks found</h2>
    </div>
    
    `;
}
};

//addTasks

const addTask = (task) => {

    let allTasks = localStorage.getItem("taskList"); // Hämtar alla element i localStorage
  
    allTasks = allTasks ? allTasks.split(",") : []; // Om allTasks är tomt så skapar vi en tom array
  
    allTasks.push(task); // Lägger till task i slutet av arrayen
  
    localStorage.setItem("taskList", allTasks); // Sparar alla element till localStorage
  // skriver över taskList med den nya arrayen
  };

//deleteTask
const deleteTask = (index) => {
    let allTasks = localStorage.getItem("taskList") //Hämtar alla element i localStorage.
    allTasks = allTasks.split(",") //Delar upp textsträngen till en array av strängar
    allTasks.splice(index, 1) //
    localStorage.setItem("taskList", allTasks)
    getTasks();

}


// Form submit
form.onsubmit = (event) => {
    event.preventDefault();
    const task = input.value;
    addTask(task);
    getTasks();
    form.reset();
};

window.onload = getTasks;
// window är webläsaren.
//vid klick skapas eventet.

