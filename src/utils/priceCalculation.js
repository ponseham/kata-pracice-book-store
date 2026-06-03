import { BOOK_PRICE, DISCOUNT_RATES } from '../constants/books'
export function calculateBasketPrice(basketCounts) {
    let subtotal = 0
    let total = 0

    subtotal = basketCounts.size * BOOK_PRICE
    let discount = DISCOUNT_RATES.get(basketCounts.size) ?? 0
    total = basketCounts.size * BOOK_PRICE * (1 - discount);

    return { subtotal, discount: subtotal - total, total }
}