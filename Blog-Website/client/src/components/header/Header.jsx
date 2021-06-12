
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'; 
import { Link } from 'react-router-dom';


const useStyle = makeStyles({
    component: {
        background: '#FFFFFF',
        color: 'black'
    },
    container: {
        justifyContent: 'center',
        '&  >*': {
            padding: 20,
            color: 'black',
            textDecoration: 'none'
        }
    }
})

const Header = () => {
    const classes = useStyle();
    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <Link to='/'>HOME</Link>
                <Link>ABOUT</Link>
                <Link>CONTACT</Link>
                <Link>LOGIN</Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header;