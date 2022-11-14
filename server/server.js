const express = require('express')
const fileUpload = require('express-fileupload');

const path = require('path')
const axios = require('axios')
const app = express()

app.use(fileUpload())
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json());


app.post('/upload', (req, res) => {
  if (req.files === undefined) {
    console.log('files still not here')
  }
  console.log(req.files)
  res.send('hellos')
})

app.listen(3001, () => {
  console.log('listening on port: 3001')
})