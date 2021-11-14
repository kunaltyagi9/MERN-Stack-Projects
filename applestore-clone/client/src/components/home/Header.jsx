

import { navData } from '../../constants/navConstant';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, ShoppingBagOutlined as Bag }  from '@mui/icons-material';

const useStyles = makeStyles({
    component: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        height: 44
    },
    nav: {
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
    }
})

const Header = () => {
    const logoURL = 'https://www.apple.com/ac/globalnav/7/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg';
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Box className={classes.nav}>
                <img src={logoURL} alt='logo' />
                {
                    Object.keys(navData).map(nav => {
                        console.log(navData[nav]);
                        return <Link to='/'>{navData[nav]}</Link>
                    })
                }
                <SearchIcon fontSize='small' />
                <Bag fontSize='small' />
            </Box>
        </Box>
    )
}

export default Header;