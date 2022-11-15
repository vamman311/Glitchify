import React from 'react'
import '../styles/styles.css'
import { createRoot } from "react-dom/client";
import UploadForm from './uploadForm.jsx'
import Gallery from './gallery.jsx'
const root = createRoot(document.getElementById("root"));

// Huzzah for jsx!
const App = () => {
return (
  <div>
  <UploadForm />
  <Gallery />
  </div>
)
}

root.render(<App />);