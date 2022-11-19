import React from 'react'
import { Link } from 'react-router-dom'
import AuthenticationButton from '../Auth/AuthenticationButton.jsx'
import LoginButton from '../Auth/Login.jsx'
import LogoutButton from '../Auth/Logout.jsx'
import { useAuth0 } from '@auth0/auth0-react';


const {useRef} = React;

const Home = () => {
  // const { loginWithRedirect } = useAuth0();
  const { isAuthenticated, user, isLoading, error } = useAuth0();


  if (isLoading) {
    return <div>is loading</div>
  }
  if (error){
    console.log(error)
  }

  console.log(isAuthenticated)
  const { loginWithRedirect } = useAuth0();
  const gallery = useRef()
  const loginButton = useRef()

  const handleLogin = () => {
    // gallery.current.click()
    // loginButton.current.click()
    loginWithRedirect()
  }

  return (
    <>
    {/* <LoginButton></LoginButton> */}
    <LogoutButton></LogoutButton>
     <Link className='gallery' to ="/gallery" ref={gallery}>Gallery</Link>
    <div className='glitchContainer'>
      <h1 className='glitch' onClick={handleLogin}>Phucket</h1>
    </div>

    </>
  )
}

export default Home