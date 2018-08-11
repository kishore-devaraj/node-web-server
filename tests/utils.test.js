let utils = require('../utils/utils')
let expect = require('expect')

describe('Basic Utils test', () => {
  
  describe('Cube of the number', () => {
    it('should be cube of the number', () => {
      let cube = utils.cube(3)
      if(cube !== 27) throw new Error(`Expected 27 got ${cube}`)
    })
  })
  
  
  it('the firstName and lastName should be added', () => {
    let user = {
      'age' : 23,
      'location': 'Chennai'
    }
    expect(utils.setName(user, 'Kishore Devaraj')).toIncludeKeys(['firstName', 'lastName'])
    expect(utils.setName(user, 'Kishore Devaraj')).toInclude({
      'firstName': 'Kishore',
      'lastName': 'Devaraj'
    })
  })
  
  // Test for Async function
  it('Adding two numbers via Async method', (done) => {
    utils.addAsync(3, 4, (res) => {
      expect(res).toBe(7).toBeA('number')
      done()
    })
  })
  
})


// it('checking expect api with examples', () => {
//   expect(3).toBe(3)
//   expect(2).toNotBe(3)
//   expect({
//     'user': 'kishore',
//     'age': 23
//   }).toEqual({
//     'user': 'kishore',
//     'age': 23
//   })
//   expect([3,4,5,6]).toExclude(9)
//   expect({
//     'user': 'kishore',
//     'age': 23
//   }).toIncludeKey('age')

//   expect({
//     'user': 'kishore',
//     'age': 23
//   }).toInclude({
//     'age' : 23
//   })
// })
