import './styles.css'
import { BOOKS } from './books'

export default function Basket({ basket, removeBook, clearBasket }) {
    const booksInBasket = BOOKS.filter((b) => basket.has(b.id))
    const price = { subtotal: 50, total: 50 }
    return (
        <div className="col-lg-4">
            <div className="basket">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="mb-0">Your Basket</h5>
                    {booksInBasket.length > 0 && (
                        <button className="btn btn-outline-secondary btn-sm" aria-label="Clear basket" onClick={clearBasket}>
                            Clear
                        </button>
                    )}
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
                                        onClick={() => removeBook(book.id)}
                                    >
                                        X
                                    </button>
                                </div>
                            ))
                        }
                        <hr />

                        <div className="d-flex justify-content-between small text-muted">
                            <span>Subtotal</span>
                            <span>{price.subtotal.toFixed(2)} EUR</span>
                        </div>
                        <div className="d-flex justify-content-between fw-bold mt-1">
                            <span>Total</span>
                            <span>{price.total.toFixed(2)} EUR</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
