/* const listContainer = document.querySelector('[data-lists]');

let lists = [{
    
}]; 
function render() {
    <li class="list-name">Data Structures and Algorithms</li>
    clearElement(listContainer);
    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.classList.add('list-name');
        listElement.innerText = list
        listContainer.appendChild(listElement);
    })
}

function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}
 */

const inpKey  = document.getElementById("inpKey");
const btnInsert = document.getElementById("btnInsert");
const btnRemove = document.getElementById("btnRemove");
const task_list = document.getElementById("task_list");
btnInsert.onclick = function() {
    const key = inpKey.value;
    console.log(key);

    if(key) {
        localStorage.setItem(key, inpKey.value);
        location.reload();
    }
}

 for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    task_list.innerHTML += `<div> ${key}</div>`
}

task_list.onclick = function(e) { 
    for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if( key == e.target.innerText){
    window.localStorage.removeItem(key);
    e.target.remove();
    } 
}
} 
