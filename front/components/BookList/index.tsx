import React from "react";
import {
Paper,
Stack,
Button,

} from '@mui/material';
import BookBox from '@components/BookBox';

const span_style = { paddingLeft: "10px", fontSize: '22px'};

const BookList = () => {
    return (
        <div>
            <Paper 
            elevation={24} 
            sx={{
            padding: "0px 20px",
            paddingBottom: "10px",
            borderRadius: "4px",
            }}>
            <Button variant="contained" sx={{margin:"10px 0px", padding: '0px 16px 0px 0px'}}> 
                <img src="https://s.pstatic.net/static/www/mobile/edit/20210820/upload_1629449848764Bm0Nv.png" 
                alt="교보문고" 
                width="36" 
                height="36"
                />
                <span style={span_style}> 교보문고</span> 
            </Button>
            <Stack direction="column" spacing={2}>
                <BookBox/>
                <BookBox/>
                <BookBox/>
                <BookBox/>
            </Stack>
            </Paper>
        </div>
    )
}

export default BookList; 