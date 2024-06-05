import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';
import './styles/output.css'
import './styles/index.css';
import './styles/color.css'
// import './css/main.css';

const container = document.getElementById('root');
const root = createRoot(container!)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <StyledEngineProvider injectFirst>
                <App />
            </StyledEngineProvider>
        </BrowserRouter>
    </React.StrictMode>
);
