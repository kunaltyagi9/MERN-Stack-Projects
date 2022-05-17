
import { AppBar, Toolbar, styled, InputBase, Box } from '@mui/material';
import { Home, AddBoxOutlined, ExploreOutlined, FavoriteBorderOutlined, ChatBubbleOutlineOutlined, Search as SearchIcon } from '@mui/icons-material';

import { instagramLogo, emptyprofilePicture } from '../../constants/data';

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

const SearchIconWrapper = styled(Box)`
    padding: 5px;
    display: flex;
    color: rgb(142, 142, 142);
    background: #efefef;
    font-size: 16px;
    padding: 2px 16px;
    width: 230px;
    border-radius: 8px;
    align-items: center;
`;

const Header = () => {

    
    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: 60 }}>
                <Component>
                    <img src={instagramLogo} alt="logo" style={{ height: 30, marginRight: 180 }} />
                    <SearchIconWrapper>   
                        <SearchIcon />
                        <InputBase placeholder="Search" />
                    </SearchIconWrapper>                    
                    <Wrapper>
                        <Home />
                        <ChatBubbleOutlineOutlined />
                        <AddBoxOutlined />
                        <ExploreOutlined />
                        <FavoriteBorderOutlined />
                        <img src={emptyprofilePicture} alt="display picture" />
                    </Wrapper>
                </Component>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;