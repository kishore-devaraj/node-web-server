const express = require('express')
const hbs = require('hbs')
const fs = require('fs')

const port = process.env.PORT || 3000

const app = express()

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
})
hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase()
})
// Setting config to the express app
app.set('viewengine','hbs')

// Middlewares
app.use((req, res, next) => {
  let now = Date(Date.now())
  let log = `${now.toString()} ${req.method} ${req.originalUrl}`
  console.log(log)
  fs.appendFile('logs/incomingRequest.log', log + '\n', (err) => {
    if(err) {
      console.log('Unable to append to the file')
    }
  } )
  next()
})

// app.use((req, res, next) => {
//   res.render('maintenance.hbs')
// })

app.use(express.static(__dirname + '/public')) // To Deliver static assets and contents


app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my Page'
  })
})

app.get('/about', (req, res) => {
  res.render('about.hbs',{
    pageTitle: 'About Page',
  })
})

app.listen(port, () => {
  console.log('Express Server running at 3000')
})