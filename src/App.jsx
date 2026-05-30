import './styles.css'
import BookList from './BookList'
export default function App() {
  return (
    <div>
      <div className="header">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h5 mb-0">Books Store</h1>
        </div>
      </div>
      <div className="container">
        <BookList />
      </div>
    </div>
  )
}
