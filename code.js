const buttonAdd = document.getElementById("button-add");
const todoList = document.getElementById("list-todo");


function li(text) {
    const li = document.createElement("li");
    const textNode = document.createTextNode(text);
    li.appendChild(textNode);
    return li;
}


buttonAdd.addEventListener('click', function(event) {
    todoList.appendChild(li("Sanu"))
})