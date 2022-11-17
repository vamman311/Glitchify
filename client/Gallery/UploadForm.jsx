import React from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { FaUpload } from "@react-icons/all-files/fa/FaUpload"
const {useRef, useState} = React;

const UploadForm = ({toggleRefresh, setToggleRefresh}) => {

  const [file, setFile] = useState(null)
  const [show, setShow] = useState(true)

  const uploadFile = useRef()

  const pickFile = () => {
    event.preventDefault()
    uploadFile.current.click()
    setShow(!show)
  }

  const handleOnFormSubComplete = () => {
    setToggleRefresh(!toggleRefresh)
    setShow(!show)
  }


  return (
    <>
    <div className='uploadBackground'>
    <iframe name ='hidden' style={{display:'none'}} onLoad={handleOnFormSubComplete}></iframe>
    <form
    id = 'uploadForm'
    action ='v2/upload'
    method = 'post'
    encType = 'multipart/form-data'
    className = 'uploadForm'
    target='hidden'
    >
      <input type='file' name='file' className='chooseFile' ref={uploadFile} multiple></input>
      {show ? <button onClick={pickFile} className='pickFileButton'><FaUpload /></button> :
      <input type='submit' value='Confirm' className='uploadButton'></input>}
    </form>
    </div>
    </>

  )
}

export default UploadForm
