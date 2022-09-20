/* Now we learn dynamic working with JSX.
Here just we use baasic var
If we want to  add javaScript in the JSX code we use this {} */
import './ExpenseItem.css'
function ExpenseItem1(props){
    return(
        <div className="expense-item">
            <div>{props.date.toISOString()} </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}$</div>
            </div>
        </div>
    );
};
export default ExpenseItem1;