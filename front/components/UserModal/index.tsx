import React, {FC, useState} from 'react'; 
import {
Popper,
Box,
} from '@mui/material';

type VirtualElement = {
    getBoundingClientRect: () => ClientRect | DOMRect,
    contextElement?: Element,
};  

interface Props {
    id : "simple-popper" | undefined; 
    open: boolean;  
    anchorEl : null | HTMLElement;
};

const UserModal:FC<Props> = ({id, open, anchorEl}) => {
    const [User, setUser] = useState('');
    const [Avatar, setAvatar] = useState('');
    
    return (
        <div>
            <Popper 
            id={id} 
            open={open} 
            anchorEl={anchorEl}
            sx={{zIndex: "100000"}}
            >
                <Box sx={{backgroundColor: "white", width: "300px", height: "300px"}}>
                    Testaskldjflkajs;dlkfj;lajksdf
                    asjdkl;fja;lksjdfkl;ja;lsdf
                    ajksdjf;lkajs;kl
                </Box>
            </Popper>
        </div>
    )
}

export default UserModal; 