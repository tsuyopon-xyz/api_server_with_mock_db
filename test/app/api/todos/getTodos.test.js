const assert = require('power-assert');
const requestHelper = require('../../../helper/requestHelper');

describe('test 「GET /api/todos」', () => {
  it('returns todos in resopnse.body', async () => {
    const response = await await requestHelper.request({
      method: 'get',
      endPoint: '/api/todos',
      statusCode: 200
    });

    const todos = response.body;
    assert.equal(Array.isArray(todos), true);
    todos.forEach((todo) => {
      assert.equal(typeof todo.id === 'number', true);
      assert.equal(typeof todo.title === 'string', true);
      assert.equal(typeof todo.body === 'string', true);
      assert.equal(typeof todo.createdAt === 'string', true);
      assert.equal(typeof todo.updatedAt === 'string', true);
    });
  });
});