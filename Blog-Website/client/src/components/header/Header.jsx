
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useHistory } from 'react-router-dom';
// import { useOktaAuth } from '@okta/okta-react';


const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    &  > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`

const Header = () => {

    const history = useHistory();
    // const { oktaAuth, authState } = useOktaAuth();

    // if (authState && authState.isPending) return null;

    const login = async () => history.push('/login');
    
    const logout = async () => console.log('hello') //oktaAuth.signOut();

    const button = // authState.isAuthenticated ? 
        <Button onClick={logout} style={{
            background: 'unset',
            border: 'none',
            fontSize: 17,
            textTransform: 'uppercase',
            fontFamily: 'Roboto',
            cursor: 'pointer',
            opacity: 0.8
        }}>Logout</Button> 
        // :
        // <Button onClick={login}>Login</Button>;

    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link>{button}</Link>
            </Container>
        </Component>
    )
}

export default Header;