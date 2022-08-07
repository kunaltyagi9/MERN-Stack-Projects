import { useContext } from 'react';

import { Box, Typography, styled } from '@mui/material';
import { Search, MoreVert } from '@mui/icons-material';

import { AccountContext } from '../../../context/AccountProvider';
import { defaultProfilePicture } from '../../../constants/data';

const Header = styled(Box)`
    height: 35px;
    background: #ededed;
    display: flex;
    padding: 10px 16px;
    align-items: center;
`;
    
const Image = styled('img')({
    width: 37,
    height: 37,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 2px'
})

const Name = styled(Typography)`
    margin-left: 10px !important;
`;

const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 22px;
        color: #919191;
    }
`;

const Status = styled(Typography)`
    font-size: 12px !important;
    color: rgb(0, 0, 0, 0.6);
    margin-left: 10px !important;
`;

const ChatHeader = ({ person }) => {  

    const url = person.picture || defaultProfilePicture;
    
    const { activeUsers } = useContext(AccountContext);

    return (
        <Header>
            <Image src={url} alt="display picture" />     
            <Box>
                <Name>{person.name}</Name>
                <Status>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Status>    
            </Box>   
            <RightContainer>
                <Search />
                <MoreVert />    
            </RightContainer> 
        </Header>
    )
}

export default ChatHeader;