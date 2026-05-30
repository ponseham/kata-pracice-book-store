import './styles.css'
import { BOOKS } from './books'

export default function Basket({ basket }) {
    const booksInBasket = BOOKS.filter((b) => basket.has(b.id))
    return (
        <div className="col-lg-4">
            <div className="basket">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="mb-0">Your Basket</h5>
                </div>
                {booksInBasket.length === 0 ? (
                    <p className="text-muted text-center py-3">Your basket is empty</p>
                ) : (
                    <>
                        {
                            booksInBasket.map((book) => (
                                <div key={book.id} className="basket-item" data-testid="basket-item">
                                    <span>
                                        {book.title}
                                        <span className="text-muted ms-1">×{basket.get(book.id)}</span>
                                    </span>
                                    <button
                                        className="btn btn-link btn-sm text-danger p-0"
                                        aria-label={`Remove ${book.title}`}
                                    >
                                        X
                                    </button>
                                </div>
                            ))
                        }
                    </>
                )}
            </div>
        </div>
    )
}
