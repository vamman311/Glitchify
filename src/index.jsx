import React from 'react'
import '../styles/styles.css'
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

// Huzzah for jsx!
const App = () => {
return (
  <form

      id = 'uploadForm'
      action ='http://localhost:3001/upload'
      method = 'post'
      encType = 'multipart/form-data'>

      <input type= 'file' name='sampleFile'></input>
      <input type= 'submit' value='Upload'></input>
  </form>
)
}

root.render(<App />);