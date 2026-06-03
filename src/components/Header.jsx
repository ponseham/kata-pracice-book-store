import { STORE_HEADER_TITLE, CSS_CLASSES } from '../constants/uiConstants'
function Header() {
    return (
        <div className={CSS_CLASSES.HEADER}>
            <div className={CSS_CLASSES.HEADER_CONTAINER}>
                <h1>{STORE_HEADER_TITLE}</h1>
            </div>
        </div>
    )
}
export default Header