// ここにTodoデータを追加していく
const todos = [];
// TodoのID値として利用
// Todoを作成するたびにインクリメントして、値が重複しないようにする
let nextId = 1;

// ダミーDBに格納する1件毎のデータ構造
class Todo {
  constructor({title, body}) {
    this.id = nextId++;
    this.title = title;
    this.body = body;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

// データを事前に5件ほどダミーのDBに追加しておく
for (let i = 0; i < 5; i++) {
  const todo = new Todo({
    title: 'タイトル' + i,
    body: '詳細文' + i,
  });
  todos.push(todo);
}

// ここより上は、プライベート空間。つまり、外部ファイルから直接アクセスできない

// ここにCRUD機能をつける
module.exports = {
  findAll: () => {
    return todos.slice();
  },
  create: ({title, body}) => {
    if (!title) {
      throw new Error('titleは必須です');
    }
    if (!body) {
      throw new Error('bodyは必須です');
    }

    const todo = new Todo({
      title: title,
      body: body,
    });
    todos.push(todo);

    return todo;
  }
};
