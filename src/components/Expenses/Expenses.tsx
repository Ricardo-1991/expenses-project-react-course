import { useState } from "react";
import { ExpenseItem } from "./ExpenseItem";
import { Card } from "../UI/Card";
import { ExpensesFilter } from "./ExpensesFilter";
import "./Expenses.css";

interface ItemsProps {
  items: Array<{ id: string; title: string; amount: number; date: Date }>;
}

export function Expenses({ items }: ItemsProps) {
  const [filteredYear, setFilteredYear] = useState("");

  function filterChangeHandler(selectedYear: string) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = items.filter(expenses => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* {items.filter(yearFiltered => yearFil === filteredYear)} */}
        {filteredExpenses.map(expenses => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
      </Card>
    </>
  );
}
