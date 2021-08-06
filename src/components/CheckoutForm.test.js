import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";


// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    render(<CheckoutForm />);
  const mainHeader = screen.getByText('Checkout Form')
  expect(mainHeader).toBeInTheDocument()

});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const firstName = screen.getByLabelText(/First Name:/i)
    const lastName = screen.getByLabelText(/Last Name/i);
    const address = screen.getByLabelText(/Address/i);
    const city = screen.getByLabelText(/City/i);
    const state = screen.getByLabelText(/State/i);
    const zip = screen.getByLabelText(/Zip/i);
    const button = screen.getByRole('button');
    //  adding userEvent to check this test
    
    userEvent.type(firstName, 'Rimsha');
    userEvent.type(lastName, 'Saleem');
    userEvent.type(address, '356 41st Avenue');
    userEvent.type(city,'Richmond');
    userEvent.type(state, 'California');
    userEvent.type(zip, '2345');
    userEvent.click(button);
    const successForm = screen.getByText(/You have ordered some plants! Woo-hoo!/i)
    expect(successForm).toBeInTheDocument();

});
