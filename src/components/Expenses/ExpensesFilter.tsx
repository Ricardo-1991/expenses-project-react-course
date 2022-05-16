import { ChangeEvent } from "react";
import "./ExpensesFilter.css";

interface onChangeFilterProps {
  onChangeFilter: (arg: string) => void;
  selected: string;
}

export function ExpensesFilter({
  onChangeFilter,
  selected
}: onChangeFilterProps) {
  function onHandlerYear(event: ChangeEvent<HTMLSelectElement>) {
    onChangeFilter(event.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={onHandlerYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
