const express = require('express')
const morgan = require('morgan');
const headphoneRoutes = require('./src/routes/headphoneRoutes')
const speakerRoutes = require('./src/routes/speakerRoutes')
const earphoneController = require('./src/routes/earphoneRoutes')
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
app.use('/speakers', speakerRoutes);
app.use('/earphones', earphoneController);


module.exports = app;