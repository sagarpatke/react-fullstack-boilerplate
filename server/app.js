const express = require('express');

function generateApp(inputApp) {
  const app = inputApp || express();

  app.use(require('./api'));
  
  return app;
}

module.exports = generateApp;
