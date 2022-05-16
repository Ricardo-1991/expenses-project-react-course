import "./Card.css";

interface ChildrenProps {
  children: React.ReactNode;
  className: string;
}

export function Card({ children, className }: ChildrenProps) {
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
}
