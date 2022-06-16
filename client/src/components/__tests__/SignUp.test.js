import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SignUp from '../SignUp/SignUp' 

let names = []

function initalizeName(){
    names.push('Peter')
}
function isAvaiableName(name) {
    return names.includes(name)
}
beforeAll(() => {
    initalizeName()
})

describe('Sign up components', () => {
    test('render out radio buttons length', () => {
        render(<SignUp />)
        const radioButtons = screen.getAllByTestId('radio-button')
        expect(radioButtons).toHaveLength(2)
    })
    test('testing mock data base', () => {
        expect(isAvaiableName('Peter')).toBeTruthy()
        expect(names).toHaveLength(1)
    })
})
