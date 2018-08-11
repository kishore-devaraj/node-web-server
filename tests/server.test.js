const request = require('supertest')
const app = require('../server').app
const expect = require('expect')

it('Checking the express /test endpoints',(done) => {
  request(app)
  .get('/test')
  .expect(404)
  .expect(res => {
    expect(res.body).toInclude({'error': 'Page Not Found'})
  })
  .end(done)
}) 

it('Testing the user exists in the list of users',(done) => {
  request(app)
  .get('/users')
  .expect(200)
  .expect(res => {
    expect(res.body).toInclude({
      'user': 'Kishore Devaraj',
      'age': 23
    })
    expect(res.body[0]).toInclude({
      'user': 'Kishore Devaraj'
    })
  })
  .end(done)
})