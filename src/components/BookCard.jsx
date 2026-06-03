import { CSS_CLASSES, TEST_ID_BOOK_CARD, CURRENCY_LABEL } from '../constants/uiConstants'
import { BOOK_PRICE } from '../constants/books'
import '../styles.css'

function BookCard({ book }) {
    return (
        <div className={CSS_CLASSES.BOOK_CARD}>
            <img src={book.coverUrl} alt={book.title} />
            <div className={CSS_CLASSES.BOOK_INFO} data-testid={TEST_ID_BOOK_CARD}>
                <h6>{book.title}</h6>
                <p>{book.author}</p>
                <div className={CSS_CLASSES.BOOK_PRICE_ROW}>
                    <strong>{BOOK_PRICE} {CURRENCY_LABEL}</strong>
                </div>
            </div>
        </div>
    )
}
export default BookCard