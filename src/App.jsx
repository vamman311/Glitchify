import React from 'react'
import UploadForm from './uploadForm.jsx'
import Gallery from './gallery.jsx'
import axios from 'axios'

const {useState,useEffect} = React;

const getImages = (stateSetter) => {
  axios.get('http://localhost:3001/v2/files')
      .then((res) => {
        stateSetter(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
}

const App = () => {

  const [userImages, setUserImages] = useState(null)

  useEffect(()=>{
    getImages(setUserImages)
  }, [userImages])

  return (
    <div>
    <UploadForm />
    <Gallery userImages={userImages}/>
    </div>
  )
}

export default App