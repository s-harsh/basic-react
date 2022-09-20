import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseItem1 from "./ExpenseItem1";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 300,
      date: new Date(2022, 8, 20),
    },
    {
      title: "Bike Insurance",
      amount: 400,
      date: new Date(2022, 8, 20),
    },
    {
      title: "Scooty Insurance",
      amount: 500,
      date: new Date(2022, 8, 20),
    },
  ];
  const para = document.createElement("p");
  para.textContent = "This is harsh by js";
  document.getElementById("root").append(para);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ExpenseItem></ExpenseItem>
        <ExpenseItem1
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem1>
        <ExpenseItem1
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem1>
        <ExpenseItem1
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseItem1>
        <p>This is Harsh!</p>
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
