
import { SwipeableDrawer, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Close, Language } from '@mui/icons-material';

import { drawers } from '../../constants/data';

const useStyles = makeStyles({
    close: {
        display: 'flex',
        justifyContent: 'end',
        padding: 24
    },
    text: {
        color: '#393c41',
        padding: '10px 125px 10px 40px',
        fontWeight: [600, '!important'],
        fontSize: [14, '!important']
    },
    globeIcon: {
        padding: '10px 125px 10px 40px',
        display: 'flex',
        fontSize: [14, '!important']
    },
    language: {
        fontSize: [12, '!important']
    }
})

const DrawerMenu = ({ open, toggleDrawer }) => {
    const classes = useStyles();
    return (
        <>
            <SwipeableDrawer
              open={open}
              onClose={toggleDrawer}
              anchor="right"
            >
                <Box className={classes.close}>
                    <Close onClick={toggleDrawer} />
                </Box>
                {
                    drawers.map(drawer => (
                        <Typography className={classes.text}>{drawer}</Typography>
                    ))
                }
                <Box className={classes.globeIcon}>
                    <Language />
                    <Box style={{marginLeft: 10}}>
                        <Typography>India</Typography>
                        <Typography className={classes.language}>English</Typography>
                    </Box>
                </Box>
            </SwipeableDrawer>
        </>
    )
}

export default DrawerMenu;