
import { Typography, Box, styled } from '@mui/material';

const Container = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 47,
    width: '100%',
    height: 550,
    objectFit: 'cover',
    backgroundRepeat: 'no-repeat'
})

const Heading = styled(Typography)({
    fontWeight: [600, "!important"],
    fontSize: [56, "!important"]
})

const SubHeading = styled(Typography)({
    padding: '0 0 5px 0',
    fontSize: [28, "!important"]
})

const Link = styled(Typography)({
    fontSize: [21, "!important"],
    padding: '0 30px'
})

const Section = ({ data }) => {
    return (
        <Box>
            <Container style={{background: `url(${data.imageURL}) 50% 165% no-repeat`}}>
                <Heading style={{color: data.headColor}} variant="h3">{data.heading}</Heading>
                <SubHeading style={{color: data.subHeadColor}}variant="h5">{data.subHeading}</SubHeading>
                <Typography style={{marginTop: '5px'}}>
                    <Link component="span" variant="h5">Learn more</Link>
                    <Link component="span" variant="h5">Buy</Link>
                </Typography>
            </Container>
        </Box>
    )
}

export default Section;