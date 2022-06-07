import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './index.css'
=======
import './index.scss';
>>>>>>> 80bd8980865b4f9179c4fb95dc3a1c4fc95ae16a
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <BrowserRouter>
            <App/>
        </BrowserRouter>

    </React.StrictMode>
);

