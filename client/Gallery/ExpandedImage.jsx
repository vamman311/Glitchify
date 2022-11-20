import React from 'react'
import axios from 'axios'
import { MdDelete } from "@react-icons/all-files/md/MdDelete"
import { FaWindowClose } from "@react-icons/all-files/Fa/FaWindowClose"
import { BiDownload } from "@react-icons/all-files/Bi/BiDownload"

const ExpandedImage = ({currentImage, setCurrentImage, fileKey, toggleRefresh, setToggleRefresh}) => {

  const deleteFile = () => {
    axios.delete(`http://localhost:3001/v2/delete`, {params: {filename: fileKey}})
    .then((res) => {
      setToggleRefresh(!toggleRefresh)
      setCurrentImage(null)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handleCloseExpanded = () => {
    setCurrentImage(null)
  }

return (
  <div className='wrapper'>
    <span className='imageName'>{fileKey}</span>
    <button className ='deleteButton' onClick={deleteFile}><MdDelete /></button>
      <a className ='download' href={currentImage} download><BiDownload /></a>
    <div className='test'>
      <button className ='formClose' onClick={handleCloseExpanded}><FaWindowClose /></button>
      {currentImage && <img className ='expandedImage'src={`${currentImage}`}></img>}
    </div>
  </div>
)

}

export default ExpandedImage