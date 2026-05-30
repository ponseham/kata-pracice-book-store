import { BOOK_PRICE, DISCOUNT_RATES } from '../books';
export function calcPrice(basket) {
    let subtotal = 0
    let total = 0
    subtotal = basket.size * BOOK_PRICE
    let discount = DISCOUNT_RATES.get(basket.size) ?? 0
    total = basket.size * BOOK_PRICE * (1 - discount);
    return { subtotal, discount: subtotal - total, total }
}