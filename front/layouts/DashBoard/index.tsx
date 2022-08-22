import React from 'react'; 
import {IconButton, Paper, Toolbar, Typography, Button, AppBar} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const DashBoard = () => {
    return (
        <div>
            <Paper elevation={3} sx={{m: 2}}>
                <AppBar>
                    <Toolbar>
                        <Typography noWrap={true} variant="h6">Test 테스트 .</Typography>
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