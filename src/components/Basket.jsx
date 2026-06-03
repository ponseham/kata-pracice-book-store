import { useSelector } from 'react-redux'
import BasketItem from './BasketItem'
import {
    BASKET_SECTION_TITLE,
    BASKET_EMPTY_MESSAGE,
    CSS_CLASSES,
} from '../constants/uiConstants'
import { BOOKS } from '../constants/books'
import { selectBooksInBasket, selectHasItemsInBasket } from '../store/selectors'
import '../styles.css'


export default function Basket() {
    const hasItems = useSelector(selectHasItemsInBasket)
    const booksInBasket = useSelector(selectBooksInBasket)

    return (
        <div className={CSS_CLASSES.SIDEBAR_COLUMN}>
            <div className={CSS_CLASSES.BASKET}>
                <div className={CSS_CLASSES.BASKET_HEADER}>
                    <h5>{BASKET_SECTION_TITLE}</h5>
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
