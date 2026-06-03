export const ADD_BOOK_TO_BASKET = 'ADD_BOOK_TO_BASKET'
export const addBookToBasket = (bookId) => ({
    type: ADD_BOOK_TO_BASKET,
    payload: bookId,
})
