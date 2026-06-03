import { useSelector } from 'react-redux'
import {
    CSS_CLASSES,
    TEST_ID_BASKET_ITEM,
} from '../constants/uiConstants'
import { selectBookQuantity } from '../store/selectors'
import '../styles.css'

export default function BasketItem({ book }) {
    const quantity = useSelector(selectBookQuantity(book.id))
    return (
        <div className={CSS_CLASSES.BASKET_ITEM} data-testid={TEST_ID_BASKET_ITEM}>
            <span>
                {book.title}
                <span className={CSS_CLASSES.QUANTITY_BADGE}>×{quantity}</span>
            </span>
        </div>
    )
}
