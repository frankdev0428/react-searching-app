import React from 'react'

interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string;
}
interface Props {
    expenses: Expense[]
    onDelete: (id: number) => void;
}

const ExpenseList = ( { expenses, onDelete }: Props ) => {
    if(expenses.length === 0) return null;
  return (
    <div>
     <table className="table table-bordered">
      <thead>
       <tr>
        <th>Description</th>
        <th>Amount</th>
        <th>Category</th>
        <th></th> 
       </tr>  
      </thead> 
      <tbody>
       {expenses.map(expense => <tr key={expense.id}>
         <td>{expense.description}</td>
         <td>{expense.amount}</td>
         <td>{expense.category}</td>
         <td>
          <button onClick= {() => onDelete(expense.id)} className="btn btn-outline-danger">Delete</button>
         </td>
       </tr>)}
      </tbody>
      <tfoot>
        <tr>
         <td>Total</td>
         <td>${expenses.reduce((acc,expense) => expense.amount + acc, 0).toFixed(2)}</td>
         <td></td>
         <td></td>   
        </tr>
      </tfoot>
     </table>
    </div>
  )
}

export default ExpenseList