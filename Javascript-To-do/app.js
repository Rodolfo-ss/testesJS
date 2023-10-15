const formAdd = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSeach = document.querySelector('.form-search input')

const addTodo = inputValue => {
  if (inputValue.length) {

    todosContainer.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center" data-time="${inputValue}">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt" data-lixo="${inputValue}"></i>
      </li>`

    event.target.reset()
  }
}


formAdd.addEventListener('submit', event => {
  event.preventDefault()

  const inputValue = event.target.add.value.trim()

  addTodo(inputValue)
})


const removeTodo = clickedElement => {
  const lixoElement = clickedElement.dataset.lixo
  const inRemove = document.querySelector(`[data-time="${lixoElement}"]`)

  if (lixoElement) {
    inRemove.remove()
  }
}


todosContainer.addEventListener('click', event => {
  const clickedElement = event.target
  removeTodo(clickedElement)

  // if(Array.from(clickedElement.classList).includes('delete')) {
  //   clickedElement.dataset.time
  // }
})

const filterTodos = (todos, inputValue, returnMath) =>  todos
    .filter(todo => {
      const returnTodos = todo.textContent.toLowerCase().includes(inputValue)
      return returnMath ? returnTodos : !removeTodo
      })   


const manipulateClasses = (todos, classAdd, classRemove) => {
  todos.forEach(todo => {
    todo.classList.remove(classRemove)
    todo.classList.add(classAdd)
  })
}



const hideTodos = (todos, inputValue) => {
  const todoHide = filterTodos(todos, inputValue, false)
  manipulateClasses(todoHide, 'hidden', 'd-flex')
}


const showTodos = (todos, inputValue) => {
  const todosShow  = filterTodos(todos, inputValue, true)
  manipulateClasses(todosShow, 'd-flex', 'hidden')
}



inputSeach.addEventListener('input', event => {
  const inputValue = event.target.value.trim()
  const todos = Array.from(todosContainer.children)

  hideTodos(todos, inputValue)

  showTodos(todos, inputValue)

})



const person = {
  name: 'Luiz', 
  getName: () => {
    console.log(this)
    this.name
  } 
}

console.log(person.name);