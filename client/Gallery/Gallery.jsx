import React from 'react'
import axios from 'axios'
import IndividualImage from './IndividualImage.jsx'
import UploadForm from './UploadForm.jsx'
import ExpandedImage from './ExpandedImage.jsx'
import LogoutButton from '../Auth/Logout.jsx'
import { useLocation } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

const {useState, useEffect} = React;



const Gallery = ({state}) => {

  const [userImages, setUserImages] = useState(null)
  const [toggleRefresh, setToggleRefresh] = useState(true)
  const [currentImage, setCurrentImage] = useState(null)
  const [fileKey, setFileKey] = useState(null)
  const location = useLocation();
  const userData = location.state?.state;

  useEffect(()=>{

    axios.get('http://localhost:3001/v2/files')
    .then((res) => {
      setUserImages(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [JSON.stringify(userImages), toggleRefresh])

  return (
    <>
      <LogoutButton></LogoutButton>
      {currentImage && <ExpandedImage currentImage={currentImage} setCurrentImage={setCurrentImage} fileKey={fileKey} toggleRefresh={toggleRefresh} setToggleRefresh={setToggleRefresh}/>}

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