const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Mark complete toggle
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'X';
  removeBtn.className = 'remove-btn';
  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent toggle
    li.remove();
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);
  input.value = '';
});
