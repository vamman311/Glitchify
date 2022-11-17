const express = require('express')
const cors = require('cors')
const multer = require('multer')
const AwsClient = require('./awsClient.js')
const upload = multer({})
const app = express()
const routes = require('./routes/routes.js')

app.use(express.static('public'))
app.use(cors({origin:true,credentials: true}));
app.use('/', routes)

app.listen(3001, ()=> {
  console.log('connected to server S3 server on port 3001')
})

