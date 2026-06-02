import {
    STORE_HEADER_TITLE,
    CSS_CLASSES,
    TEST_ID_BOOK_CARD,
    CURRENCY_LABEL,
} from '../constants/uiConstants'

import {
    TEST_STORE_HEADER_TITLE,
    TEST_CSS_CLASSES,
    TESTING_TEST_ID_BOOK_CARD,
    TEST_CURRENCY_LABEL
} from '../constants/testingConstants'


describe('UI Constants', () => {
    test('STORE_HEADER_TITLE should be correct', () => {
        expect(STORE_HEADER_TITLE).toBe(TEST_STORE_HEADER_TITLE)
    })

    test('TEST_ID_BOOK_CARD should be correct', () => {
        expect(TEST_ID_BOOK_CARD).toBe(TESTING_TEST_ID_BOOK_CARD)
    })

    test('CURRENCY_LABEL should be correct', () => {
        expect(CURRENCY_LABEL).toBe(TEST_CURRENCY_LABEL)
    })

    test('CSS_CLASSES should contain expected values', () => {
        expect(CSS_CLASSES.HEADER).toBe(TEST_CSS_CLASSES.HEADER)
        expect(CSS_CLASSES.HEADER_CONTAINER).toBe(TEST_CSS_CLASSES.HEADER_CONTAINER)
        expect(CSS_CLASSES.MAIN_COLUMN).toBe(TEST_CSS_CLASSES.MAIN_COLUMN)
        expect(CSS_CLASSES.BOOK_GRID).toBe(TEST_CSS_CLASSES.BOOK_GRID)
        expect(CSS_CLASSES.BOOK_CARD).toBe(TEST_CSS_CLASSES.BOOK_CARD)
        expect(CSS_CLASSES.BOOK_INFO).toBe(TEST_CSS_CLASSES.BOOK_INFO)
        expect(CSS_CLASSES.BOOK_PRICE_ROW).toBe(TEST_CSS_CLASSES.BOOK_PRICE_ROW)
    })
})