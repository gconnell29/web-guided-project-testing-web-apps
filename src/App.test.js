import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test("renders App without errors", ()=>{
    render(<App />);
});

test("renders App header", ()=> {
    //Arrange: render our App component
    //Act: get our header DOM
    //Assert: Make sure that the header actually exists
});