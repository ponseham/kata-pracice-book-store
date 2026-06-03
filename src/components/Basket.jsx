import {
    BASKET_SECTION_TITLE,
    BASKET_EMPTY_MESSAGE,
    CSS_CLASSES,
} from '../constants/uiConstants'
import '../styles.css'

export default function Basket() {
    return (
        <div className={CSS_CLASSES.SIDEBAR_COLUMN}>
            <div className={CSS_CLASSES.BASKET}>
                <div className={CSS_CLASSES.BASKET_HEADER}>
                    <h5>{BASKET_SECTION_TITLE}</h5>
                </div>
                <p className={CSS_CLASSES.EMPTY_MESSAGE}>{BASKET_EMPTY_MESSAGE}</p>
            </div>
        </div>
    )
}
