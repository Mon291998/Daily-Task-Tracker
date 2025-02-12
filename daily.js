const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-btn");
const errorText = document.getElementById("error-message");
const loginContainer = document.getElementById("login-page");
const todoContainer = document.getElementById("todo-page");

const todoInputField = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo-btn");
const todoListElement = document.getElementById("todo-list");

const setUsernameInput = document.getElementById("set-username");
const setPasswordInput = document.getElementById("set-password");
const saveCredentialsButton = document.getElementById("save-credentials");

function loadCredentials() {
  return {
    username: localStorage.getItem("username") || "mrunali",
    password: localStorage.getItem("password") || "4919",
  };
}

function saveCredentials() {
  const newUsername = setUsernameInput.value;
  const newPassword = setPasswordInput.value;

  if (newUsername && newPassword) {
    localStorage.setItem("username", newUsername);
    localStorage.setItem("password", newPassword);
    alert("Credentials updated successfully!");
  } else {
    alert("Please enter both username and password.");
  }
}

function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const storedCredentials = loadCredentials();

  if (
    username === storedCredentials.username &&
    password === storedCredentials.password
  ) {
    showTodoPage();
  } else {
    displayError("Invalid username or password");
  }
}

function showTodoPage() {
  loginContainer.style.display = "none";
  todoContainer.style.display = "block";
}

function displayError(message) {
  errorText.textContent = message;
}

// To-Do List functionality
function handleAddTodo() {
  const todoText = todoInputField.value.trim();
  if (todoText !== "") {
    const todoItem = createTodoItem(todoText);
    todoListElement.appendChild(todoItem);
    todoInputField.value = "";
  }
}

function createTodoItem(text) {
  const todoItem = document.createElement("li");
  todoItem.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn">Delete</button>
    `;
  return todoItem;
}

function handleDeleteTodo(event) {
  if (event.target.classList.contains("delete-btn")) {
    const todoItem = event.target.parentNode;
    todoListElement.removeChild(todoItem);
  }
}

// Add event listeners
loginButton.addEventListener("click", handleLogin);
addTodoButton.addEventListener("click", handleAddTodo);
todoListElement.addEventListener("click", handleDeleteTodo);
saveCredentialsButton.addEventListener("click", saveCredentials);
