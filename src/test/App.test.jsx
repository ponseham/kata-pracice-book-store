import { render, screen } from '@testing-library/react'
import App from '../App'
import { HEADER } from '../constants/books'

describe('Book Store', () => {
    test('Show book store header', () => {
        render(<App />)
        expect(screen.getByText(HEADER.STORE_HEADER_TITLE)).toBeInTheDocument()
    })
})