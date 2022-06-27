import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Inputs from '../SignUp/Inputs'
import userEvent from '@testing-library/user-event'


describe('<Inputs />', () => {
    test('Should render first + last name of the user', () => {
        render(<Inputs />)
        const firstNameInput = screen.getByTestId('first-name-input')
        const lastNameInput = screen.getByTestId('last-name-input')

        fireEvent.change(firstNameInput, {target: {value: 'Peter'}})
        fireEvent.change(lastNameInput, {target: {value: 'Jr.'}})

        expect(firstNameInput.value).toBe('Peter')
        expect(lastNameInput.value).toBe('Jr.')
    })
    test('Should accept user\'s email', () => {
        render(<Inputs />)
        const emailInput = screen.getByTestId("email-input")
        expect(emailInput.textContent).toMatch('')
        fireEvent.change(emailInput, {target: {textContent: 'test@gmail.com'}})
        expect(emailInput.textContent).toBe("test@gmail.com")
    })
    test('Password field should accept user\'s password', () => {
        render(<Inputs />)
        const passwordInput = screen.getByTestId('password-input')
        expect(passwordInput).toHaveAttribute('type', 'password')
    })
    test('Submiting the form', () => {
        render(<Inputs />)
        const submitButton = screen.getByTestId('submit-button')
        const emailInput = screen.getByTestId("email-input")
        const passwordInput = screen.getByTestId("password-input")

        userEvent.type(emailInput, 'test@gmail.com')
        userEvent.type(passwordInput, 'Abcdefgh')
        userEvent.click(submitButton)

        expect(emailInput.value).toMatch('')
        expect(passwordInput.value).toMatch('')
    })
})