
import { Typography, Box, styled } from "@mui/material";
import { Delete } from '@mui/icons-material';

// import { deleteComment } from '../../../service/api';

const Component = styled(Box)`
    margin-top: 30px;
    background: #F5F5F5;
    padding: 10px;
`;

const Container = styled(Box)`
    display: flex;
    margin-bottom: 5px;
`;

const Name = styled(Typography)`
    font-weight: 600,
    font-size: 18px;
    margin-right: 20px;
`;

const Date = styled(Typography)`
    font-size: 14px;
    color: #878787;
`;

const DeleteIcon = styled(Delete)`
    margin-left: auto;
`;

const Comment = ({ comment, setToggle }) => {
    
    const removeComment = async () => {
    //    await deleteComment(comment._id) ;
       setToggle(prev => !prev);
    }

    return (
        <Component>
            <Container>
                <Name>{comment.name}</Name>
                <Date>{new Date(comment.date).toDateString()}</Date>
                <DeleteIcon onClick={() => removeComment()} />
            </Container>
            <Typography>{comment.comments}</Typography>
        </Component>
    )
}

export default Comment;