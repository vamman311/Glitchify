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

app.post('/v2/upload', upload.array('file'), (req, res) => {
  try {

    req.files.forEach(function(element, index){
      const s3 = new AwsClient.AWS.S3({})
      let count = 0
      let fileName = `${element.originalname}`
      let uploadParams = {Key: fileName, Bucket: 'glitchify-bucket', Body: element.buffer}
      s3.upload(uploadParams, (err, data) => {
        count++
        if (err) console.log(err)
        res.end()
        console.log('count', count)
      })

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

  return s3.deleteObject({Bucket: 'glitchify-bucket', Key: filename}).promise()
  .then(setTimeout(()=>{res.sendStatus(201)}, 100))

})

app.listen(3001, ()=> {
  console.log('connected to server S3 server on port 3001')
})

