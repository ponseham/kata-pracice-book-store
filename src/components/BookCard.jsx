import { useDispatch, useSelector } from 'react-redux'
import { CSS_CLASSES, TEST_ID_BOOK_CARD, CURRENCY_LABEL, ADD_BUTTON_LABEL, ADD_BOOK_TO_BASKET_AREA_LABEL, ADD_ONE_MORE_PREFIX } from '../constants/uiConstants'
import { BOOK_PRICE } from '../constants/books'
import { addBookToBasket } from '../store/actions'
import { selectBookQuantity } from '../store/selectors'
import '../styles.css'

function BookCard({ book }) {
    const dispatch = useDispatch()
    const quantity = useSelector(selectBookQuantity(book.id))
    function handleAddBook() {
        dispatch(addBookToBasket(book.id))
    }

    const addButtonText = quantity > 0
        ? `${ADD_ONE_MORE_PREFIX} (${quantity})`
        : ADD_BUTTON_LABEL

    return (
        <div className={CSS_CLASSES.BOOK_CARD}>
            <img src={book.coverUrl} alt={book.title} />
            <div className={CSS_CLASSES.BOOK_INFO} data-testid={TEST_ID_BOOK_CARD}>
                <h6>{book.title}</h6>
                <p>{book.author}</p>
                <div className={CSS_CLASSES.BOOK_PRICE_ROW}>
                    <strong>{BOOK_PRICE} {CURRENCY_LABEL}</strong>
                    <button
                        className={CSS_CLASSES.ADD_BOOK_BUTTON}
                        aria-label={ADD_BOOK_TO_BASKET_AREA_LABEL.replace('_', book.title)}
                        onClick={handleAddBook}
                    >
                        {addButtonText}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default BookCard