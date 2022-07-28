import { useEffect } from 'react';

import { EmojiEmotions, AttachFile, Mic } from '@material-ui/icons';
import { Box, makeStyles, InputBase } from '@material-ui/core';

import { uploadFile } from '../../../service/api';

const useStyles = makeStyles((theme) => ({
    footer: {
        height: '55px',
        background: '#ededed',
        // position: 'absolute',
        width: '100%',
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        padding: '0 15px',
        '&  >*': {
            margin: 5,
            color: '#919191'
        }
    },
    search: {
        borderRadius: 18,
        backgroundColor: '#FFFFFF',
        width: 'calc(94% - 100px)'
    },
    inputRoot: {
        width: '100%'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: 25,
        fontSize: 14,
        height: 20,
        width: '100%'
    },
    clipIcon: {
        transform: 'rotate(40deg)'
    }
}));


const Footer = ({ sendText, value, setValue, setFile, file, setImage }) => {
    const classes = useStyles();

    useEffect(() => {
        const getImage = async () => { 
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                const response = await uploadFile(data);
                setImage(response.data);
            }
        }
        getImage();
    }, [file])

    const onFileChange = (e) => {
        setValue(e.target.files[0].name);
        setFile(e.target.files[0]);
    }

    return (
        <Box className={classes.footer}>
            <EmojiEmotions />
            <label htmlFor="fileInput">
                <AttachFile className={classes.clipIcon} />
            </label>
            <input
                type='file'
                id="fileInput"
                style={{ display: 'none' }}
                onChange={(e) => onFileChange(e)}
            />

            <Box className={classes.search}>
                <InputBase
                    placeholder="Type a message"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e) => sendText(e)}
                    value={value}
                />
            </Box>
            <Mic />
        </Box>
    )
}

export default Footer;