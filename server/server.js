const express = require('express')

const path = require('path')
const axios = require('axios')
const app = express()


app.use(express.static(path.join(__dirname, '../public')))

app.get('/hello', (req, res) => {
  res.send('hello')
})

app.listen(3001, () => {
  console.log('listening on port: 3001')
})