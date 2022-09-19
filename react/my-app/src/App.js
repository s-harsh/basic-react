import logo from './logo.svg';
import './App.css';
import ExpenseItem from './ExpenseItem';
import ExpenseItem1 from './ExpenseItem1';

function App() {
  const para=document.createElement('p');
  para.textContent='This is harsh by js';
  document.getElementById('root').append(para);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ExpenseItem></ExpenseItem>
        <ExpenseItem1></ExpenseItem1>
        <p>
          This is Harsh!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
