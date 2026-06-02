import Header from './components/Header'
import BookList from './components/BookList'
import { CSS_CLASSES } from './constants/uiConstants'
import './styles.css'

export default function App() {
  return (
    <div>
      <Header />
      <div className="page-content">
        <div className="content-row">
          <div className={CSS_CLASSES.MAIN_COLUMN}>
            <BookList />
          </div>
        </div>
      </div>
    </div >
  )
}
