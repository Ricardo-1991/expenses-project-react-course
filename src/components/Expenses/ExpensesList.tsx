import { ExpenseItem } from "./ExpenseItem";
import "./ExpensesList.css";

interface ExpensesFilteredListProps {
  filteredExpenses: Array<{
    id: string;
    title: string;
    amount: number;
    date: Date;
  }>;
}

export function ExpensesList({ filteredExpenses }: ExpensesFilteredListProps) {
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map(expenses => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </ul>
  );
}
