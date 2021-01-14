import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test("renders App without errors", ()=>{
    render(<App />);
});

test("renders App header", ()=> {
    //Arrange: render our App component
    render(<App />);

    //Act: get our header DOM
    // const header = screen.queryByText("Add New Animal");
    // const header = screen.queryByTestId("header");
    let header = screen.queryByText(/add new animal/i);

    //Assert: Make sure that the header actually exists

});