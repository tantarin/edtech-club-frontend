import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders app with header', () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    const headerElement = screen.getByText(/Header/i);
    expect(headerElement).toBeInTheDocument();
});
