import { useMsal } from '@azure/msal-react';
import { msalInstance } from '../authConfig';
const LogoutBtn = () => {
    const { instance } = useMsal();
    const handleLogout = async () => {
        // setIsLoggedIn(false)
        console.log(instance)
        const { homeAccountId = undefined } = instance.getAllAccounts()[0];
        if (homeAccountId) {
            console.log(instance.getAccountByHomeId(homeAccountId))
            await instance.logoutRedirect({ 
                account: instance.getAccountByHomeId(homeAccountId),
                postLogoutRedirectUri: "http://localhost:5173?logout=true",
            })
        }
      }

  return (
    <button onClick={async () => await handleLogout()}>Logout</button>
  )
}

export { LogoutBtn }