import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

    //useState to update component on change of value
    // const [title, setTitle] = useState(props.title);

    //let title = props.title;

    // const clickHandler = () => {
    //     //title = 'updated!';
    //     setTitle('Updated!');
    // };
    //same as function clickHandler() {.....}

    return (<li>
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    </li>
    );
}

export default ExpenseItem;