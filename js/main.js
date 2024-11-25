const tasks = [
    
    {
        title: "Créer mon compte Github",
        priority: 2
    },
    {
        title: "Apprendre mon cours de JavaScript",
        priority: 1
    },
    {
        title: "Répondre à mes emails",
        priority: 3
    }
];
tasks.sort((a,b)=>a.priority-b.priority)
const listToDo= JSON.parse(localStorage.getItem("list"))
localStorage.setItem("list", JSON.stringify(listToDo ?? tasks));

let selectedPriority = "1";

const toDos = document.getElementById("toDoList");

const list = listToDo.forEach((element) => {
   

    const li = document.createElement("li")
    const label = document.createElement("label")

    const input = document.createElement("input")
    input.type = "checkbox"
    label.innerHTML = element.title
    label.appendChild(input)
    li.appendChild(label)

    toDos.appendChild(li)

    label.classList.add(`priority-${element.priority}`, 'reverse-check-box');
});
const selectPriority = () => {
    selectedPriority = document.getElementById("task-priority").value;
}

const addToDo = () => {
    const li = document.createElement("li")
    const label = document.createElement("label")

    const input = document.createElement("input")
    input.type = "checkbox"
    const name = document.getElementById("task-name").value

    label.innerHTML = name
    label.appendChild(input)
    li.appendChild(label)

    toDos.appendChild(li)

    label.classList.add(`priority-${selectedPriority}`);
    listToDo.push({title:name,priority:selectedPriority})
    listToDo.sort((a,b)=>a.priority-b.priority)
    localStorage.setItem("list", JSON.stringify(listToDo));
    document.getElementById("task-name").value="";
    document.getElementById("toDoList").remove()
    const ul= document.createElement('ul')
    ul.setAttribute('id','toDoList')
    document.getElementById("task-list").appendChild(ul)
    const newToDoList=document.getElementById("toDoList")
    console.log(newToDoList);
    
    listToDo.forEach((element) => {
   

        const li = document.createElement("li")
        const label = document.createElement("label")
    
        const input = document.createElement("input")
        input.type = "checkbox"
        label.innerHTML = element.title
        label.appendChild(input)
        li.appendChild(label)
    
        newToDoList.appendChild(li)
    
        
    });


}


const deleteToDo = () => {
    const tasks=document.querySelectorAll("input[type='checkbox']")
    let counter = 0
    tasks.forEach((task)=>{
        if(task.checked){
            const label = task.parentElement
        label.parentElement.remove()
        counter++;
        }
    })
    alert(counter + " tâches supprimées avec succès")
    
}
