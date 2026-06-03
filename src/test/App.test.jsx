import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import userEvent from '@testing-library/user-event'
import App from '../App'
import * as TESTING_CONSTANTS from '../constants/testingConstants'
import basketReducer from '../store/reducer'

export function renderWithStore() {

    const rootReducer = combineReducers({
        basket: basketReducer,
    })
    const store = createStore(rootReducer)
    return render(
        <Provider store={store}>
            <App />
        </Provider>
    )
}

async function addGivenBooksToBasket(bookIndex = []) {
    const buttons = screen.getAllByText(TESTING_CONSTANTS.TEST_ADD_BUTTON_LABEL)
    for (const button of bookIndex) {
        await userEvent.click(buttons[button])
    }
}

describe('Book Store', () => {
    test('Show book store header', () => {
        renderWithStore()
        expect(screen.getByText(TESTING_CONSTANTS.TEST_STORE_HEADER_TITLE)).toBeInTheDocument()
    })

    test('Show all books information as card', () => {
        renderWithStore()
        let authorNames = [];
        TESTING_CONSTANTS.TEST_BOOKS.forEach(book => {
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
        const prices = screen.getAllByText(`${TESTING_CONSTANTS.TEST_BOOK_PRICE} ${TESTING_CONSTANTS.TEST_CURRENCY_LABEL}`)
        expect(prices).toHaveLength(TESTING_CONSTANTS.TEST_BOOKS.length)
    })
    test('Show discount related details in footer', () => {
        renderWithStore()
        expect(screen.getByText(TESTING_CONSTANTS.TEST_MIX_AND_SAVE_TEXT)).toBeInTheDocument()
        expect(screen.getByText(TESTING_CONSTANTS.TEST_DISCOUNT_INFO_TEXT)).toBeInTheDocument()
    })
    test('Show basket is empty at the start', () => {
        renderWithStore()
        expect(screen.getByText(TESTING_CONSTANTS.TEST_BASKET_SECTION_TITLE)).toBeInTheDocument()
        expect(screen.getByText(TESTING_CONSTANTS.TEST_BASKET_EMPTY_MESSAGE)).toBeInTheDocument()
    })
    test("Show Add book to basket button for all books", () => {
        renderWithStore()
        const buttons = screen.getAllByText(TESTING_CONSTANTS.TEST_ADD_BUTTON_LABEL);
        TESTING_CONSTANTS.TEST_BOOKS.forEach((book, index) => {
            expect(buttons[index]).toHaveAttribute(
                'aria-label',
                TESTING_CONSTANTS.TEST_ADD_BOOK_TO_BASKET_AREA_LABEL.replace('_', book.title)
            );
        })
    });
    test("Add books to basket and show basket items when click the Add button", async () => {
        renderWithStore()
        const buttons = screen.getAllByText(TESTING_CONSTANTS.TEST_ADD_BUTTON_LABEL)
        for (const button of buttons) {
            await userEvent.click(button)
        }
        const basketItems = screen.getAllByTestId(TESTING_CONSTANTS.TESTING_TEST_ID_BASKET_ITEM)
        expect(basketItems).toHaveLength(TESTING_CONSTANTS.TEST_BOOKS.length)
        TESTING_CONSTANTS.TEST_BOOKS.forEach(book => {
            expect(screen.getAllByText(book.title).length).toBeGreaterThan(1)
        })
    });
    test("When click remove button delete items from basket", async () => {
        renderWithStore()
        await addGivenBooksToBasket([1, 1])
        expect(screen.getByText('×2')).toBeInTheDocument()
        const removeButton = screen.getByText(TESTING_CONSTANTS.TEST_REMOVE_BUTTON_LABEL)
        expect(removeButton).toHaveAttribute(
            'aria-label',
            TESTING_CONSTANTS.TEST_REMOVE_BUTTON_AREA_LABEL.replace('_', TESTING_CONSTANTS.TEST_BOOKS[1].title)
        );
        await userEvent.click(removeButton);
        expect(screen.getByText('×1')).toBeInTheDocument()
        await userEvent.click(removeButton);
        expect(screen.getByText(TESTING_CONSTANTS.TEST_BASKET_EMPTY_MESSAGE)).toBeInTheDocument()
    });
    test("Reset basket items empty when clicking clear button", async () => {
        renderWithStore()
        await addGivenBooksToBasket([0, 1])
        const clearButton = screen.getByText(TESTING_CONSTANTS.TEST_CLEAR_BUTTON_LABEL);
        expect(clearButton).toBeInTheDocument()
        expect(clearButton).toHaveAttribute(
            'aria-label',
            TESTING_CONSTANTS.TEST_CLEAR_BASKET_ARIA_LABEL
        );
        await userEvent.click(clearButton)
        expect(screen.getByText(TESTING_CONSTANTS.TEST_BASKET_EMPTY_MESSAGE)).toBeInTheDocument()
    });
    test("Show total count of books added in basket", async () => {
        renderWithStore()
        await addGivenBooksToBasket([0, 1, 3])
        expect(screen.getByText('3 ' + TESTING_CONSTANTS.TEST_ITEMS + ' ' + TESTING_CONSTANTS.TEST_IN_BASKET_SUFFIX)).toBeInTheDocument()
        await userEvent.click(screen.getByText(TESTING_CONSTANTS.TEST_CLEAR_BUTTON_LABEL))
        await addGivenBooksToBasket([0])
        expect(screen.getByText('1 ' + TESTING_CONSTANTS.TEST_ITEM + ' ' + TESTING_CONSTANTS.TEST_IN_BASKET_SUFFIX)).toBeInTheDocument()
    });
    test("Show slected book count for each book in book info", async () => {
        renderWithStore()
        await addGivenBooksToBasket([2, 2])
        const buttonsafterClick = screen.getAllByText(TESTING_CONSTANTS.TEST_ADD_BUTTON_LABEL);
        expect(buttonsafterClick).toHaveLength(4)
        expect(screen.getByText(TESTING_CONSTANTS.TEST_ADD_ONE_MORE_PREFIX + ' (' + 2 + ')')).toBeInTheDocument()
    });
    test("Show price without any discount when selecting single book", async () => {
        renderWithStore()
        await addGivenBooksToBasket([2])
        expect(screen.getByText(TESTING_CONSTANTS.TEST_SUBTOTAL_LABEL)).toBeInTheDocument()
        expect(screen.getByText(TESTING_CONSTANTS.TEST_TOTAL_LABEL)).toBeInTheDocument()
        expect(screen.getAllByText(TESTING_CONSTANTS.TEST_ONE_BOOK_WITHOUT_DISCOUNT_AMOUNT + ' ' + TESTING_CONSTANTS.TEST_CURRENCY_LABEL)).toHaveLength(2)
    });
    test("Show price with discount when selecting two different books", async () => {
        renderWithStore()
        await addGivenBooksToBasket([2, 3])
        expect(screen.getByText(TESTING_CONSTANTS.TEST_DISCOUNT_LABEL)).toBeInTheDocument()
        expect(screen.getByText(TESTING_CONSTANTS.TEST_TWO_BOOK_WITH_DISCOUNT_TOTAL + ' ' + TESTING_CONSTANTS.TEST_CURRENCY_LABEL)).toBeInTheDocument()
        expect(screen.getByText(TESTING_CONSTANTS.TEST_TWO_BOOK_WITH_DISCOUNT_SUBTOTAL + ' ' + TESTING_CONSTANTS.TEST_CURRENCY_LABEL)).toBeInTheDocument()
        expect(screen.getByText(TESTING_CONSTANTS.TEST_TWO_BOOK_WITH_DISCOUNT_DISCOUNT + ' ' + TESTING_CONSTANTS.TEST_CURRENCY_LABEL)).toBeInTheDocument()
    });
    test("Show price with discount when selecting three different books", async () => {
        renderWithStore()
        await addGivenBooksToBasket([0, 1, 2])
        expect(screen.getByText(TESTING_CONSTANTS.TEST_DISCOUNT_LABEL)).toBeInTheDocument()
        expect(screen.getByText(TESTING_CONSTANTS.TEST_THREE_BOOK_WITH_DISCOUNT_TOTAL + ' ' + TESTING_CONSTANTS.TEST_CURRENCY_LABEL)).toBeInTheDocument()
        expect(screen.getByText(TESTING_CONSTANTS.TEST_THREE_BOOK_WITH_DISCOUNT_SUBTOTAL + ' ' + TESTING_CONSTANTS.TEST_CURRENCY_LABEL)).toBeInTheDocument()
        expect(screen.getByText(TESTING_CONSTANTS.TEST_THREE_BOOK_WITH_DISCOUNT_DISCOUNT + ' ' + TESTING_CONSTANTS.TEST_CURRENCY_LABEL)).toBeInTheDocument()
    });
})


