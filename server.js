const express = require('express')

const app = express()

// Middlewares
app.use(express.static(__dirname + '/public')) // To Deliver static assets and contents

app.get('/', (req, res) => {
  res.send('<h4>Hello Express</h4>')
})

app.get('/json', (req, res) => {
  res.send({
    'name': 'kishore',
    'career': 'full stack web developer'
  })
})

app.listen(3000, () => {
  console.log('Express Server running at 3000')
})