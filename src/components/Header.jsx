import { useSelector } from 'react-redux'
import { STORE_HEADER_TITLE, CSS_CLASSES, IN_BASKET_SUFFIX } from '../constants/uiConstants'
import { selectTotalItemCount, selectHeaderItemLabel } from '../store/selectors'

function Header() {
    const totalItemCount = useSelector(selectTotalItemCount)
    const itemLabel = useSelector(selectHeaderItemLabel)

    return (
        <div className={CSS_CLASSES.HEADER}>
            <div className={CSS_CLASSES.HEADER_CONTAINER}>
                <h1>{STORE_HEADER_TITLE}</h1>
                <span>{totalItemCount} {itemLabel} {IN_BASKET_SUFFIX}</span>
            </div>
        </div>
    )
}
export default Header