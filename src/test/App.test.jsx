import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'
import { BOOKS, BOOK_PRICE } from '../books';

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
    test('Show all books info', () => {
        render(<App />)
        BOOKS.forEach(book => {
            expect(screen.getByText(book.title)).toBeInTheDocument()
        })
        const authors = screen.getAllByText("Robert C. Martin")
        expect(authors.length).toBe(3)
        const prices = screen.getAllByText(`${BOOK_PRICE} EUR`)
        expect(prices).toHaveLength(BOOKS.length)
    })
    test('Show discount related details in footer', () => {
        render(<App />)
        expect(screen.getByText(/Mix & Save:/i)).toBeInTheDocument()
    })
});
