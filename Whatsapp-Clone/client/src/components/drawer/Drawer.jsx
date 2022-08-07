import { styled, Drawer, Box, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

//components
import Profile from './Profile';

const Header = styled(Box)`
  background: #00bfa5;
  height: 97px;
  color: #FFFFFF;
  display: flex;
  & > svg, & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
`;

const Component = styled(Box) `
  background: #ededed;
  height: 85%;
`;

const drawerStyle = {
  left: 62,
  top: 17,
  height: '95%',
  width: '25%',
  boxShadow: 'none'
}

const InfoDrawer = ({ open, setOpen, profile }) => {
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Drawer 
      open={open} 
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <Header>
        <ArrowBack onClick={() => setOpen(false)}/>
        <Typography>Profile</Typography>
      </Header>
      <Component>
        { profile && <Profile /> }
      </Component>
    </Drawer>
  );
}

export default InfoDrawer;