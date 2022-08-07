import { useContext, useState } from 'react';

import { Box, styled } from '@mui/material';
import { Chat as MessageIcon } from '@mui/icons-material';

import { AccountContext } from '../../../context/AccountProvider';

//components
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/Drawer';

const Component = styled(Box)`
    height: 35px;
    background: #ededed;
    display: flex;
    padding: 10px 16px;
    align-items: center;
`;

const Wrapper = styled(Box) `
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #919191;
    };
    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`;
    
const Image = styled('img') ({
    height: 37,
    width: 37,
    borderRadius: '50%'
})

const Header = () => {
    
    const [openDrawer, setOpenDrawer] = useState(false);

    const { account } = useContext(AccountContext);
    
    const toggleDrawer = () => {
        setOpenDrawer(true);
    }

    return (
        <>
            <Component>
                <Image src={account.picture} onClick={() => toggleDrawer()} />
                <Wrapper>
                    <MessageIcon />
                    <HeaderMenu/>
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
        </>
    )
}

export default Header;