/* Now we learn dynamic working with JSX.
Here just we use baasic var
If we want to  add javaScript in the JSX code we use this {} */

/* We use props in React to pass data from one component to another (from a parent component to a child component(s)).
Props is just a shorter way of saying properties. They are useful when you want the flow of data in your app to be dynamic. */

import React,{useState} from 'react';
// between the curly brance we can import exact specifically named things
/* useState function all to define values as state, where changes to these value should reflect in comp function
Use State is a hook in react (all react hooks can be recognize by the fact that they start with the word 'use')
All the hooks must called inside the component function like - ExpenseItem, they can't be called outside of these funciton
And they shouldn't called in a nested function

useState is a Hook that lets you add React state to function components*/
import Card from './card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  // let title=props.title;
  const [title,setTitle]=useState(props.title);
  
  const clickHandler=()=>{
    setTitle('Updated');
    console.log(title);
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
      {/* Handling events with React elements is very similar to handling events on DOM elements.
      React events are named using camelCase, rather than lowercase.
      With JSX you pass a function as the event handler, rather than a string. */ }
    </Card>
  );
}

export default ExpenseItem;

/* The toISOString() method returns a string in simplified extended ISO format (ISO 8601), 
            which is always 24 or 27 characters long ( YYYY-MM-DDTHH:mm:ss. sssZ or ±YYYYYY-MM-DDTHH:mm:ss. sssZ 
            , respectively). The timezone is always zero UTC offset, as denoted by the suffix Z 
            
            The toISOString() method returns a date object as a string */
