
import { AppBar, Toolbar, makeStyles, Box } from '@material-ui/core';
import { Menu } from '@material-ui/icons'

const useStyles = makeStyles({
    header: {
        background: '#fff',
        height: 70
    },
    menu: {
        color: '#000'
    },
    image: {
        height: 55,
        margin: 'auto',
        paddingRight: 70
    }
})

const Header = () => {
    const classes = useStyles();
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <Menu className={classes.menu} />
                <img src={url} alt="logo" className={classes.image} />
            </Toolbar>
        </AppBar>
    )
}

export default Header;