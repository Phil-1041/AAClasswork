// let todos = JSON.parse(localStorage.getItem("todos")) || [];

let todos = []


function addTodo (){
  let todoClass = document.querySelector(".todos");
  let todoForm = document.querySelector(".add-todo-form");
  
  todoForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let todoObj = {};
    todoObj.value = document.querySelector('.add-todo').value;
    document.querySelector('.add-todo').value = "";
    todoObj.done = false;
    todos.push(todoObj);
    
    let retrieved = JSON.parse(localStorage.getItem("todos")) || []
    let output = retrieved.concat(todos);
    localStorage.setItem("todos", JSON.stringify(output));

    populateList(todos)
    // todos = [];
  })

}

// if the checkbox is checked, 
//    set "checked" "true"
// else
//    removed "checked" attribute
// update window.localStorage "todos"


function populateList (todosArgs){
  todosArgs = JSON.parse(localStorage.getItem("todos")) || [];

  let ul = document.querySelector('.todos');
  ul.innerHTML = ""; // reset
  //replace deleted code
  let temp = document.createElement('li')
  temp.innerText = "Add some Todos!";
  ul.appendChild(temp);

  todosArgs.forEach( (todo, i) =>{
    let label = document.createElement('label');
    label.innerText = todo.value;
      let input = document.createElement('input');
      input.type = 'checkbox';
      input.setAttribute('data-check', 'todo.done')

      //adds event listener --> she updates the local storage
      if(input.dataset.check === 'true') input//set the checkbox to checked
      let li = document.createElement('li');
      li.appendChild(input);
      li.appendChild(label);
      ul.appendChild(li);
  })
}

function addEvemt() {

  input.addEventListener('change', (e) => {

  })

  let cb = document.querySelector("")

}

populateList();
addTodo();