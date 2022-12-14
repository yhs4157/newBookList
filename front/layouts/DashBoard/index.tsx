import React, {useState, useCallback} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

import BookList from '@components/BookList';
import {
  Grid, 
  Paper,
  Container,
  Stack,
} from '@mui/material';

import { USERS } from '@pages/test'; 
import UserModal from '@components/UserModal';

const drawerWidth = 240;


console.log(USERS); 

const DashBoard = () => {
    const [openMenu, setOpenMenu] = useState(false); 
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [userPopperAnchorEl, setUserAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleUserPopperAnchorEl = (event: React.MouseEvent<HTMLElement>) => {
      setUserAnchorEl(userPopperAnchorEl ? null : event.currentTarget);
    };

    const userPopperOpen = Boolean(userPopperAnchorEl);
    const userPopperId = userPopperOpen ? 'simple-popper' : undefined;

    const [openUserModal, setOpenUserModal] = useState(false); 

    const onClickOpen = useCallback((e:any) => {
        setOpenMenu((prev) => !prev);
    }, []);

  const CloseUserModal = useCallback(() => {
    setOpenUserModal((prev) => !prev)
  }, []);

  const ToggleUserModal = useCallback(() => {
    setOpenUserModal(true);
  }, []);

  const handleMenu = useCallback(() => {}, []);
  const handleCloseMenu = useCallback(() => {}, []);
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{zIndex: "auto"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onClickOpen}
            edge="start"
            // sx={{ mr: 2, ...(open && { display: 'none' }) }}
            component="div"
          >
            <MenuIcon />
          </IconButton>
          <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1 }}
          // flex-grow??? ?????? Typography??? ????????? ????????? ?????????. 
          >
            Clipped drawer
          </Typography>
          <div>
              <IconButton
                id={userPopperId}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleUserPopperAnchorEl}
                color="inherit"
              >
                <AccountCircle 
                id="userIcon"
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
              </Menu>
            </div>
        </Toolbar>
                <UserModal 
                id={userPopperId} 
                open={userPopperOpen} 
                anchorEl={userPopperAnchorEl}/>
      </AppBar>
      {
      openMenu && 
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      }
      <Container fixed component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar/>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={10}
          sx={{ 
            flexGrow: 1, 
            flexShrink: 1, 
            height: "100vh", 
            width: "100vw",
          }}
          >
          <BookList/>
          <BookList/>
          <BookList/>
          <BookList/>
          <BookList/>
        </Stack>
        <Toolbar/>
      </Container>
    </Box>
  );
}

export default DashBoard; 

/**
import React from 'react'; 
import {IconButton, Paper, Toolbar, Typography, Button, AppBar} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const DashBoard = () => {
    return (
        <div>
            <Paper elevation={3} sx={{m: 2}}>
                <AppBar>
                    <Toolbar>
                        <Typography noWrap={true} variant="h6">Test ????????? .</Typography>
                        <IconButton>
                            <NotificationsIcon />
                        </IconButton>
                        <Button>Test</Button>
                    </Toolbar>
                </AppBar>
            </Paper>
        </div>
    )
}

export default DashBoard; 

*/

/**
 * MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit 
 * MuiIconButton-edgeStart MuiIconButton-sizeMedium 
 * css-134qg7o-MuiButtonBase-root-MuiIconButton-root
 * 
 * MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit
 *  MuiIconButton-edgeStart MuiIconButton-sizeMedium
 *  css-13k3028-MuiButtonBase-root-MuiIconButton-root
 */

/**
 * <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>


        const [userAnchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

        const handleClick = (event: React.MouseEvent<HTMLElement>) => {
          setAnchorEl(anchorEl ? null : event.currentTarget);
        };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          The content of the Popper.
        </Box>
      </Popper>
    </div>
  );
 */