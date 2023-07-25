// ExpenseForm.js
import  { useState } from 'react';
import { nanoid } from 'nanoid'; // Import nanoid
function ExpenseForm({addExpense}) {
  const [expense, setExpense] = useState('');

  const handleExpenseChange = (e) => {
    setExpense(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({
        amount:expense,
        id:nanoid()
    })
    setExpense('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="expense">Enter Expense: </label>
      <input
        type="number"
        id="expense"
        value={expense}
        onChange={handleExpenseChange}
        required
      />
      <button type="submit" className='ml-2 btn btn-success'>Add Expense</button>
    </form>
  );
}

export default ExpenseForm;