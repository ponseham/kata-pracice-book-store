import BookCard from './BookCard'
import { CSS_CLASSES } from '../constants/uiConstants'
import { BOOKS } from '../constants/books'
import '../styles.css'

export default function BookList() {
    return (
        <div className={CSS_CLASSES.BOOK_GRID}>
            {BOOKS.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    )
}