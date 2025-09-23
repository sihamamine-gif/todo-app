const todos = [];

function addTodo(text) {
  if (!text) throw new Error('Todo text required');
  const id = todos.length + 1;
  const item = { id, text };
  todos.push(item);
  return item;
}

function getTodos() {
  return todos.slice();
}

module.exports = { addTodo, getTodos };
