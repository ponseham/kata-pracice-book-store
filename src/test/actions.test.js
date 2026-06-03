import { ADD_BOOK_TO_BASKET, addBookToBasket } from '../store/actions'
import { TEST_ADD_BOOK_TO_BASKET } from '../constants/testingConstants'

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
})