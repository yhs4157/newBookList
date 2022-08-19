import React from 'react'; 
import {render} from 'react-dom'; 
import App from '@layouts/App';
import {BrowserRouter} from 'react-router-dom';
import {createRoot} from'react-dom/client';

const container = document.getElementById('app'); 
const root = createRoot(container!); 
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

/**
 * import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
 */