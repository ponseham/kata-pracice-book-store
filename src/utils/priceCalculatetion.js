import { BOOK_PRICE, DISCOUNT_RATES } from '../books';

function groupBooks(basket) {
    const remaining = new Map(basket)
    const groups = []
    while ([...remaining.values()].some((q) => q > 0)) {
        const group = new Set()
        for (const [id, qty] of remaining) {
            if (qty > 0) {
                group.add(id)
                remaining.set(id, qty - 1)
            }
        }
        groups.push(group)
    }

    return groups
}

export function calcPrice(basket) {
    const groups = groupBooks(basket)
    let subtotal = 0
    let total = 0
    for (const group of groups) {
        subtotal += group.size * BOOK_PRICE
        let discount = DISCOUNT_RATES.get(group.size) ?? 0
        total += group.size * BOOK_PRICE * (1 - discount);
    }
    return { subtotal, discount: subtotal - total, total }
}