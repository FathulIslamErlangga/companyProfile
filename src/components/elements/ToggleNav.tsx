import React from "react";
import Button from "../parts/Button";
import { useGlobalStateContext } from "../contexts/GlobalProvider";

const ToggleNav = () => {
  const { handleToggle: ToggleNav, isToggle } = useGlobalStateContext();
  return (
    <Button className="absolute  right-15 block lg:hidden" onClick={ToggleNav}>
      <span
        className={`w-[30px] h-[2px] my-2 block bg-black ${
          isToggle ? "origin-top-left rotate-45" : " "
        }`}
      ></span>
      <span
        className={`w-[30px] h-[2px] my-2 block bg-black ${
          isToggle ? "scale-0" : " "
        }`}
      ></span>
      <span
        className={`w-[30px] h-[2px] my-2 block bg-black ${
          isToggle ? "origin-bottom-left -rotate-45" : " "
        }`}
      ></span>
    </Button>
  );
};

export default ToggleNav;
