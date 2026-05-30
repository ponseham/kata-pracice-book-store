import './styles.css'
import BookList from './BookList'
import Basket from './Basket'
import { useState } from 'react'

export default function App() {
  const [basket, setBasket] = useState(new Map())

  function addBook(id) {
    setBasket((prev) => {
      const next = new Map(prev)
      next.set(id, (next.get(id) ?? 0) + 1)
      return next
    })
  }
  function removeBook(id) {
    setBasket((prev) => {
      const next = new Map(prev)
      const qty = (next.get(id) ?? 0) - 1
      if (qty <= 0) next.delete(id)
      else next.set(id, qty)
      return next
    })
  }

  return (
    <div>
      <div className="header">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h5 mb-0">Books Store</h1>
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          <BookList addBook={addBook} />
          <Basket basket={basket} removeBook={removeBook} />
        </div>
      </div>
    </div>
  )
}
