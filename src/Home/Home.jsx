import React from 'react'
import { Link } from 'react-router-dom'

const {useRef} = React;

const Home = () => {

  const gallery = useRef()
  const handleLink = () => {
    gallery.current.click()
  }

  return (
    <>
     <Link className='gallery' to ="/gallery" ref={gallery}>Gallery</Link>
    <div className='glitchContainer'>
      <h1 className='glitch' onClick={handleLink}>Phucket</h1>
    </div>
    </>
  )
}

export default Home