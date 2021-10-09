import { useState } from 'react';
import './NewExpense.css'

import ExpenseForm from './ExpenseForm';

// To return a form for our inputs
const NewExpense = props => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    if (!isEditing) {
        return <div className="new-expense">
            <button onClick={startEditingHandler}>New Expense</button>
        </div>
    }

    return (
        <div className="new-expense">
            <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={stopEditingHandler} />
        </div>
    );
};

export default NewExpense;


