
import { Typography, Box, styled } from "@mui/material"

const Component = styled(Box)({
    backgroundColor: '#f5f5f7',
    display: 'flex',
    justifyContent: 'center'
})

const Text = styled(Typography)({
    fontSize: '14px!important',
    padding: '12px 0',
    color: '#1d1d1f'
})

const Info = () => {
    return (
        <Component>
            <Text>
                Shop now at the Apple Store online with many great ways to buy. 
                Get free, no-contact delivery, Specialist help and more
            </Text>
        </Component>
    )
}

export default Info;