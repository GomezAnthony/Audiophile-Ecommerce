const express = require('express')

const app = express()
const PORT = 3000

//  Listen on port 5000
app.listen(PORT, () => {
   console.log(`Listening on ${PORT}`)
})