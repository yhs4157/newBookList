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
    open : boolean; 
    // anchorEl : VirtualElement;
};

const UserModal:FC<Props> = ({open}) => {
    const [User, setUser] = useState('');
    const [Avatar, setAvatar] = useState(''); 

    return (
        <div>
            <Popper
            open={open}
            >
                <Box>
                    Test
                </Box>
            </Popper>
        </div>
    )
}

export default UserModal; 