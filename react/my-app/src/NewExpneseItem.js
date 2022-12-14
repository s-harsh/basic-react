import ExpenseItem1 from "./ExpenseItem1";
import "./expense.css";

function NewExpenseItem(props) {
  return (
    <div className="expenses">
      <h2>Let's get started! Harsh</h2>
      <ExpenseItem1
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem1
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem1
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem1
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </div>
  );
}

export default NewExpenseItem;
