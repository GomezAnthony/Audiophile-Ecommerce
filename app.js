const express = require('express')
const morgan = require('morgan');
const headphoneRoutes = require('./src/routes/headphoneRoutes')

const app = express()

// Static Files and Middleware
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use(morgan('dev'));

// Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
   res.render('index', {title: 'Audiophile'})
})

app.use('/headphones', headphoneRoutes);

app.get('/speakers', (req, res) => {
   res.render('speakers')
})

app.get('/earphones', (req, res) => {
   res.render('earphones')
})

module.exports = app;