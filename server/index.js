const express = require('express')
const path = require('path')
const app = express()
const port = 3001

app.use(express.static(path.join(__dirname, '../target')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../target/index.html')))

app.listen(port, () => console.log(`Listening on port: ${port}`))