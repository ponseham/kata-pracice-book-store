import { BOOK_PRICE, DISCOUNT_RATES } from '../constants/books'
import { EMPTY_COUNT, NO_DISCOUNT, MAXIMUM_BOOK_COUNT_FOR_BEST_DISCOUNT, MINIMUM_BOOK_COUNT_FOR_BEST_DISCOUNT } from '../constants/uiConstants'
function remainingBooksToGroup(remainingCounts) {

    return [...remainingCounts.values()]
}
function groupBooksIntoDiscountSets(basketCounts) {
    const remainingCounts = new Map(basketCounts)
    const discountGroups = []

    while (remainingBooksToGroup(remainingCounts).some((quantity) => quantity > EMPTY_COUNT)) {
        const currentGroup = new Set()
        for (const [bookId, quantity] of remainingCounts) {
            if (quantity > EMPTY_COUNT) {
                currentGroup.add(bookId)
                remainingCounts.set(bookId, quantity - 1)
            }
        }
        discountGroups.push(currentGroup)
    }
    return optimizeGroupsForBestDiscount(discountGroups)
}

function optimizeGroupsForBestDiscount(discountGroups) {
    const bigGroup = discountGroups.find(group => group.size === MAXIMUM_BOOK_COUNT_FOR_BEST_DISCOUNT)
    const smallGroup = discountGroups.find(group => group.size === MINIMUM_BOOK_COUNT_FOR_BEST_DISCOUNT)

    if (!bigGroup || !smallGroup) {
        return discountGroups
    }

    const bookToMove = [...bigGroup].find(bookId => !smallGroup.has(bookId))

    bigGroup.delete(bookToMove)
    smallGroup.add(bookToMove)

    return discountGroups
}

export function calculateBasketPrice(basketCounts) {
    const discountGroups = groupBooksIntoDiscountSets(basketCounts)
    let subtotal = 0
    let total = 0

    for (const group of discountGroups) {
        subtotal += group.size * BOOK_PRICE
        const discountRate = DISCOUNT_RATES.get(group.size) ?? NO_DISCOUNT
        total += group.size * BOOK_PRICE * (1 - discountRate)
    }

    return { subtotal, discount: subtotal - total, total }
}