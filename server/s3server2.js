const express = require('express')
const cors = require('cors')
const multer = require('multer')
const AwsClient = require('./awsClient.js')
const upload = multer({})
const app = express()
app.use(express.static('public'))
app.use(cors({origin:true,credentials: true}));


app.get('/v2/files', (req, res) => {
  const s3 = new AwsClient.AWS.S3({})
  s3.listObjectsV2({Bucket: 'glitchify-bucket'}, (err, data) => {
    if (err) console.log(err)

    res.send(data.Contents)
  })
})

app.post('/v2/upload', upload.single('file'), (req, res) => {
  console.log('post form data', req)
  try {
    const s3 = new AwsClient.AWS.S3({})
    const fileName = `${req.file.originalname}`
    let uploadParams = {Key: fileName, Bucket: 'glitchify-bucket', Body: req.file.buffer}
    s3.upload(uploadParams, (err, data) => {
      if (err) console.log(err)
      res.sendStatus(201)
    })
  } catch (error) {
    res.send(error)
    console.log(error)
  }
  // res.redirect('/gallery')

})

app.delete('/v2/delete', async(req, res) => {

  const filename = req.query.filename
  const s3 = new AwsClient.AWS.S3({})

  let r = s3.deleteObject({Bucket: 'glitchify-bucket', Key: filename}).promise()
  .then(res.send("file deleted"))

})

app.listen(3001, ()=> {
  console.log('connected to server S3 server on port 3001')
})

