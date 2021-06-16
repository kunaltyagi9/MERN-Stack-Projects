
import { Box, makeStyles, Typography, Grid } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { Link } from 'react-router-dom'

const useStyle = makeStyles(theme => ({
    container: {
        margin: '50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    icons: {
        float: 'right'
    },
    icon: {
        margin: 5,
        padding: 5,
        border: '1px solid #878787',
        borderRadius: 10
    },
    heading: {
        fontSize: 38,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0'
    },
    author: {
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
    }
}));


const DetailView = () => {
    const classes = useStyle();
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    return (
        <Box className={classes.container}>
            <img src={url} alt="post" className={classes.image} />
            <Box className={classes.icons}>
                <Link><Edit className={classes.icon} color="primary"/></Link>
                <Link><Delete className={classes.icon} color="error" /></Link>
            </Box>
            <Typography className={classes.heading}>Heading hai Heading</Typography>

            <Box className={classes.author}>
                <Typography>Author: <span style={{fontWeight: 600}}>Code for Interview</span></Typography>
                <Typography style={{marginLeft: 'auto'}}>1 hour ago</Typography>
            </Box>

            <Typography className={classes.detail}>Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao 
            Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao 
            Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao 
            </Typography>
        </Box>
    )
}

export default DetailView;