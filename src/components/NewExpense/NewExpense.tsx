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
  function saveExpenseDataHandler(enteredExpenseData: ExpenseProps) {
    onAddExpenseHandler(enteredExpenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
    </div>
  );
}
