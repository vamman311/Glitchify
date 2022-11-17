import React from 'react'
import axios from 'axios'

const {useState, useEffect} = React;

const IndividualImage = ({url, filekey, setUserImages, toggleRefresh, setToggleRefresh}) => {

  const [expanded, setExpanded] = useState(false)


  const expandView = () => {

    if (expanded === false) {
      event.target.style.width = "60vw";
      event.target.style.height = "auto";
      event.target.style.transition = "width 0.5s ease";
    }
    if (expanded === true) {
      event.target.style.width = "40vw";
      event.target.style.height = "auto";
      event.target.style.transition = "width 0.5s ease";
    }
    setExpanded(!expanded)
  }

  const deleteFile = () => {
    axios.delete(`http://localhost:3001/v2/delete`, {params: {filename: filekey}})
    .then((res) => {
      console.log(res.status)
      setToggleRefresh(!toggleRefresh)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
    <img src={`${url}`} onClick={expandView}>

    </img>
    {expanded && <button onClick={deleteFile}>Phucket</button>}
    </>

  )
}

export default IndividualImage