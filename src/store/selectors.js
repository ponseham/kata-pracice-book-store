import { EMPTY_COUNT } from '../constants/uiConstants'
import { BOOKS } from '../constants/books'

export function selectHasItemsInBasket(state) {
    return selectBooksInBasket(state).length > EMPTY_COUNT
}
export function selectBookQuantity(bookId) {
    return (state) => state.basket.basketItems[bookId]
}
export function selectBasketItems(state) {
    return state.basket.basketItems
}
let lastBasketItems = null
let lastResult = []
export function selectBooksInBasket(state) {
    const basketItems = selectBasketItems(state)
    if (basketItems === lastBasketItems) {
        return lastResult
    }
    lastBasketItems = basketItems
    lastResult = BOOKS.filter(
        (book) => basketItems[book.id] !== undefined
    )
    return lastResult
}