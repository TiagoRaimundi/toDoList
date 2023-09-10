const input = document.querySelector(".input-task")//Pegando do documento HTML
const button = document.querySelector(".button-add-task")
const AllList=document.querySelector('.List-task')

let myListItens= []

function addValueInput(){
    if (input.value.trim() === '') {
        alert('Por favor, insira uma tarefa válida!');
        return; // Sai da função sem adicionar o item
    }
    myListItens.push({
        task: input.value,
        completed: false
    })
    
    input.value = ''
    showTask()

}

function showTask(){

    let NewLi = ''
    myListItens.forEach((iten, position) =>{
        NewLi = NewLi + `

        <li class="task ${iten.completed && 'done'}">
  
            <img src="assets/checked.png" alt="checked" onclick="finishtask(${position})">
            <p>${iten.task}</p>
            <img src="assets/trash.png" alt="trash" onclick="remove(${position})">
        </li>
        `
    })

    AllList.innerHTML = NewLi
    localStorage.setItem('list', JSON.stringify(myListItens))




}

function finishtask(position){
    myListItens[position].completed = !myListItens[position].completed

    showTask()





}

function remove(position){
    myListItens.splice(position, 1)
    showTask()
    console.log("remove", position)
}
function reloadItens(){
    const taskLocalStorages = localStorage.getItem('list')
    if(taskLocalStorages){
        myListItens = JSON.parse (taskLocalStorages)
        
        showTask()
    }
  
    showTask()
}


button.addEventListener('click', addValueInput )//quando o botão ser clicado ele vai avisar e pegar o valor do button 