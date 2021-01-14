import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test("renders App without errors", ()=>{
    render(<App />);
});

test("renders App header", ()=> {
    //Arrange: render our App component
    const appInterface = render(<App />);

    console.log(appInterface);

    //Act: get our header DOM
    // const header = screen.queryByText("Add New Animal");
    // const header = screen.queryByTestId("header");
    // const header = screen.getByText(/add new animal/i);

    //Assert: Make sure that the header actually exists
});