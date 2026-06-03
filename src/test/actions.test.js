import { ADD_BOOK_TO_BASKET, REMOVE_BOOK_FROM_BASKET, CLEAR_ALL_BOOKS_FROM_BASKET, addBookToBasket } from '../store/actions'
import { TEST_ADD_BOOK_TO_BASKET, TEST_REMOVE_BOOK_FROM_BASKET, TEST_CLEAR_ALL_BOOKS_FROM_BASKET } from '../constants/testingConstants'

describe('actions', () => {
    test('should create add book action', () => {
        expect(addBookToBasket(1)).toEqual({
            type: TEST_ADD_BOOK_TO_BASKET,
            payload: 1,
        })
    })

    test('should use ADD_BOOK_TO_BASKET action type', () => {
        expect('ADD_BOOK_TO_BASKET').toBe(TEST_ADD_BOOK_TO_BASKET)
    })
    test('should use REMOVE_BOOK_FROM_BASKET action type', () => {
        expect(REMOVE_BOOK_FROM_BASKET).toBe(TEST_REMOVE_BOOK_FROM_BASKET)
    })
    test('should use CLEAR_ALL_BOOKS_FROM_BASKET action type', () => {
        expect(CLEAR_ALL_BOOKS_FROM_BASKET).toBe(TEST_CLEAR_ALL_BOOKS_FROM_BASKET)
    })
})