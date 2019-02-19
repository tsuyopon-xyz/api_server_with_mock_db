const express = require('express');
const todosRouter = require('./routers/todos');
const app = express();
const PORT = 8080;

app.use('/api/todos', todosRouter);

app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}`);
});