
import { Card, CardContent, Typography, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        display: 'flex'
    },
    image: {
        height: 268,
        width: 320,
        borderRadius: 5
    },
    rightContainer: {
        margin: '5px 0 0 20px'
    },
    title: {
        fontFamily: '"Roboto",sans-serif',
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
        marginTop: 5
    }
})

const Article = ({ article }) => {
    const classes = useStyles();
    return (
        <Card>
            <CardContent className={classes.container}>
                <Box>
                    <img src={article.url} className={classes.image} />
                </Box>
                <Box className={classes.rightContainer}>
                    <Typography className={classes.title}>{article.title}</Typography>
                    <Typography className={classes.author}>
                        <b>short</b> by {article.author} / {new Date(article.timestamp).toDateString()}
                    </Typography>
                    <Typography className={classes.description}>{article.description}</Typography>
                    <Typography>
                        read more at <a href={article.link} target='_blank'>hello</a>
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Article;