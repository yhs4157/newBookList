import React from 'react'; 
import {faker} from '@faker-js/faker';
import { 
Container,
Button,
Checkbox,
} from '@mui/material';
import { sortAndDeduplicateDiagnostics } from 'typescript';

import {createStyles} from '@mui/material/styles';

interface BookInfo {
    id: string; 
    title: string; 
    author : string; 
    company: string; 
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
        company: faker.name.fullName(),
        price : faker.commerce.price(), 
        cover : faker.image.image(), 
        isBookMart : false, 
        isMille : false, 
        isRead : false, 
        isBan : false, 
    };
}

const dummyData: BookInfo = createRandomBookBox(); 

const cover_style = {border: '1px solid', marginRight: '2px',};
const detail_style = {width: '258px', paddingTop: '5px'};
const button_style = {display: 'grid', gap: '10px', /*flexDirection: 'column',*/ alignContent: 'center'};
// theme을 통해서 해결 가능하나 theme이 뭔지를 내가 모름. 
  

const title = { fontSize: '18px', fontWeight: 'solid', paddingRight: '4px'};
const maker = { fontSize: '11px', fontColor:'gray'};
const price = {};

const BookBox = () => {
    return (
        <div>
            <Container 
            sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                width: '400px', 
                height:'176px', 
                gap:'20px', 
                border: '1px solid',
                borderColor: 'gray', 
                borderRadius: '4px',
                paddingLeft: '0px', 
                ['@media (min-width:600px)']: { // 야매로 해결 조금 더 조사가 필요하다. 
                    paddingLeft: '0px', 
                  }
                }}>
                <div className="cover" style={cover_style}>
                    <img 
                    src = {dummyData.cover} 
                    style={{
                        width: '123px', 
                        height: '172px',
                        border: 5,
                        }}/>
                </div>
                <div className="detail" style={detail_style}>
                    <div className="title" style={title}>{dummyData.title}</div>
                    <div className="maker" style={maker}>{dummyData.author} | {dummyData.company}</div>
                    <div className="price">{dummyData.price}</div>
                </div>
                <hr />
                <div className="button" style={button_style}>
                    <span>
                        <Button variant="outlined">Outlined</Button>

                    </span>
                    <span>
                        <Button variant="outlined">Outlined</Button>

                    </span>
                </div>
            </Container>
        </div>
    )
}

export default BookBox; 