import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './styles/index.css';
import './styles/color.css'
import './styles/output.css'
import App from './App';
import './css/main.css';

const container = document.getElementById('root');
const root = createRoot(container!)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
