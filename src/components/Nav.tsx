import { msalInstance } from '../authConfig';
import { useMsal } from '@azure/msal-react';

const Nav = () => {
    const { accounts } = useMsal();
    return (
        <nav style={{ backgroundColor: 'grey', width: '100px', height: '100px', textAlign: 'center', lineHeight: '100px', float: 'right', borderRadius: '50%' }}>
            {accounts[0]?.name}
        </nav>
    )
}

export { Nav}