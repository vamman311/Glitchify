import React from 'react'
import axios from 'axios'
import IndividualImage from './IndividualImage.jsx'
import UploadForm from './UploadForm.jsx'
import { MdDelete } from "@react-icons/all-files/md/MdDelete"
import { FaWindowClose } from "@react-icons/all-files/Fa/FaWindowClose"
import { BiDownload } from "@react-icons/all-files/Bi/BiDownload"

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

  const handleShare = () => {
    var copyText = currentImage

     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText)
    .then(()=>{
      alert("Copied the text: " + copyText);
    })
    .catch(()=>{
      alert("Failed to copy the text at value : " + copyText)
    })

    // Alert the copied text

  }

  return (
    <>
        {currentImage && <div className='wrapper'>
        <span class='imageName'>{fileKey}</span>
          <div className='test'>
            <button className ='formClose' onClick={handleCloseExpanded}><FaWindowClose /></button>
            {currentImage && <img className ='expandedImage'src={`${currentImage}`}></img>}

            <button className ='deleteButton' onClick={deleteFile}><MdDelete /></button>
            <a className ='download' href={currentImage} download><BiDownload /></a>
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