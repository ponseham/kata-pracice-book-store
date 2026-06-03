import { BOOK_PRICE } from '../constants/books'
export function calculateBasketPrice(basketCounts) {
    let subtotal = 0
    let total = 0

    subtotal = basketCounts.size * BOOK_PRICE
    let discount = 0;
    if (basketCounts.size === 2)
        discount = 0.05;
    else if (basketCounts.size === 3)
        discount = 0.10;
    else if (basketCounts.size === 4)
        discount = 0.20;
    total = basketCounts.size * BOOK_PRICE * (1 - discount);

    return { subtotal, discount: subtotal - total, total }
}