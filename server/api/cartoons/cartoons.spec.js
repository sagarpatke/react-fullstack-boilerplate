const app = require('../../app')();
const request = require('supertest');

describe('/api/v1/cartoons', function() {
  it('should return a cartoon', function(done) {
    request(app)
      .get('/api/v1/cartoons')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if(err) { done(err); return; }
        res.body.should.be.instanceOf(Array).and.have.lengthOf(2);
        done(err);
      });
  });
});
