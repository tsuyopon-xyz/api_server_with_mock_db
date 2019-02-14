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

// ここより上は、プライベート空間。つまり、外部ファイルから直接アクセスできない

// ここにCRUD機能をつける
module.exports = {};