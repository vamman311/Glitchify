import React from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
const {useRef, useState} = React;

const UploadForm = ({toggleRefresh, setToggleRefresh}) => {

  const [file, setFile] = useState(null)

  const uploadFile = useRef()
  let history = useNavigate()

  const pickFile = () => {
    event.preventDefault()
    uploadFile.current.click()
    // setToggleRefresh(!toggleRefresh)

  }

  const handleOnFormSubComplete = () => {
    console.log('we made it')
    setToggleRefresh(!toggleRefresh)
  }


  return (
    <>
    <iframe name ='test' style={{display:'none'}} onLoad={handleOnFormSubComplete}></iframe>
    <form
    id = 'uploadForm'
    action ='v2/upload'
    method = 'post'
    encType = 'multipart/form-data'
    className = 'uploadForm'
    target='test'
    >
      <input type='file' name='file' className='chooseFile' ref={uploadFile}></input>
      <button onClick={pickFile}>Pick File</button>
      <input type='submit' value='Upload'></input>
    </form>
    </>

  )
}

export default UploadForm

// {
//   fieldname: 'file',
//   originalname: '1668537240260-unknown (3) (1).png',
//   encoding: '7bit',
//   mimetype: 'image/png',
//   buffer: <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 0b 40 00 00 06 7e 08 06 00 00 00 d4 e8 a5 7d 00 00 20 00 49 44 41 54 78 01 ec dd 0f 9c 5c 65 7d ... 832244 more bytes>,
//   size: 832294
// }