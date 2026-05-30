import { BOOK_PRICE } from '../books';
export function calcPrice(basket) {
    let subtotal = 0
    let total = 0
    subtotal = basket.size * BOOK_PRICE
    let discount = 0;
    if (basket.size === 2)
        discount = 0.05;
    else if (basket.size === 3)
        discount = 0.10;
    total = basket.size * BOOK_PRICE * (1 - discount);
    return { subtotal, discount: subtotal - total, total }
}