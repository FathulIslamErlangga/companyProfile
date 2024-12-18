import { IElements } from "@/uitls/type/Elements";
import React from "react";
interface IButton extends IElements {
  onClick: () => void;
}
const Button = ({ children, className, onClick }: IButton) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
