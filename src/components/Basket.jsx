import { useSelector, useDispatch } from 'react-redux'
import BasketItem from './BasketItem'
import {
    BASKET_SECTION_TITLE,
    BASKET_EMPTY_MESSAGE,
    CSS_CLASSES,
    CLEAR_BUTTON_LABEL,
    CLEAR_BASKET_ARIA_LABEL
} from '../constants/uiConstants'
import { BOOKS } from '../constants/books'
import { selectBooksInBasket, selectHasItemsInBasket } from '../store/selectors'
import '../styles.css'
import { clearAllBooksFromBasket } from '../store/actions'


export default function Basket() {
    const dispatch = useDispatch()
    const hasItems = useSelector(selectHasItemsInBasket)
    const booksInBasket = useSelector(selectBooksInBasket)
    function handleClearBasket() {
        dispatch(clearAllBooksFromBasket())
    }
    return (
        <div className={CSS_CLASSES.SIDEBAR_COLUMN}>
            <div className={CSS_CLASSES.BASKET}>
                <div className={CSS_CLASSES.BASKET_HEADER}>
                    <h5>{BASKET_SECTION_TITLE}</h5>
                    {hasItems && (
                        <button
                            className={CSS_CLASSES.CLEAR_BUTTON}
                            aria-label={CLEAR_BASKET_ARIA_LABEL}
                            onClick={handleClearBasket}
                        >
                            {CLEAR_BUTTON_LABEL}
                        </button>
                    )}
                </div>
                {hasItems ? (
                    <>
                        {booksInBasket.map((book) => (
                            <BasketItem key={book.id} book={book} />
                        ))}
                    </>
                ) : (
                    <p className={CSS_CLASSES.EMPTY_MESSAGE}>{BASKET_EMPTY_MESSAGE}</p>
                )}
            </div>
        </div>
    )
}
