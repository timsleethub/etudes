let state = {
  todosList: [],
}


function createLogo() {
  return `<div class="todo-list__title">
            <h1 class="todos-title">todos</h1>
          </div>`
}


function createToDosList(todos) {
  return `<ul class="form__list" id="todos">
            ${todos}
          </ul>`
}


function createForm(list) {
  return `<form id="form" class="form">
            <input type="text" id="input" class="form__input" placeholder="Enter your todo" autocomplete="off" />
              ${list}
          </form>`
}


function bodyWrapper(logo, form) {
  return `<div class="todo-list">
      ${logo}
      <div class="todo-list__form-and-list">
        ${form}
      </div>
      <div class="todo-list__annotation">
        <small>Left click to mark as completed, right click to delete.</small>
      </div>`
}


function createTodo(state, prop) {
  const todos = state[prop];
  return todos.map((todo) => {
    return `<li>${todo}</li>`;
  }).join('');
}


function renderApp(state) {
  const appRoot = document.querySelector('.app-root');
  const logo = createLogo();
  const todoEl = createTodo(state, 'todosList');
  const todosList = createToDosList(todoEl);
  const form = createForm(todosList);
  appRoot.innerHTML = bodyWrapper(logo, form);
}


function getState() {
  return state;
}





function toDoAdd(form, state) {
  return form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todoText = input.value;
    if(todoText) {
      state.todosList.push(todoText);
    }
    input.value = '';

    startUI(state);
  })
}

function markAsCompleted(form, state) {
  return form.addEventListener('click', )
}


function startUI(state) {
  renderApp(state);
  toDoAdd(document.querySelector('.form'), state);
}

startUI(state);



