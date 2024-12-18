import { useState } from "react";

export const StateToggle = () => {
  const [isToggle, setToggle] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleToggle = () => setToggle((prev) => !prev);
  const onClickModal = () => setIsOpenModal((prev) => !prev);
  return {
    isToggle,
    handleToggle,
    isOpenModal,
    onClickModal,
  };
};
