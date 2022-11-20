import React from 'react'
import { Link } from 'react-router-dom'
import AuthenticationButton from '../Auth/AuthenticationButton.jsx'
import LoginButton from '../Auth/Login.jsx'
import LogoutButton from '../Auth/Logout.jsx'
import { useAuth0 } from '@auth0/auth0-react';
import { Oval } from 'react-loading-icons'

const {useRef, useState} = React;

const Home = () => {
  const { isAuthenticated, user, isLoading, error } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  // const [userData, setUser] = useState(user)

  const gallery = useRef()
  const loginButton = useRef()

  const handleLogin = () => {
    loginWithRedirect()
  }

  if (isLoading) {
    return
    <Oval className='loading'/>
  }
  if (error){
    console.log(error)
  }


  return (
    <>
     <Link className='gallery' to ="/gallery" ref={gallery} state={user}>Gallery</Link>
    <div className='glitchContainer'>
      <h1 className='glitch' onClick={handleLogin}>Phucket</h1>
    </div>

    </>
  )
}

export default Home