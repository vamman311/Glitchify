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

  // const deleteFile = () => {
  //   axios.delete(`http://localhost:3001/v2/delete`, {params: {filename: filekey}})
  //   .then((res) => {
  //     console.log(res.status)
  //     setToggleRefresh(!toggleRefresh)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  return (
    <>
    <img className = 'feedImage'src={`${url}`} onClick={expandView}>

    </img>
    {expanded && <button onClick={deleteFile}>Phucket</button>}
    </>

  )
}

export default IndividualImage