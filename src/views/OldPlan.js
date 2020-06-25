import React, { useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';

function OldPlan() {
  const [auth, setAuth] = useState({ keycloak: null, authenticated: false });

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
        <div>
          Plan OK
        </div>
      )
    } else {
      return (
        <div>
          Plan NOT OK
        </div>
      )
    } 
  } else {
    return (
      <div>
        Loading 
      </div>
    )
  }
}

export default OldPlan
