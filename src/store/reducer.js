import { INITIAL_QUANTITY, QUANTITY_STEP, EMPTY_COUNT } from '../constants/uiConstants'
import { ADD_BOOK_TO_BASKET, REMOVE_BOOK_FROM_BASKET } from './actions'
const initialState = {
    basketItems: {},
}

export default function basketReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_BOOK_TO_BASKET: {
            const bookId = action.payload
            const currentQuantity =
                state.basketItems[bookId] ?? INITIAL_QUANTITY

            return {
                ...state,
                basketItems: {
                    ...state.basketItems,
                    [bookId]: currentQuantity + QUANTITY_STEP,
                },
            }
        }
        case REMOVE_BOOK_FROM_BASKET: {
            const bookId = action.payload
            const currentQuantity =
                state.basketItems[bookId]

            const updatedQuantity =
                currentQuantity - QUANTITY_STEP

            const updatedBasket = {
                ...state.basketItems,
            }

            if (updatedQuantity <= EMPTY_COUNT) {
                delete updatedBasket[bookId]
            } else {
                updatedBasket[bookId] = updatedQuantity
            }

            return {
                ...state,
                basketItems: updatedBasket,
            }
        }
        default:
            return state
    }
}