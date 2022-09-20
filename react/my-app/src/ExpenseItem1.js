/* Now we learn dynamic working with JSX.
Here just we use baasic var
If we want to  add javaScript in the JSX code we use this {} */
import './ExpenseItem.css'
function ExpenseItem1(props){
    return(
        <div className="expense-item">
            <div>{props.date.toISOString()} </div>
            {/* The toISOString() method returns a string in simplified extended ISO format (ISO 8601), 
            which is always 24 or 27 characters long ( YYYY-MM-DDTHH:mm:ss. sssZ or ±YYYYYY-MM-DDTHH:mm:ss. sssZ 
            , respectively). The timezone is always zero UTC offset, as denoted by the suffix Z 
            
            The toISOString() method returns a date object as a string */}
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}$</div>
            </div>
        </div>
    );
};
export default ExpenseItem1;