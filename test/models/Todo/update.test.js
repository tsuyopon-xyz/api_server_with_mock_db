const assert = require('power-assert');
const Todo = require('../../../models/Todo');

describe('Todo.update', () => {
  it('Todo.updateはメソッドである', () => {
    assert.equal(typeof Todo.update === 'function', true);
  });

  it('メソッド実行時、引数にidプロパティ値(1以上の数値)を含むオブジェクトが無いとエラーになる', () => {
    const invalidDataList = [
      {},
      {id: 0},
      {id: -1},
      {id: null},
      {id: {}},
      {id: []},
      {id: '1'}
    ];

    invalidDataList.forEach(data => {
      try {
        Todo.update(data);
        assert.fail();
      } catch (error) {
        assert.equal(error.message, 'idは必須です(1以上の数値)');
      }
    });
  });

  it('メソッド実行時、引数にtitleプロパティを含むオブジェクトが無いとエラーになる', () => {
    try {
      Todo.update({id: 1, body: 'body'});
      assert.fail();
    } catch (error) {
      assert.equal(error.message, 'titleは必須です');
    }
  });

  it('メソッド実行時、引数にbodyプロパティを含むオブジェクトが無いとエラーになる', () => {
    try {
      Todo.update({id: 1, title: 'title'});
      assert.fail();
    } catch (error) {
      assert.equal(error.message, 'bodyは必須です');
    }
  });

  it('メソッド実行時、idに紐づくデータが無いとエラーになる', () => {
    const notExistedId = 9999999;
    try {
      Todo.update({
        id: notExistedId,
        title: 'title',
        body: 'body'
      });
      assert.fail();
    } catch (error) {
      assert.equal(error.message, 'idに該当するtodoが存在しません');
    }
  });

  it('メソッド実行時、正しい引数をわたすとidに該当する既存Todoを更新して、更新したTodoを返す', () => {
    const data = {
      id: 1,
      title: '更新後のtitle',
      body: '更新後のbody'
    };

    const updatedTodo = Todo.update(data);
    assert.deepEqual(updatedTodo, {
      id: updatedTodo.id,
      title: data.title,
      body: data.body,
      createdAt: updatedTodo.createdAt,
      updatedAt: updatedTodo.updatedAt
    });

    const currentTodos = Todo.findAll();
    assert.deepEqual(currentTodos[0], updatedTodo);
    assert.equal(updatedTodo.updatedAt > updatedTodo.createdAt, true);
  });
});