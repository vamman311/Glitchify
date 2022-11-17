const AwsClient = require('../awsClient.js')

const getFiles = (req, res) => {
  const s3 = new AwsClient.AWS.S3({})
  s3.listObjectsV2({Bucket: 'glitchify-bucket'}, (err, data) => {
    if (err) console.log(err)
    console.log(data)
    res.send(data.Contents)
  })
}

module.exports = {getFiles}