import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

interface ExpenseProps {
  title: string;
  amount: number;
  date: Date;
  id: string;
}

interface ExpenseHandlerProps {
  onAddExpenseHandler: (arg: ExpenseProps) => void;
}

export function NewExpense({ onAddExpenseHandler }: ExpenseHandlerProps) {
  const [isEditing, setIsEditing] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData: ExpenseProps) {
    onAddExpenseHandler(enteredExpenseData);
    setIsEditing(false);
  }

  function startEditingHandler() {
    setIsEditing(true);
  }

  function stopEditingHandler() {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}
