// IncomeForm.js
import  { useState } from 'react';
import { nanoid } from 'nanoid'; // Import nanoid
function IncomeForm({addIncome}) {
  const [income, setIncome] = useState('');

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome({
        amount:income,
        id:nanoid()
    })
    setIncome('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="income">Enter Income: </label>
      <input
        type="number"
        id="income"
        value={income}
        onChange={handleIncomeChange}
        required
      />
      <button type="submit" className='ml-2 btn btn-success'>Add Income</button>
    </form>
  );
}

export default IncomeForm;