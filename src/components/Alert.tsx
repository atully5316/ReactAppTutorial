import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <div
      className="alert alert-primary alert-dismissable fade show"
      role="alert"
    >
      {children}
    </div>
  );
};

export default Alert;
