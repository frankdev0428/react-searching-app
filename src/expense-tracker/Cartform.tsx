import React from 'react'
import './cartform.css'
import { categories } from '../App'

const Cartform = () => {
  return (
   <form action="">
    <div className="mb-3">
      <label htmlFor="description" className="form-label"></label>
      <input id='description' type="text" className="form-control" />
    </div>
    <div className="mb-3">
      <label htmlFor="amount" className="form-label"></label>
      <input id='amount' type="number" className="form-control" />
    </div>
    <div className="mb-3">
      <label  htmlFor="category" className="form-label">Category</label>
      <select name="" id="category" className="form-select">
       <option value=""></option>
       {categories.map(category => <option key={category} value={category}>{category}</option>)}
      </select>
    </div>
   </form>
  )
}

export default Cartform