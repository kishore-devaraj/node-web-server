const express = require('express')
const hbs = require('hbs')

const app = express()

app.set('viewengine','hbs')

// Middlewares
app.use(express.static(__dirname + '/public')) // To Deliver static assets and contents


app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'Welcome to my Page'
  })
})

app.get('/about', (req, res) => {
  res.render('about.hbs',{
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  })
})

app.listen(3000, () => {
  console.log('Express Server running at 3000')
})