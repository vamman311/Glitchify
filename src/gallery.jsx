import React from 'react'
import axios from 'axios'

const {useState,useEffect} = React;

const Gallery = () => {

  const [userImages, setUserImages] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/v2/files')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <img src='https://glitchify-bucket.s3.amazonaws.com/RCsanfran.webp'></img>
    </div>
  )
}

export default Gallery