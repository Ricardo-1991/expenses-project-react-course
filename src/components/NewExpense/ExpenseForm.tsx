import { useState, ChangeEvent, FormEvent } from "react";
import "./ExpenseForm.css";

interface ExpenseProps {
  title: string;
  amount: number;
  date: Date;
  id: string;
}

interface ExpenseFormProps {
  onSaveExpenseDate: (arg: ExpenseProps) => void;
}

export function ExpenseForm({ onSaveExpenseDate }: ExpenseFormProps) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState("");

  function titleChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setEnteredAmount(Number(event.target.value));
  }

  function dateChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event: FormEvent) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      id: Math.random().toString()
    };

    onSaveExpenseDate(expenseData);

    setEnteredTitle("");
    setEnteredAmount(0);
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            value={enteredTitle}
            onChange={titleChangeHandler}
            type="text"
          />
        </div>

        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            value={enteredAmount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="new-expense__controls">
          <label>Date</label>
          <input
            value={enteredDate}
            onChange={dateChangeHandler}
            type="date"
            min="2022-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
