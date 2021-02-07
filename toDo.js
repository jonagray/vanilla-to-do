// function to add a new task
const addTask = () => {
  const task = document.querySelector('form input');
  const list = document.querySelector('ul');
  if (task.value === "") {
    alert("Please add a task!");
    return;
  }
  const li = document.createElement('li');
  li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)">
                  <span>${task.value}</span>
                  <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
  list.insertBefore(li, list.children[0]);
  task.value = "";
}

// function to mark a task complete
const taskComplete = (e) => {
  e.nextElementSibling.classList.toggle("complete");
}

// function to delete the task once completed
const removeTask = (e) => {
  e.parentElement.remove();
}