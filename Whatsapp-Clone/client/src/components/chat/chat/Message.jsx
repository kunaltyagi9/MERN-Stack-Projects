import { useContext, useState, useEffect } from 'react';

import { Box, makeStyles, Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

import { AccountContext } from '../../../context/AccountProvider';

import { downloadMedia, formatDate } from '../../../utils/common-utils';
import { iconPDF } from '../../../constants/data';

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
    
    return (
        <>
            <Typography className={classes.text}>{message.text}</Typography>
            <Typography className={classes.time}>
                {formatDate(message.createdAt)}
            </Typography>
        </>
    )
}

const ImageMessage = ({ message }) => {
    
    const classes = useStyles();

    return (
        <div style={{ position: 'relative' }}>
            {
                message?.text?.includes('.pdf') ?
                    <div style={{ display: 'flex' }}>
                        <img src={iconPDF} alt="pdf-icon" style={{ width: 80 }} />
                        <Typography style={{ fontSize: 14 }} >{message.text.split("/").pop()}</Typography>
                    </div>
                : 
                    <img style={{ width: 300, height: '100%', objectFit: 'cover' }} src={message.text} alt={message.text} />
            }
            <Typography className={classes.time} style={{ position: 'absolute', bottom: 0, right: 0 }}>
                <GetAppIcon 
                    onClick={(e) => downloadMedia(e, message.text)} 
                    fontSize='small' 
                    style={{ marginRight: 10, border: '1px solid grey', borderRadius: '50%' }} 
                />
                {formatDate(message.createdAt)}
            </Typography>
        </div>
    )
}


export default Message;