import { useSelector } from 'react-redux'
import {
    SUBTOTAL_LABEL,
    TOTAL_LABEL,
    DISCOUNT_LABEL,
    CURRENCY_LABEL,
    CSS_CLASSES,
    EMPTY_COUNT,
} from '../constants/uiConstants'
import { selectBasketPrice } from '../store/selectors'

export default function BasketSummary() {
    const pricingSummery = useSelector(selectBasketPrice)

    return (
        <>
            <hr />
            <div className={CSS_CLASSES.BASKET_PRICE_ROW}>
                <span>{SUBTOTAL_LABEL}</span>
                <span className={CSS_CLASSES.PRICE_AMOUNT}>{pricingSummery.subtotal.toFixed(2)} {CURRENCY_LABEL}</span>
            </div>
            {pricingSummery.discount > EMPTY_COUNT && (
                <div className={CSS_CLASSES.BASKET_PRICE_ROW_DISCOUNT}>
                    <span>{DISCOUNT_LABEL}</span>
                    <span className={CSS_CLASSES.PRICE_AMOUNT}>-{pricingSummery.discount.toFixed(2)} {CURRENCY_LABEL}</span>
                </div>
            )}
            <div className={CSS_CLASSES.BASKET_PRICE_ROW_TOTAL}>
                <span>{TOTAL_LABEL}</span>
                <span className={CSS_CLASSES.PRICE_AMOUNT}>{pricingSummery.total.toFixed(2)} {CURRENCY_LABEL}</span>
            </div>
        </>
    )
}
