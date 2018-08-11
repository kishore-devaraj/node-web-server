const rewire = require('rewire')
const expect = require('expect')

const app = rewire('./app')

describe('App for Spies', () => {

  let db = {
    saveUser: expect.createSpy()
  }

  app.__set__('db',db)

  it('should call saveUser via spies',() => {
    let name = 'Kishore Devaraj'
    let password = 'password'
    app.handleSignup(name, password)
    expect(db.saveUser).toHaveBeenCalledWith({name, password})
  })

  it('should spy function be called', () => {
    let spy = expect.createSpy()
    spy()
    expect(spy).toHaveBeenCalled()
  })
})