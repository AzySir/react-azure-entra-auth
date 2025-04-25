import React, { useState, useEffect } from 'react';
import { InteractionType } from "@azure/msal-browser";
import { MsalProvider, MsalAuthenticationTemplate } from '@azure/msal-react';
import { msalInstance } from '../authConfig';


type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    msalInstance.initialize().then(() => {
      console.log('MSAL initialization complete, handling redirect promise...');
      msalInstance.clearCache();
      msalInstance.handleRedirectPromise().then((response) => {
        setInitialized(true);
      }).catch((error) => {
        setInitialized(true);
      });
    }).catch((error) => {
      setInitialized(true);
    });
  }, []);

  if (!initialized) {
    return <div>Loading authentication... Please wait.</div>;
  }

  console.log('MSAL initialized, rendering children.');
  return (
    <MsalProvider instance={msalInstance}>
      {children}
    </MsalProvider>
  );
};

export { AuthProvider };