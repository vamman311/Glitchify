import React from 'react'
import axios from 'axios'
import IndividualImage from './individualImage.jsx'



const Gallery = ({userImages}) => {

  return (
    <div>
      {userImages && userImages.map(function(s3file, index) {

        let s3url = 'https://glitchify-bucket.s3.amazonaws.com/'
        let imageUrl = `${s3url}${s3file.Key}`

        return (
          <IndividualImage key={index} url={imageUrl}/>
        )
      })}
    </div>
  )
}


export default Gallery