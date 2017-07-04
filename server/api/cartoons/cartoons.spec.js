const app = require('../../app')();
const request = require('supertest');
const generateToken = require('../auth/generateToken');

describe('/api/v1/cartoons', function() {
  let token;
  before(function(done) {
    generateToken({username: 'foo', scopes: ['cartoons:read']}, (err, generatedToken) => {
      if(err) { done(err); return; }
      token = generatedToken;
      done();
    });
  })

  it('should return a cartoon', function(done) {
    request(app)
      .get('/api/v1/cartoons')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if(err) { done(err); return; }
        res.body.should.be.instanceOf(Array).and.have.lengthOf(2);
        done(err);
      });
  });
});
