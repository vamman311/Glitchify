import React from 'react'
import App from './App.jsx'
import './styles/styles.css'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import Auth0ProviderWithHistory from './Auth/AuthProvider.jsx'

const root = createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </BrowserRouter>
</React.StrictMode>
);