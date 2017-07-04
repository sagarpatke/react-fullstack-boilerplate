const app = require('express').Router();
const path = require('path');

const jsonServer = require('json-server');
const router = jsonServer.router(path.join(__dirname, '..', 'db.json'));

app.use(require('body-parser').json());

app.use('/auth/v1', require('./auth'));
app.use('/api/v1', router);

module.exports = app;
