import React, { useEffect } from 'react';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { loginRequest } from '../authConfig';

type LoginProps = {
  onAuthenticated: () => void;
};

const Login: React.FC<LoginProps> = ({ onAuthenticated }) => {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    console.log("At the log in page")
    console.log("Current interaction status:", inProgress);
    
    if (!isAuthenticated) {
      // Log current account state
      const activeAccount = instance.getActiveAccount();
      const allAccounts = instance.getAllAccounts();
      
      // Only initiate login if there's no interaction in progress
      if (inProgress === InteractionStatus.None) {
        if (!activeAccount && allAccounts.length === 0) {
          console.log("No accounts found, initiating login redirect.");
          instance.loginRedirect(loginRequest).catch((e) => {
            console.error('Login failed:', e);
            console.error('Error details:', JSON.stringify(e, null, 2));
          });
        } else {
          console.log("Account exists but not authenticated, possible state mismatch. Calling onAuthenticated.");
          onAuthenticated();
        }
      } else {
        console.log(`Interaction already in progress: ${inProgress}. Waiting for completion.`);
      }
    } else {
      console.log("User is authenticated, proceeding.");
      onAuthenticated();
    }
  }, [isAuthenticated, instance, onAuthenticated, inProgress]);

  return (
    <div>
      <h2>Redirecting to login...</h2>
    </div>
  );
}; 

export { Login }