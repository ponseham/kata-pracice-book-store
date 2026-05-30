import './styles.css'
import BookList from './BookList'
import Basket from './Basket'
import { useState } from 'react'

export default function App() {
  const [basket, setBasket] = useState(new Map())
  const totalItems = [...basket.values()].reduce((s, q) => s + q, 0)

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


  function clearBasket() {
    setBasket(new Map())
  }

  return (
    <div>
      <div className="header">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h5 mb-0">Books Store</h1>
          <span>{totalItems} item{totalItems !== 1 ? 's' : ''} in basket</span>
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          <BookList addBook={addBook} basket={basket} />
          <Basket basket={basket} removeBook={removeBook} clearBasket={clearBasket} />
        </div>
      </div>
    </div>
  )
}
