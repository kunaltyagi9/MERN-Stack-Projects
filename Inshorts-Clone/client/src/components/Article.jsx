
import { Card, CardContent, Typography, Box, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    component: {
        boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
        marginBottom: 20
    },
    container: {
        display: 'flex',
        padding: 8,
        paddingBottom: '4px!important'
    },
    image: {
        height: 268,
        width: '88%',
        borderRadius: 5,
        objectFit: 'cover'
    },
    rightContainer: {
        margin: '5px 0px 0 -25px',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            margin: '5px 0'
        }
    },
    title: {
        fontWeight: 300,
        color: '#44444d',
        fontSize: 22,
        lineHeight: '27px'
    },
    author: {
        color: '#808290',
        fontSize: 12,
        lineHeight: '22px'
    },
    description: {
        lineHeight: '22px',
        color: '#44444d',
        marginTop: 5,
        fontFamily: "'Roboto',sans-serif",
        fontWeight: 300
    },
    short: {
        color: '#44444d',
        fontFamily: "'Convergence', sans-serif"
    },
    publisher: {
        fontSize: 12,
        marginTop: 'auto',
        marginBottom: 10,
        '& > *': {
            textDecoration: 'none',
            color: '#000',
            fontWeight: 900
        }
    }
}))

const Article = ({ article }) => {
    const classes = useStyles();
    return (
        <Card className={classes.component}>
            <CardContent className={classes.container}>
                <Grid container>
                    <Grid lg={5} md={5} sm={5} xs={12} item>
                        <img src={article.url} className={classes.image} />
                    </Grid>
                    <Grid lg={7} md={7} sm={7} xs={12} item className={classes.rightContainer}>
                        <Typography className={classes.title}>{article.title}</Typography>
                        <Typography className={classes.author}>
                            <b className={classes.short}>short</b> by {article.author} / {new Date(article.timestamp).toDateString()}
                        </Typography>
                        <Typography className={classes.description}>{article.description}</Typography>
                        <Typography className={classes.publisher}>
                            read more at <a href={article.link} target='_blank'>{article.publisher}</a>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Article;