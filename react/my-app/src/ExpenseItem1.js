/* Now we learn dynamic working with JSX.
Here just we use baasic var
If we want to  add javaScript in the JSX code we use this {} */
import './ExpenseItem.css'
function ExpenseItem1(){
    const expenseDate=new Date(2022,8,19);
    const expneseTitle='Car Insurance';
    const expneseAmount=300;
    return(
        <div className="expense-item">
            <div>{expenseDate.toISOString()} </div>
            <div className='expense-item__description'>
                <h2>{expneseTitle}</h2>
                <div className='expense-item__price'>{expneseAmount}$</div>
            </div>
        </div>
    );
};
export default ExpenseItem1;