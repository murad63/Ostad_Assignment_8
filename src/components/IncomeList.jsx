// IncomeList.js

function IncomeList({ incomes, removeIncome }) {
    return (
        <div>
            <h3>Income List</h3>
            <ul className="list-group">
                {incomes.map((income) => (
                    <li className="list-group-item" key={income.id}>
                        <b>
                            {income.amount}
                        </b>
                        <button onClick={() => removeIncome(income.id)} className='ml-2 btn btn-danger btn-sm'>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default IncomeList;