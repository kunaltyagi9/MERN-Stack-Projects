import { Box, styled, Input, Button, Typography, InputAdornment, IconButton  } from '@mui/material';

export const Component = styled(Box)`
    height: 100vh;
    width: 100vw;
    background: #FAFAFA;
`;

export const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 32px;
`;

export const AccountBox = styled(Box)`
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    width: 350px;
    align-items: center;
    margin-top: 12px;
    border: 1px solid #dbdbdb;
`;

export const DisplayText = styled(Typography)`
    color: #8e8e8e;
    font-size: 17px;
    font-weight: 600;
    margin: 0 36px 20px 36px;
    text-align: center;
    line-height: 20px;
`

export const InputTextField = styled(Input)`
    height: 38px;
    font-size: 14px;
    background: #FAFAFA;
    padding: 9px 0 7px 8px;
    width: 80%;
    margin-bottom: 6px;
    border: 1px solid #dbdbdb;
    &:before, &:hover, &:after {
        border-bottom: none !important;
    }
`;

export const TncText = styled(Typography)`
    font-size: 13px;
    color: #8e8e8e;
    margin: 0 45px;
    text-align: center; 
    margin-bottom: 20px;
`;

export const StyledButton = styled(Button)`
    width: 80%;
    background-color: #0095f6;
    box-shadow: none;
    text-transform: none;
    font-size: 14px;
    height: 30px;
    margin: 10px 0 15px 0;
`;

export const StyledText = styled(Typography)`
    font-size: 14px;
    color: #262626;
`;

export const ExtraBox = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 350px;
    align-items: center;
    margin-top: 20px;
    & > p {
        color: #262626;
        font-size: 14px;
        margin-bottom: 15px;
    };
    & > div > img {
        height: 40px;
        margin: 5px;
    }
`;

export const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

