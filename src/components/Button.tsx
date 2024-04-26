import { ReactNode } from "react";
import { useState } from "react";

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return <div className="btn btn-success">{children}</div>;
};

export default Button;
