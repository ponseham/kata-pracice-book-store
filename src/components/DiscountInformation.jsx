import { CSS_CLASSES, MIX_AND_SAVE_TEXT, DISCOUNT_INFO_TEXT } from '../constants/uiConstants'
function DiscountInformation() {
    return (
        <div className={CSS_CLASSES.DISCOUNT_INFO}>
            <strong>{MIX_AND_SAVE_TEXT} </strong>
            {DISCOUNT_INFO_TEXT}
        </div>
    )
}
export default DiscountInformation