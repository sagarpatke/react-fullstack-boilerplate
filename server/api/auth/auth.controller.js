const {users} = require('../../config');
const generateToken = require('./generateToken');

function authenticate(req, res, next) {
  console.log('HERE');
  const username = req.body.username;
  const password = req.body.password;

  if(!users[username]) { next(new Error()); return; }
  if(users[username].password !== password) { next(new Error()); return; }

  const scopes = users[username].scopes;

  generateToken({username, scopes}, (err, token) => {
    if(err) { next(err); return; }
    res.status(201).json({token});
  });
}

module.exports = {
  authenticate
}
