import { useState } from "react";

import { InputBase, Box, List, ListItem, styled, Typography } from "@mui/material";
import { Search as SearchIcon } from '@mui/icons-material';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import { getUsers } from "../../redux/features/userSlice";
import { emptyprofilePicture } from "../../constants/data";
import { routePath } from "../../constants/route";


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
    position: 'relative'
`;

const ListWrapper = styled(List)`
    position: absolute;
    color: #000;
    background: #FFFFFF;
    top: 60px;
    width: 380px;
    transform: translateX(-20%);
    border-radius: 6px;
    overflow-x: hidden;
    overflow-y: auto;
    box-shadow: 0 0 5px rgba(0, 0, 0, .0975);
`;

const Container = styled(Box)`
    display: flex;
`;

const Image = styled('img')({
    width: 44,
    height: 44,
    borderRadius: '50%'
});

const Wrapper = styled('Box')`
    margin-left: 10px;
    & > * {
        font-size: 14px;
    }
    & :first-child {
        font-weight: 700;
    }
`


export const Search = () => {
    const [text, setText] = useState('');
    const [hidden, setHidden] = useState(true);

    const users = useSelector(getUsers);

    const getText = (text) => {
        setText(text);
        setHidden(false)
    }

    return (
        <SearchIconWrapper>
            <SearchIcon />
            <InputBase
                placeholder="Search"
                onChange={(e) => getText(e.target.value)}
            />
            {
                text &&
                <ListWrapper hidden={hidden}>
                    {
                        users.filter(user => user.name.toLowerCase().includes(text.toLowerCase())).map(user => (
                            <ListItem>
                                <Link
                                    to={`${routePath.profile}/${user.username}`}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                    onClick={() => setHidden(true)}
                                >
                                    <Container>
                                        <Image src={emptyprofilePicture} alt="dp" />
                                        <Wrapper>
                                            <Typography>{user.username}</Typography>
                                            <Typography>{user.name}</Typography>
                                        </Wrapper>
                                    </Container>
                                </Link>
                            </ListItem>
                        ))
                    }
                </ListWrapper>
            }
        </SearchIconWrapper>
    )
}

export default Search;