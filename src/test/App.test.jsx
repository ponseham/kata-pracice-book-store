import { render, screen } from '@testing-library/react'
import App from '../App'
import * as TESTING_CONSTANTS from '../constants/testingConstants'

describe('Book Store', () => {
    test('Show book store header', () => {
        render(<App />)
        expect(screen.getByText(TESTING_CONSTANTS.TEST_STORE_HEADER_TITLE)).toBeInTheDocument()
    })
})