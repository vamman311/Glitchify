import React from 'react'

const {useRef} = React;
const UploadForm = () => {

  const uploadFile = useRef()
  const pickFile = () => {
    event.preventDefault()
    uploadFile.current.click()
  }

  return (
    <form
    id = 'uploadForm'
    action ='http://localhost:3001/v2/upload'
    method = 'post'
    encType = 'multipart/form-data'>
      <input type= 'file' name='file' className='chooseFile' ref={uploadFile}></input>
      <input type= 'submit' value='Upload'></input>
      <button onClick={pickFile}>Pick File</button>
    </form>
  )
}

export default UploadForm