const assert = require('power-assert');
const Todo = require('../../../models/Todo');

describe('Todo.remove', () => {
  it('Todo.removeはメソッドである', () => {
    assert.equal(typeof Todo.remove === 'function', true);
  });

  it('メソッド実行時、引数idの値が1以上の数値でないとエラーになる', () => {
    const invalidIdList = [
      0,
      -1,
      null,
      {},
      [],
      '1'
    ];

    invalidIdList.forEach(id => {
      try {
        Todo.remove(id);
        assert.fail();
      } catch (error) {
        assert.equal(error.message, 'idは必須です(1以上の数値)');
      }
    });
  });

  it('メソッド実行時、idに紐づくデータが無いとエラーになる', () => {
    const notExistedId = 9999999;
    try {
      Todo.remove(notExistedId);
      assert.fail();
    } catch (error) {
      assert.equal(error.message, 'idに該当するtodoが存在しません');
    }
  });

  it('メソッド実行時、正しいidをわたすとidに該当する既存Todoを削除して、削除したTodoを返す', () => {
    const oldTodos = Todo.findAll();
    const existedId = 3;

    const removedTodo = Todo.remove(existedId);
    assert.deepEqual(removedTodo, {
      id: existedId,
      title: removedTodo.title,
      body: removedTodo.body,
      createdAt: removedTodo.createdAt,
      updatedAt: removedTodo.updatedAt
    });

    const currentTodos = Todo.findAll();
    assert.equal(
      oldTodos.length,
      currentTodos.length + 1,
      'Todo.removeメソッドが成功した後はtodosの件数が1件少なくなっているはず'
    );
  });
});