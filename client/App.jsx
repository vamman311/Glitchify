import React from 'react'
import UploadForm from './Gallery/UploadForm.jsx'
import Gallery from './Gallery/Gallery.jsx'
import Home from './Home/Home.jsx'
import NavBar from './Home/NavBar.jsx'
import LoginButton from './Auth/Login.jsx'
import axios from 'axios'
import {Route, Routes} from 'react-router-dom'

const App = () => {

  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
    </Routes>
    </>
  )
}

export default App