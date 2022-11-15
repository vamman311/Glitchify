const AWS = require('aws-sdk')
require('dotenv').config()

const region = process.env.REGION
const ACCESS_KEY = process.env.ACCESS_KEY
const ACCESS_SECRET = process.env.ACCESS_SECRET

AWS.config.update({region, credentials: {accessKeyId: ACCESS_KEY, secretAccessKey: ACCESS_SECRET}})

module.exports = {
  AWS
}
