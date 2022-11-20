import React from 'react'
import axios from 'axios'

const {useState, useEffect} = React;

const IndividualImage = ({url, filekey, setUserImages, toggleRefresh, setToggleRefresh, currentImage, setCurrentImage, setFileKey}) => {

  const [expanded, setExpanded] = useState(false)


  const expandView = () => {
    console.log(url)
    setFileKey(filekey)
    setCurrentImage(url)
  }

  return (
    <>
    <img className = 'feedImage'src={`${url}`} onClick={expandView}>

    </img>
    {expanded && <button onClick={deleteFile}>Phucket</button>}
    </>

  )
}

export default IndividualImage