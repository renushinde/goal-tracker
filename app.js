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
    task_list.innerHTML += `${key}<br />`
}

task_list.onclick = function() { 
    for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    window.localStorage.removeItem(key);
    task_list.innerHTML = key; 
    } 
}