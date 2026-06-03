import { INITIAL_QUANTITY, QUANTITY_STEP } from '../constants/uiConstants'
import { ADD_BOOK_TO_BASKET } from './actions'
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
        default:
            return state
    }
}