import React from 'react'
import '../styles/styles.css'
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

// Huzzah for jsx!
const App = () => {
return (
  <div className="glitch--style-1">
    <div className="glitch_img">yo</div>
  </div>
)
}

root.render(<App />);