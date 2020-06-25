import React, { useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';
import ErrorLogin from 'views/ErrorMessage/ErrorLogin'
import LoadingScreen from 'views/LoadingScreen'

function Auth(props) {
  const [auth, setAuth] = useState({ keycloak: null, authenticated: false })

  useEffect(() => {    
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({onLoad: 'login-required'})
      .then(authenticated => {
          setAuth({ keycloak: keycloak, authenticated: authenticated })
      })
  }, [])
  if (auth.keycloak) {
    if (auth.authenticated) {
      return (
        <>
          {props.children}
        </>
      )
    } else {
      return (
        <>
          <ErrorLogin />
        </>
      )
    } 
  } else {
    return (
      <div>
        <LoadingScreen />
      </div>
    )
  }
}

export default Auth
