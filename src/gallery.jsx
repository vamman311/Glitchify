import React from 'react'
import axios from 'axios'
import IndividualImage from './individualImage.jsx'

const {useState,useEffect} = React;

const Gallery = () => {

  const [userImages, setUserImages] = useState(null)

  useEffect(()=>{
    axios.get('http://localhost:3001/v2/files')
      .then((res) => {
        setUserImages(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      {userImages && userImages.map(function(s3file, index) {

        let s3url = 'https://glitchify-bucket.s3.amazonaws.com/'
        let imageUrl = `${s3url}${s3file.Key}`
        console.log(imageUrl)
        return (
          <IndividualImage key={index} url={imageUrl}/>
        )
      })}
    </div>
  )
}

export default Gallery