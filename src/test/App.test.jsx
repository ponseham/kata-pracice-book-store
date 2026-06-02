import { render, screen } from '@testing-library/react'
import App from '../App'
import { TEST_BOOKS, TEST_HEADER, TEST_BOOK_PRICE, TEST_CURRENCY_LABEL, TEST_MIX_AND_SAVE_TEXT, TEST_DISCOUNT_INFO_TEXT, TEST_BASKET_SECTION_TITLE, TEST_BASKET_EMPTY_MESSAGE } from '../constants/testingConstants'
import { } from '../constants/testingConstants'

describe('Book Store', () => {
    test('Show book store header', () => {
        render(<App />)
        expect(screen.getByText(TEST_HEADER.STORE_HEADER_TITLE)).toBeInTheDocument()
    })

    test('Show all books information as card', () => {
        render(<App />)
        let authorNames = [];
        TEST_BOOKS.forEach(book => {
            const image = screen.getByAltText(book.title)
            expect(image.src).toContain('/images');
            expect(image).toBeInTheDocument()
            expect(image).toHaveAttribute('src', book.coverUrl)
            expect(screen.getByText(book.title)).toBeInTheDocument()
            authorNames[book.author] ? authorNames[book.author] = authorNames[book.author] + 1 : authorNames[book.author] = 1;
        })
        authorNames.forEach((count, names) => {
            expect(screen.getAllByText(names).length).toBe(count)
        })
        const prices = screen.getAllByText(`${TEST_BOOK_PRICE} ${TEST_CURRENCY_LABEL}`)
        expect(prices).toHaveLength(TEST_BOOKS.length)
    })
    test('Show discount related details in footer', () => {
        render(<App />)
        expect(screen.getByText(TEST_MIX_AND_SAVE_TEXT)).toBeInTheDocument()
        expect(screen.getByText(TEST_DISCOUNT_INFO_TEXT)).toBeInTheDocument()
    })
    test('Show basket is empty at the start', () => {
        render(<App />)
        expect(screen.getByText(TEST_BASKET_SECTION_TITLE)).toBeInTheDocument()
        expect(screen.getByText(TEST_BASKET_EMPTY_MESSAGE)).toBeInTheDocument()
    })
})



