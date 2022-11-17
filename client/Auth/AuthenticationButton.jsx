import React from 'react';

import LoginButton from './Login.jsx';
import LogoutButton from './Logout.jsx';

import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated)
  return (
    isAuthenticated ? <LogoutButton /> : <LoginButton />
  )
};

export default AuthenticationButton;