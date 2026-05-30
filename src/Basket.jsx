import './styles.css'

export default function Basket() {
    return (
        <div className="col-lg-4">
            <div className="basket">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="mb-0">Your Basket</h5>
                </div>
                <p className="text-muted text-center py-3">Your basket is empty</p>
            </div>
        </div>
    )
}
