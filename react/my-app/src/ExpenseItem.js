import './ExpenseItem.css'
function ExpenseItem(){
    return (
        // writing more complex JSX Code
        // Note - must have a root 
        <div className ="expense-item">
            <div>18th Sept 2022 </div>
            <div className="expense-item__description" >
                <div>Car Insurance </div>
                <h1 className="expense-item__price" > Price =100 $</h1>
            </div>
        </div>
    );
};
export default ExpenseItem;