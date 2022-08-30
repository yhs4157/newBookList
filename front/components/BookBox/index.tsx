import React from 'react'; 
import {faker} from '@faker-js/faker';
import { 
Container,
Box,
Checkbox,
} from '@mui/material';
import { sortAndDeduplicateDiagnostics } from 'typescript';

interface BookInfo {
    id: string; 
    title: string; 
    author : string; 
    price : string; 
    cover : string; 
    isBookMart : boolean; 
    isMille : boolean; 
    isRead : boolean; 
    isBan : boolean; 
}

const createRandomBookBox = ()  => {
    return {
        id: faker.datatype.uuid(), 
        title: faker.name.fullName(),
        author : faker.name.fullName(), 
        price : faker.commerce.price(), 
        cover : faker.image.image(), 
        isBookMart : false, 
        isMille : false, 
        isRead : false, 
        isBan : false, 
    };
}

const dummyData: BookInfo = createRandomBookBox(); 

const BookBox = () => {
    return (
        <div>
            <Container fixed sx={{display: 'flex' }}>
                <div>
                    <img 
                    src = {dummyData.cover} 
                    style={{
                        width: 125, 
                        height: 208,
                        padding: 20,
                        border: 5,
                        }}/>
                </div>
                <div>
                    <div>{dummyData.title}</div>
                    <div>{dummyData.author}</div>
                    <div>{dummyData.price}</div>
                </div>
                <div>
                    <span>
                        {dummyData.isRead ? 
                        <Checkbox/> 
                        : <Checkbox defaultChecked />}
                    </span>
                    <span>
                        {dummyData.isBan ? 
                        <Checkbox/> 
                        : <Checkbox defaultChecked />}
                    </span>
                </div>
            </Container>
        </div>
    )
}

export default BookBox; 