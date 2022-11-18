import React from 'react'
import axios from 'axios'
import IndividualImage from './IndividualImage.jsx'
import UploadForm from './UploadForm.jsx'
import { MdDelete } from "@react-icons/all-files/md/MdDelete"
import { FaWindowClose } from "@react-icons/all-files/Fa/FaWindowClose"
const {useState, useEffect} = React;


const Gallery = () => {

  const [userImages, setUserImages] = useState(null)
  const [toggleRefresh, setToggleRefresh] = useState(true)
  const [currentImage, setCurrentImage] = useState(null)
  const [fileKey, setFileKey] = useState(null)

  useEffect(()=>{

    axios.get('http://localhost:3001/v2/files')
    .then((res) => {
      setUserImages(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [JSON.stringify(userImages), toggleRefresh])

  const deleteFile = () => {
    axios.delete(`http://localhost:3001/v2/delete`, {params: {filename: fileKey}})
    .then((res) => {
      console.log(res.status)
      setToggleRefresh(!toggleRefresh)
      setCurrentImage(null)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handleCloseExpanded = () => {
    setCurrentImage(null)
  }

  return (
    <>
        {currentImage && <div className='wrapper'>
        <div className='test'>
        <button className ='formClose' onClick={handleCloseExpanded}><FaWindowClose /></button>
        <button className ='deleteButton' onClick={deleteFile}><MdDelete /></button>
        {currentImage && <img className ='expandedImage'src={`${currentImage}`}></img>}
        </div>
        </div>}

      <div className = 'imageContainer'>

      <UploadForm toggleRefresh={toggleRefresh} setToggleRefresh={setToggleRefresh}/>
        {userImages && userImages.map(function(s3file, index) {

          let s3url = 'https://glitchify-bucket.s3.amazonaws.com/'
          let imageUrl = `${s3url}${s3file.Key}`

          return (
            <IndividualImage key={index} url={imageUrl} filekey={s3file.Key} setUserImages={setUserImages} toggleRefresh={toggleRefresh} setToggleRefresh={setToggleRefresh} currentImage={currentImage} setCurrentImage={setCurrentImage} setFileKey={setFileKey}/>
          )
        })}
      </div>
    </>
  )
}


export default Gallery