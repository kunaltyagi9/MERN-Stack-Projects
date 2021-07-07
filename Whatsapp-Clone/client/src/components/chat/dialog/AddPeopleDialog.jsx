// import { useState, useEffect, useContext } from 'react';
// import { Dialog } from '@material-ui/core';
// import { makeStyles, InputBase, Box, Button } from '@material-ui/core';

// import { uploadFile, addPeople, setConversation } from '../../../service/api';
// import { AccountContext } from '../../../context/AccountProvider';

// const useStyle = makeStyles({
//     dialog: {
//         padding: '30px 50px',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         '& > *': {
//             marginTop: 10
//         }
//     },
//     displayPicture: {
//         width: 100,
//         height: 100,
//         border: '1px solid #878787',
//         borderRadius: '50%',
//         marginRight: 20,
//         '&:hover': {
//             opacity: 0.6
//         }
//     }
// })

// const values = {
//     name: '',
//     picture: '',
// }

// const AppPeopleDialog = ({ open, setOpen }) => {
//     const classes = useStyle();

//     const [person, setPerson] = useState(values);
//     const [file, setFile] = useState('');
//     const [imageURL, setImageURL] = useState('');
    
//     const { account } = useContext(AccountContext);

//     const url = imageURL || 'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png';

//     useEffect(() => {
//         const getImage = async () => { 
//             if(file) {
//                 const data = new FormData();
//                 data.append("name", file.name);
//                 data.append("file", file);
                
//                 const image = await uploadFile(data);
//                 person.picture = image.data;
//                 setImageURL(image.data);
//             }
//         }
//         getImage();
//     }, [file])

//     const handleClose = () => {
//         setOpen(false)
//     }

//     const setDetails = (e) => {
//         setPerson({ ...person, [e.target.name]: e.target.value })
//     }

//     const setConversationDetails = async (id) => {
//         await setConversation({ senderId: account.userId, receiverId: id });
//     }

//     const addPerson = async () => {
//         let id = await addPeople(person);
//         setConversationDetails(id);
//         setOpen(false)
//     }

//     return (
//         <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
//             <Box className={classes.dialog}>
//                 <label htmlFor="fileInput">
//                     <img src={url} alt="display picture" className={classes.displayPicture} />
//                 </label>
//                 <input
//                     type="file"
//                     id="fileInput"
//                     style={{ display: "none" }}
//                     onChange={(e) => setFile(e.target.files[0])}
//                 />

//                 <InputBase onChange={(e) => setDetails(e)} name='name' placeholder="Name" className={classes.textfield} />
//                 <Button onClick={() => addPerson()} color="inherit" variant="contained" style={{width: '100%'}}>Add</Button>
//             </Box>
//         </Dialog>
//     )
// }

// export default AppPeopleDialog;