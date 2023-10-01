

import { navData } from '../../constants/navConstant';
import { Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, ShoppingBagOutlined as Bag }  from '@mui/icons-material';

const Component = styled(Box)({
    backgroundColor: 'rgba(0,0,0,0.8)',
    height: 44
})
    
const Nav = styled(Box)({
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    '&  >*': {
        textDecoration: 'none',
        color: '#f5f5f7',
        opacity: '.8',
        padding: '0 22px',
        fontSize: 12
    }
})

const Header = () => {
    const logoURL = 'https://www.apple.com/ac/globalnav/7/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg';
    
    return (
        <Component>
            <Nav>
                <img src={logoURL} alt='logo' />
                {
                    Object.keys(navData).map(nav => {
                        console.log(navData[nav]);
                        return <Link to='/'>{navData[nav]}</Link>
                    })
                }
                <SearchIcon fontSize='small' />
                <Bag fontSize='small' />
            </Nav>
        </Component>
    )
}

export default Header;