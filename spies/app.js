const db = require('./db')

module.exports.handleSignup = ((name, password) => {
  console.log('Hi from App')
  db.saveUser({
    name,
    password
  })
})