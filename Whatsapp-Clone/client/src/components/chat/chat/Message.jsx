import { useContext, useState, useEffect } from 'react';

import { Box, makeStyles, Typography } from '@material-ui/core';
import { AccountContext } from '../../../context/AccountProvider';

const useStyles = makeStyles({
    wrapper: {
        background: '#FFFFFF',
        padding: 5,
        maxWidth: '60%',
        width: 'fit-content',
        display: 'flex',
        borderRadius: 10,
        wordBreak: 'break-word'
    },
    own: {
        background: '#dcf8c6',
        padding: 5,
        maxWidth: '60%',
        width: 'fit-content',
        marginLeft: 'auto',
        display: 'flex',
        borderRadius: 10,
        wordBreak: 'break-word'
    },
    text: {
        fontSize: 14,
        padding: '0 25px 0 5px'
    },
    time: {
        fontSize: 10,
        color: '#919191',
        marginTop: 6,
        wordBreak: 'keep-all',
        marginTop: 'auto'
    }
})

const Message = ({ message }) => {
    const classes = useStyles();
    const { account } = useContext(AccountContext);

    return (
        <Box className={account.sub === message.senderId ? classes.own : classes.wrapper}>
            {
                message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
            }
        </Box>
    )
}

const TextMessage = ({ message }) => {

    const classes = useStyles();
    
    const formatDate = (date) => {
        return date < 10 ? '0' + date : date;
    }

    return (
        <>
            <Typography className={classes.text}>{message.text}</Typography>
            <Typography className={classes.time}>
                {formatDate(new Date(message.createdAt).getHours())}:{formatDate(new Date(message.createdAt).getMinutes())}
            </Typography>
        </>
    )
}

const ImageMessage = ({ message }) => {
    
    return (
        <img style={{ width: 150 }} src={message.text} alt={message.text} />
    )
}


export default Message;