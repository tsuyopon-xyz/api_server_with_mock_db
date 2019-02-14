const assert = require('power-assert');
const Todo = require('../../../models/Todo');

describe('Todo.findAll', () => {
  it('Todo.findAllはメソッドである', () => {
    assert.equal(typeof Todo.findAll === 'function', true);
  });

  it('決められたデータ構造でデータが格納されている', () => {
    const todos = Todo.findAll();
    assert.equal(Array.isArray(todos), true);
    assert.equal(todos.length > 0, true);
    todos.forEach(todo => {
      assert.deepEqual(todo, {
        id: todo.id,
        title: todo.title,
        body: todo.body,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt,
      });
    });
  });
});