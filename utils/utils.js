module.exports.cube = (x) => x * x * x

module.exports.setName = (user, fullName) => {
  let names = fullName.split(' ')
  user.firstName = names[0]
  user.lastName = names[1]
  return user
}

module.exports.addAsync = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b)
  },1000)
}

