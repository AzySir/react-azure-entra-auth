import { 
  Configuration, 
  PublicClientApplication 
} from '@azure/msal-browser';

// MSAL configuration
const msalConfig: Configuration = {
  auth: {
    clientId: 'ade0267f-1dc1-4fe8-af0e-95e2c533337e', // Replace with your Azure Entra AD client ID
    authority: 'https://login.microsoftonline.com/352d0ee2-ef5d-4d04-a18d-e8d7317b4edd', // Replace with your tenant ID
    redirectUri: "http://localhost:5173",
    
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
};

// Initialize MSAL instance asynchronously
const msalInstance = new PublicClientApplication(msalConfig);

// Scopes for API access
const loginRequest = {
  scopes: ['User.Read'], // Adjust scopes as needed for your application
};

export { msalInstance, loginRequest };