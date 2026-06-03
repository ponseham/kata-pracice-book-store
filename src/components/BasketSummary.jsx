import { useSelector } from 'react-redux'
import {
    SUBTOTAL_LABEL,
    TOTAL_LABEL,
    CURRENCY_LABEL,
    CSS_CLASSES,
    EMPTY_COUNT,
} from '../constants/uiConstants'

export default function BasketSummary() {
    const pricingSummery = { total: 50.00, subtotal: 50.00 }

    return (
        <>
            <hr />
            <div className={CSS_CLASSES.BASKET_PRICE_ROW}>
                <span>{SUBTOTAL_LABEL}</span>
                <span className={CSS_CLASSES.PRICE_AMOUNT}>{pricingSummery.subtotal.toFixed(2)} {CURRENCY_LABEL}</span>
            </div>
            <div className={CSS_CLASSES.BASKET_PRICE_ROW_TOTAL}>
                <span>{TOTAL_LABEL}</span>
                <span className={CSS_CLASSES.PRICE_AMOUNT}>{pricingSummery.total.toFixed(2)} {CURRENCY_LABEL}</span>
            </div>
        </>
    )
}
