const assert = require('assert');
const { addTodo, getTodos } = require('../lib/todo');

addTodo('Buy milk');
assert.strictEqual(getTodos().length, 1, 'Il doit y avoir 1 todo après add');
assert.strictEqual(getTodos()[0].text, 'Buy milk', 'Le texte du todo doit être Buy milk');

console.log('Tests OK ✅');
