export const ADD_BOOK_TO_BASKET = 'ADD_BOOK_TO_BASKET'
export const REMOVE_BOOK_FROM_BASKET = 'REMOVE_BOOK_FROM_BASKET'
export const CLEAR_ALL_BOOKS_FROM_BASKET = 'CLEAR_ALL_BOOKS_FROM_BASKET'

export const addBookToBasket = (bookId) => ({
    type: ADD_BOOK_TO_BASKET,
    payload: bookId,
})
export const removeBookFromBasket = (bookId) => ({
    type: REMOVE_BOOK_FROM_BASKET,
    payload: bookId,
})
export const clearAllBooksFromBasket = () => ({
    type: CLEAR_ALL_BOOKS_FROM_BASKET,
})
