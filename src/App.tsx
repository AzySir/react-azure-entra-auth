import React, { useState } from 'react'
import { AuthProvider } from './components/AuthProvider'
import { Login } from './components/Login'
import './App.css'
import { LogoutBtn } from './components/LogoutBtn'
import { Nav } from './components/Nav'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const queryParameters = new URLSearchParams(window.location.search)
  const logout = queryParameters.get("logout")

  const handleAuthenticated = () => setIsLoggedIn(true)


  // const handleLogout = async () => {
  //   const activeAccount = msalService.instance.getActiveAccount();
  //   if (activeAccount) {
  //     const logoutHint = activeAccount.userName; // Or other identifier
  //     await msalService.instance.logoutRedirect({ logoutHint: logoutHint });
  //   }
  // };

  return (
    <AuthProvider>
      <div className="App">
      Logging In: {isLoggedIn.toString()}
        {!isLoggedIn ? (
          <Login onAuthenticated={handleAuthenticated} />
        ) : (
          <header className="App-header">
            <Nav />
            <h1>Welcome to React with Azure Entra AD</h1>
            <p>You are now authenticated!</p>
            <LogoutBtn />
          </header>
        )}
        {logout && <h1>Logged out successfully</h1>}
      </div>
    </AuthProvider>
  )
}

export default App
