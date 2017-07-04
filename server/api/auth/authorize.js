const verifyToken = require('./verifyToken');

function authorize(authorizedScopes) {
  return function(req, res, next) {
    const authorizationHeader = req.get('Authorization');
    if(!authorizationHeader) { next(new Error()); return; }

    const token = authorizationHeader.replace('Bearer ', '');
    if(!token) { next(new Error()); return; }

    verifyToken(token, (err, claims) => {
      if(err) { next(err); return; }

      const availableScopes = claims.scopes;

      console.log('authorizedScopes:', authorizedScopes);
      console.log('availableScopes:', availableScopes);

      let authorized = false;

      authorizedScopes.forEach((authorizedScope) => {
        authorized = availableScopes.indexOf(authorizedScope) >= 0 || authorized;
      });

      if(!authorized) { next(new Error()); return; }

      req.claims = claims;
      next();
    });
  }
}

module.exports = authorize;
