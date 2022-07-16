const express = require('express')

const app = express()
const PORT = 3000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
   res.render('index')
})

app.get('/headphones', (req, res) => {
   res.render('headphones')
})

app.get('/speakers', (req, res) => {
   res.render('speakers')
})

app.get('/earphones', (req, res) => {
   res.render('earphones')
})


//  Listen on port 5000
app.listen(PORT, () => {
   console.log(`Listening on ${PORT}`)
})