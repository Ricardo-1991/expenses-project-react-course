import { useState } from "react";
import { ExpenseItem } from "./ExpenseItem";
import { Card } from "../UI/Card";
import { ExpensesFilter } from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";
import "./Expenses.css";

interface ItemsProps {
  expensesItems: Array<{
    id: string;
    title: string;
    amount: number;
    date: Date;
  }>;
}

export function Expenses({ expensesItems }: ItemsProps) {
  const [filteredYear, setFilteredYear] = useState("2022");

  function filterChangeHandler(selectedYear: string) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = expensesItems.filter(expensesItems => {
    return expensesItems.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </>
  );
}
