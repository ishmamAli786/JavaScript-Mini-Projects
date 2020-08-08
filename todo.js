var list=document.getElementById('list');
function addTodo(){
    //create li tag with text node
    var todo_item=document.getElementById('todo-item');
    var text=document.createElement('li');
    var liText=document.createTextNode(todo_item.value);
    ///create delete button tag with text node
    var delBtn=document.createElement('button');
    var btnText=document.createTextNode('DELETE');
    delBtn.appendChild(btnText);
    text.appendChild(delBtn);
    delBtn.setAttribute("class","btn");
    delBtn.setAttribute("onclick","deleteItem(this)")
    //create Edit button
    var editBtn=document.createElement('button');
    var editText=document.createTextNode('EDIT');
    editBtn.appendChild(editText);
text.appendChild(liText);
list.appendChild(text);
list.appendChild(editBtn);
editBtn.setAttribute("onclick","editItem(this)")
console.log(text);
todo_item.value="";
    
}
function deleteItem(e){
    console.log(e.parentNode.remove());
}
function deleteAll(){
    list.innerHTML="";
}
function editItem(e){
    var val=e.parentNode.firstChild.nodeValue;
    var editValue=prompt("enter Edit Value",val);
    console.log(e.parentNode.firstChild)
    val=editValue;

}