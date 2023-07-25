import { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

function ExpensePage() {
    const [expenses,setExpenses]=useState([]);
    const addExpense=(expense)=>{
        setExpenses([...expenses,{
            amount:expense.amount,
            id:expense.id
        }]);
    
    }
    const removeExpense=(id)=>{
        setExpenses(expenses.filter(expense=>expense.id!==id));
    }
  return (
    <div>
      <h2>Expense Page</h2>
      <ExpenseForm addExpense={addExpense}/>
      <ExpenseList expenses={expenses} removeExpense={removeExpense}/>
    </div>
  );
}

export default ExpensePage;