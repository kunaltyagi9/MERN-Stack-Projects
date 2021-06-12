
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    container: {

    }
})

const DetailView = () => {
    const classes = useStyle();
    const url = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';

    return (
        <Box className={classes.container}>
            <img src={url} alt="post" className={classes.image} />
            <Typography className={classes.textColor}>Music</Typography>
            <Typography className={classes.heading}>Heading hai Heading</Typography>
            <Typography className={classes.textColor}>1 hour ago</Typography>
            <Typography className={classes.detail}>Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao 
            Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao 
            Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao Or sunao 
            </Typography>
        </Box>
    )
}

export default DetailView;