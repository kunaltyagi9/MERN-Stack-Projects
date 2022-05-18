
import { Box, styled, Typography } from '@mui/material';

import Peoples from './Peoples';

const Container = styled(Box)`
    align-self: baseline;
    margin: 30px 0 30px 30px;
    width: 100%;
`

const Text = styled(Typography)`
    color: #8e8e8e;
    font-size: 14px;
`

const Suggestions = () => {

    return (
        <Container>
            <Text>Suggestions For You</Text>
            <Peoples />
        </Container>
    )
}

export default Suggestions;