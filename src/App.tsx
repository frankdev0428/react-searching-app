import { useState } from "react"
import Cartform from "./expense-tracker/Cartform"
import ExpenseList from "./expense-tracker/ExpenseList"
import ExpenseFilter from "./expense-tracker/ExpenseFilter"

export const categories = ["Groceries", "Utilities", "Entertainment"];

function App() {
  const [selectedCategory,setSelectedCategory] = useState('');
  const [expenses, setExpenses ] = useState([
    { id: 1, description: 'aaa', amount: 10,category: 'Utilities'},
    { id: 2, description: 'bbb', amount: 10,category: 'Utilities'},
    { id: 3, description: 'ccc', amount: 10,category: 'Utilities'},
    { id: 4, description: 'ddd', amount: 10,category: 'Utilities'}
   ])
 const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory ) : expenses;


  return(
  <div className="app">
  <h1>Shopping cart </h1>
  <div className="mb-3">
  <ExpenseFilter onSelectCategory = { (category) => setSelectedCategory(category)}/>
  </div>
  <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}/>
  </div>
  )
}

export default App
