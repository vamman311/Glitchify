import React from 'react'
import axios from 'axios'
import IndividualImage from './IndividualImage.jsx'
import UploadForm from './UploadForm.jsx'
const {useState, useEffect} = React;


const Gallery = () => {

  const [userImages, setUserImages] = useState(null)
  const [toggleRefresh, setToggleRefresh] = useState(true)

  useEffect(()=>{

    axios.get('http://localhost:3001/v2/files')
    .then((res) => {
      console.log(res)
      setUserImages(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [JSON.stringify(userImages), toggleRefresh])

  return (
    <>
    <div className="uploadBarContainer">
    <UploadForm toggleRefresh={toggleRefresh} setToggleRefresh={setToggleRefresh}/>
    </div>
    <div className = 'imageContainer'>
      {userImages && userImages.map(function(s3file, index) {

        let s3url = 'https://glitchify-bucket.s3.amazonaws.com/'

        let imageUrl = `${s3url}${s3file.Key}`

        return (
          <IndividualImage key={index} url={imageUrl} filekey={s3file.Key} setUserImages={setUserImages} toggleRefresh={toggleRefresh} setToggleRefresh={setToggleRefresh}/>
        )
      })}

    </div>
    </>
  )
}


export default Gallery