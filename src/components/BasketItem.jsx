import { useDispatch, useSelector } from 'react-redux'
import {
    CSS_CLASSES,
    TEST_ID_BASKET_ITEM,
    REMOVE_BUTTON_LABEL,
    REMOVE_BUTTON_AREA_LABEL
} from '../constants/uiConstants'
import { selectBookQuantity } from '../store/selectors'
import '../styles.css'
import { removeBookFromBasket } from '../store/actions'

export default function BasketItem({ book }) {
    const quantity = useSelector(selectBookQuantity(book.id))
    const dispatch = useDispatch()
    function handleRemoveBook() {
        dispatch(removeBookFromBasket(book.id))
    }

    return (
        <div className={CSS_CLASSES.BASKET_ITEM} data-testid={TEST_ID_BASKET_ITEM}>
            <span>
                {book.title}
                <span className={CSS_CLASSES.QUANTITY_BADGE}>×{quantity}</span>
            </span>
            <button
                className={CSS_CLASSES.REMOVE_BUTTON_AREA}
                aria-label={REMOVE_BUTTON_AREA_LABEL.replace('_', book.title)}
                onClick={handleRemoveBook}
            >
                {REMOVE_BUTTON_LABEL}
            </button>
        </div>
    )
}
