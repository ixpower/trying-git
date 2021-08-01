const express   = require('express')
const app       = express()
const hostname  = process.env.HOSTNAME || "localhost"
const port      = process.env.PORT || 3000
require('dotenv').config



app.get('/', (req, res) => {
    res.send('hello')
})





app.listen(port, hostname, () => console.log(`APP STARTED : ${hostname}:${port}`))