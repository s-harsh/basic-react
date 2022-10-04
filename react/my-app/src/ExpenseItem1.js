/* Now we learn dynamic working with JSX.
Here just we use baasic var
If we want to  add javaScript in the JSX code we use this {} */

/* We use props in React to pass data from one component to another (from a parent component to a child component(s)).
Props is just a shorter way of saying properties. They are useful when you want the flow of data in your app to be dynamic. */

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  
  /* Don't too much logics on the JSX code ..make a seperate function then use it */
  const clickHandler=()=>{
    alert('Clicked!!');
  };
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler} >Change Title!</button>
      {/* Here we just point the function not execute it here, we don't add parentheses here
      Just repeat the name of the function.
      Because if we add parentheses here js would execute this when this line of code is being parsed
      adn this line of code parsed when the JSX code is returned, So it's then not executeing clickhandler
      when the click occurs but when thei JSX code is evaluated and that would be too early */}
      <button onClick={()=>{alert('Clicked!!!!!')}} >Change Title!</button>
    </div>
  );
}

export default ExpenseItem;

/* The toISOString() method returns a string in simplified extended ISO format (ISO 8601), 
            which is always 24 or 27 characters long ( YYYY-MM-DDTHH:mm:ss. sssZ or ±YYYYYY-MM-DDTHH:mm:ss. sssZ 
            , respectively). The timezone is always zero UTC offset, as denoted by the suffix Z 
            
            The toISOString() method returns a date object as a string */