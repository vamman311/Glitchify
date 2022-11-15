import React from 'react'

const {useState} = React;

const IndividualImage = ({url}) => {

  const [expanded, setExpanded] = useState(false)

  const scale = () => {
    console.log(event.target)

    if (expanded === false) {
      event.target.style.width = "60%";
      event.target.style.height = "auto";
      event.target.style.transition = "width 0.5s ease";
    }
    if (expanded === true) {
      event.target.style.width = "10%";
      event.target.style.height = "auto";
      event.target.style.transition = "width 0.5s ease";
    }
    setExpanded(!expanded)
  }

  return (
    <div>
    <img src={`${url}`} onClick={scale}>

    </img>
    {expanded && <button>Phucket</button>}
    </div>

  )
}

export default IndividualImage