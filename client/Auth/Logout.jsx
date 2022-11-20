import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FiLogOut } from '@react-icons/all-files/Fi/FiLogOut'

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <FiLogOut className="logoutButton"  onClick={() =>
      logout({
        returnTo: window.location.origin,
      })
    }>
    </FiLogOut>
  );
};

export default LogoutButton;