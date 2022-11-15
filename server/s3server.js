require('dotenv').config();
const express = require('express')
const app = express();
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = new aws.S3();
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.listen(3001, ()=> {
  console.log('connected to server S3 server on port 3001')
})

//update aws config with credentials
aws.config.update({
  secretAccessKey: process.env.ACCESS_SECRET,
  accessKeyId: process.env.ACCESS_KEY,
  region: process.env.REGION

})

const upload = multer({
  storage: multerS3({
    s3:s3,
    acl:"public-read",
    bucket: process.env.BUCKET,
    key:(req, file, cb) => {
      cb(null,file.originalname)
    }
  })
})

//routes
app.post('/upload', upload.single('file'), async(req, res, next) => {
  console.log(req.file)
  res.send(`Successfully uploaded ${req.file} location`)
})

app.get('/list', async(req, res) => {
  let r =  await s3.listObjectivesV2({Bucket:process.env.BUCKET}).promise()

  let x = r.Contents.map(item => item.Key);
  res.send(x)

})

app.get('/download/:filename', async(req, res) => {

  const fileName = req.params.filename
  let r = await s3.getObject({Bucket: process.env.BUCKET, Key}).promise()

  res.send(r.body)
})

app.delete('/delete/:filename', async(req, res) => {

  const fileName = req.params.filename
  let r = await s3.deleteObject({Bucket: process.env.BUCKET, Key}).promise()

  res.send("File Deleted Successfully");
})

