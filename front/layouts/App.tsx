import React, {FC} from 'react'; 
import {Routes, Route} from 'react-router-dom';
import Homepage from '@pages/app'; 
import Test from '@pages/test_material';

const App: FC = () => {
    return (
        <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/test" element={<Test/>} />
        </Routes>
    )
}

export default App; 