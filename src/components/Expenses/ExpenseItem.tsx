import { ExpenseDate } from "./ExpenseDate";
import { Card } from "../UI/Card";
import "./ExpenseItem.css";

interface ExpenseProps {
  title: string;
  amount: number;
  date: Date;
}

export function ExpenseItem(props: ExpenseProps) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
