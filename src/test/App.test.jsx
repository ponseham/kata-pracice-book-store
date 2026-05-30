import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'
import { BOOKS } from '../books';

describe("Book Store", () => {
    test('Show book store header', () => {
        render(<App />)
        expect(screen.getByText('Books Store')).toBeInTheDocument()
    })
    test('Show all book images', () => {
        render(<App />)

        BOOKS.forEach(book => {
            const image = screen.getByAltText(book.title)
            expect(image).toBeInTheDocument()
            expect(image).toHaveAttribute('src', book.coverUrl)
        })
    })
});
