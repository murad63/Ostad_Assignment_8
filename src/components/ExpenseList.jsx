// ExpenseList.js

function ExpenseList({ expenses, removeExpense }) {
    return (
        <div>
            <h3>Expense List</h3>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense.id}>
                        <b>
                            {expense.amount}
                        </b>
                        <button onClick={() => removeExpense(expense.id)} className='ml-2 btn btn-danger btn-sm'>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExpenseList;