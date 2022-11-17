const multer = require('multer')
const AwsClient = require('../awsClient.js')
const upload = multer({})

const deleteFile = async(req, res) => {

  const filename = req.query.filename
  const s3 = new AwsClient.AWS.S3({})

  return s3.deleteObject({Bucket: 'glitchify-bucket', Key: filename}).promise()
  .then(setTimeout(()=>{res.sendStatus(201)}, 100))

}

module.exports = {deleteFile}