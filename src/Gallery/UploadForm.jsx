import React from 'react'

const UploadForm = () => {

  return (
    <form
    id = 'uploadForm'
    action ='http://localhost:3001/v2/upload'
    method = 'post'
    encType = 'multipart/form-data'>
      <input type= 'file' name='file'></input>
      <input type= 'submit' value='Upload'></input>
    </form>
  )
}

export default UploadForm