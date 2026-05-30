import { test, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
    test('Show basket is empty at the start', () => {
        render(<App />)
        expect(screen.getByText(/your basket is empty/i)).toBeInTheDocument()
    })
    test("Showing the Add book to basket button for all books", () => {
        render(<App />);
        const buttons = screen.getAllByText("+Add");
        expect(buttons.length).toBe(5);
    });
    test("When add book to basket should show books name in basket", async () => {
        render(<App />);
        const buttons = screen.getAllByText("+Add");
        await userEvent.click(buttons[0])
        await userEvent.click(buttons[1])
        await userEvent.click(buttons[2])
        await userEvent.click(buttons[3])
        await userEvent.click(buttons[4])
        const basketItems = screen.getAllByTestId('basket-item')
        expect(basketItems).toHaveLength(5)
        BOOKS.forEach(book => {
            expect(screen.getAllByText(book.title).length).toBeGreaterThan(1)
        })
    });

    test("When add same book multipile times show quantity near book name", async () => {
        render(<App />);
        const buttons = screen.getAllByText("+Add");
        await userEvent.click(buttons[1])
        await userEvent.click(buttons[1])
        expect(screen.getAllByText('The Clean Coder').length).toBeGreaterThan(1)
        expect(screen.getByText('×2')).toBeInTheDocument()
    });

    test("Show remove button for the basket book items", async () => {
        render(<App />);
        const buttons = screen.getAllByText("+Add");
        await userEvent.click(buttons[1])
        await userEvent.click(buttons[2])
        expect(screen.getAllByText('X').length).toBe(2)
    });
    test("When click remove button delete items from basket", async () => {
        render(<App />);
        const buttons = screen.getAllByText("+Add");
        await userEvent.click(buttons[1])
        await userEvent.click(buttons[1])
        expect(screen.getAllByText('The Clean Coder').length).toBeGreaterThan(1)
        expect(screen.getByText('×2')).toBeInTheDocument()
        await userEvent.click(screen.getByText('X'));
        expect(screen.getByText('×1')).toBeInTheDocument()
        expect(screen.getAllByText('The Clean Coder').length).toBeGreaterThan(1)
        await userEvent.click(screen.getByText('X'));
        expect(screen.getByText(/your basket is empty/i)).toBeInTheDocument()
    });
});
