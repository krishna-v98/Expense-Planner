import { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangehandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });



    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear}
                    onChangeFilter={filterChangehandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>

    );
}

export default Expenses;


// {filteredExpenses.length === 0 ? <p>no expenses found</p>
//     : filteredExpenses.map(expense => (
//         <ExpenseItem
//             key={expense.id}
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//         />
//     ))}


// {filteredExpenses.length === 0 && <p>no expenses found</p>}
//                 {filteredExpenses.length > 0 && filteredExpenses.map(expense => (
//                     <ExpenseItem
//                         key={expense.id}
//                         title={expense.title}
//                         amount={expense.amount}
//                         date={expense.date}
//                     />
//                 ))}