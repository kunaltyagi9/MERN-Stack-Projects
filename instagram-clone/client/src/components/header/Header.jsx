import { useState } from 'react';

import { AppBar, Toolbar, styled, Box } from '@mui/material';
import { Home, AddBoxOutlined, ExploreOutlined, FavoriteBorderOutlined, ChatBubbleOutlineOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { instagramLogo, emptyprofilePicture } from '../../constants/data';
import { routePath } from '../../constants/route';
import { getUser } from '../../redux/features/userSlice';

// components
import Search from './Search';
import CreatePost from '../post/CreatePost';

const StyledHeader = styled(AppBar)`
    background: #FFFFFF;
    border-bottom: 1px solid #dbdbdb;
    box-shadow: none;
    height: 60px;
    align-items: center;
`;

const Component = styled(Box)`
    width: 935px;
    display: flex;
    justify-content: space-between;
    align-items: center
`;

const Wrapper = styled(Box)`
    & > svg {
        color: #000;
        font-size: 28px;
        padding: 0 10px;
    }
    & > img  {
        height: 24px;
        border-radius: 50%;
        padding: 0 10px;
    }
`;

const Header = () => {

    const [open, setOpen] = useState(false);

    const user = useSelector(getUser);

    const navigate = useNavigate();
    
    return (
        <>
            <StyledHeader>
                <Toolbar style={{ minHeight: 60 }}>
                    <Component>
                        <img 
                            src={instagramLogo} 
                            alt="logo" 
                            style={{ height: 30, marginRight: 180 }} 
                            onClick={() => navigate(routePath.home)}
                        />
                        <Search />         
                        <Wrapper>
                            <Home onClick={() => navigate(routePath.home)} />
                            <ChatBubbleOutlineOutlined />
                            <AddBoxOutlined onClick={() => setOpen(true)} />
                            <ExploreOutlined />
                            <FavoriteBorderOutlined />
                            <img 
                                src={emptyprofilePicture} 
                                alt="display picture" 
                                onClick={() => navigate(`${routePath.profile}/${user.username}`)} 
                            />
                        </Wrapper>
                    </Component>
                </Toolbar>
            </StyledHeader>
            <CreatePost 
                open={open}
                setOpen={setOpen}
            />
        </>
    )
}

export default Header;