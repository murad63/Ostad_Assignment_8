import { useState } from 'react';
import IncomeForm from '../components/IncomeForm';
import IncomeList from '../components/IncomeList';

function IncomePage() {
    const [incomes,setIncomes]=useState([]);
    const addIncome=(income)=>{
        setIncomes([...incomes,{
            amount:income.amount,
            id:income.id
        }]);
    
    }
    const removeIncome=(id)=>{
        setIncomes(incomes.filter(income=>income.id!==id));
    }
  return (
    <div>
      <h2>Income Page</h2>
      <IncomeForm addIncome={addIncome}/>
      <IncomeList incomes={incomes} removeIncome={removeIncome}/>
    </div>
  );
}

export default IncomePage;