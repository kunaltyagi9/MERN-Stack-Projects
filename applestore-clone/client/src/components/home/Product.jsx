
import { Typography, Box, styled } from '@mui/material';

const Container = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '50%',
    height: 580,
    objectFit: 'cover',
    margin: '0 10px'
})
    
const Heading = styled(Typography)({
    paddingTop: 60,
    fontWeight: [600, "!important"],
    fontSize: [30, "!important"]
})
    
const SubHeading = styled(Typography)({
    padding: '5px 0 5px 0',
    fontSize: [21, "!important"],
    maxWidth: 450,
    textAlign: 'center'
})

const Link = styled(Typography)({
    fontSize: [21, "!important"],
    padding: '0 30px'
})


const Product = ({ data }) => {
    
    return (
        <Container style={{background: `url(${data.imageURL}) 50% 165% no-repeat`}}>
            <Heading style={{color: data.headColor}} variant="h3">{data.heading}</Heading>
            <SubHeading style={{color: data.subHeadColor}}variant="h5">{data.subHeading}</SubHeading>
            <Typography style={{marginTop: '5px'}}>
                <Link component="span" variant="h5">Learn more</Link>
                <Link component="span" variant="h5">Buy</Link>
            </Typography>
        </Container>
    )
}

export default Product