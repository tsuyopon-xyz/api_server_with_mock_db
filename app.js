const express = require('express');
const todosRouter = require('./routers/todos');
const app = express();

app.use('/api/todos', todosRouter);

module.exports = app;