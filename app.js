var list = document.getElementById('list');

function addTodo(){
    var todo_item = document.getElementById('todo-item');
    // li tag
    var li = document.createElement('li')
    var text = document.createTextNode(todo_item.value)
    li.appendChild(text)

    // delete Button

    var delBtn = document.createElement('button');
    var delText = document.createTextNode("Delete")
    delBtn.appendChild(delText)
    delBtn.setAttribute('onclick',"deleteItem(this)")
    li.appendChild(delBtn)

    // Edit Button
    var editBtn = document.createElement('button')
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
    editBtn.setAttribute('onclick',"editItem(this)")

    list.appendChild(li)
    
    console.log(li)
    todo_item.value = ""
}


function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){
    var editValue = prompt("Enter edit Value")
    e.parentNode.firstChild.nodeValue = editValue
}

function deleteAll(){
    list.innerHTML = ""
}