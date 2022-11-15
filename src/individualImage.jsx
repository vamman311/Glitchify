import React from 'react'

const IndividualImage = ({url}) => {
  console.log(url)
  return (
    <div>
    <img src={`${url}`}></img>
    </div>
  )
}

export default IndividualImage