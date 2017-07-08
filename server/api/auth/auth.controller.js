const {users} = require('../../config');
const generateToken = require('./generateToken');

function authenticate(req, res, next) {
  console.log('HERE');
  const username = req.body.username;
  const password = req.body.password;

  if(!users[username]) { res.status(403).json({message: 'Unauthorized'}); return; }
  if(users[username].password !== password) { res.status(403).json({message: 'Unauthorized'}); return; }

  const scopes = users[username].scopes;

  generateToken({username, scopes}, (err, token) => {
    if(err) { res.status(403).json({message: 'Unauthorized'}); return; }
    res.status(201).json({token});
  });
}

module.exports = {
  authenticate
}
