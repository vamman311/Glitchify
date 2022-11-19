const express = require('express')
const multer = require('multer')
const path = require('path')
const router = express.Router()
const upload = multer({})
const getFiles = require('../models/getFiles.js')
const postFile = require('../models/postFile.js')
const deleteFile = require('../models/deleteFile.js')

router.get('/v2/files', getFiles.getFiles)
router.post('/v2/upload', upload.array('file'), postFile.postFile)
router.delete('/v2/delete', deleteFile.deleteFile)

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../public', 'index.html'));
});

module.exports = router;