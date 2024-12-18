"use client";

import { IElements } from "@/uitls/type/Elements";

const Modal = ({ children, className }: IElements) => {
  return <div className={className}>{children}</div>;
};
export default Modal;
