import React from 'react'
import { Link } from 'react-router-dom'
import AuthenticationButton from '../Auth/AuthenticationButton.jsx'
import LoginButton from '../Auth/Login.jsx'
import LogoutButton from '../Auth/Logout.jsx'
// import { useAuth0 } from '@auth0/auth0-react';
import { useAuth0 } from '@auth0/auth0-react';

const {useRef} = React;

const Home = () => {
  // const { loginWithRedirect } = useAuth0();
  const { isAuthenticated, user, isLoading } = useAuth0();
  console.log(isAuthenticated, user, isLoading)
  const gallery = useRef()
  const handleLink = () => {
    gallery.current.click()
  }

  return (
    <>
    <LoginButton></LoginButton>
    <LogoutButton></LogoutButton>
     <Link className='gallery' to ="/gallery" ref={gallery}>Gallery</Link>
    <div className='glitchContainer'>
      <h1 className='glitch' onClick={handleLink}>Phucket</h1>
    </div>
    </>
  )
}

export default Home