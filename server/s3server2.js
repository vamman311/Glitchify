const express = require('express')
const AwsClient = require('./awsClient.js')
const multer = require('multer')
const upload = multer({})
const app = express()

app.get('/v2/buckets', (req, res) => {
  const s3 = new AwsClient.AWS.S3({})
  s3.listBuckets((err, data) => {
    if (err) console.log(err)
    res.send(data.Buckets)
  })
})

app.post('/v2/upload', upload.single('file'), (req, res) => {
  try {
    const s3 = new AwsClient.AWS.S3({})
    const fileName = `${Date.now()}-${req.file.originalname}`
    let uploadParams = {Key: fileName, Bucket: 'glitchify-bucket', Body: req.file.buffer}
    s3.upload(uploadParams, (err, data) => {
      if (err) console.log(err)
      res.send('successful upload')
    })
  } catch (error) {
    res.send(error)
    console.log(error)
  }
})

app.listen(3001, ()=> {
  console.log('connected to server S3 server on port 3001')
})

