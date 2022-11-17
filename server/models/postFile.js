const multer = require('multer')
const AwsClient = require('../awsClient.js')
const upload = multer({})

const postFile = (req, res) => {
  try {
    req.files.forEach(function(element, index){
      const s3 = new AwsClient.AWS.S3({})
      let count = 0
      let fileName = `${element.originalname}`
      let uploadParams = {Key: fileName, Bucket: 'glitchify-bucket', Body: element.buffer}
      s3.upload(uploadParams, (err, data) => {
        count++
        if (err) console.log(err)
        setTimeout(()=>{res.end()}, 150)
        console.log('count', count)
      })
    })
  } catch (error) {
    res.send(error)
    console.log(error)
  }
}

module.exports = {postFile}