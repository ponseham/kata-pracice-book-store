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

    return swapingOfGroups(groups)
}
function swapingOfGroups(groups) {
    for (let i = 0; i < groups.length; i++) {
        for (let j = i + 1; j < groups.length; j++) {
            const a = groups[i]
            const b = groups[j]
            if ((a.size === 5 && b.size === 3) || (a.size === 3 && b.size === 5)) {
                const big = a.size === 5 ? a : b
                const small = a.size === 5 ? b : a
                const extra = [...big].find((id) => !small.has(id))
                const newBig = new Set([...big].filter((id) => id !== extra))
                const newSmall = new Set([...small, extra])
                groups[i] = newBig
                groups[j] = newSmall
            }
        }
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