const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('<h4>Hello Express</h4>')
})

app.listen(3000, () => {
  console.log('Express Server running at 3000')
})