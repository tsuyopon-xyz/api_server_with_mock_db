const request = require('supertest');
const assert = require('power-assert');
const app = require('../../../../app');

describe('test 「GET /api/todos」', () => {
  it('returns todos in resopnse.body', async () => {
    // 詳しくはsupertestのドキュメントを参考にする
    const response = await request(app)
      .get('/api/todos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /application\/json/)
      .expect(200);

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