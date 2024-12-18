import { useGlobalStateContext } from "@/components/contexts/GlobalProvider";
import Button from "@/components/parts/Button";

import Image from "next/image";

import React from "react";

const ButtonsModal = () => {
  const { onClickModal: onClickModal } = useGlobalStateContext();

  return (
    <>
      <div className="pt-10">
        <div className="ml-4">
          <Button
            className="border-2 border-transparent text-slate-500 rounded-md w-[100px]"
            onClick={onClickModal}
          >
            <Image
              src="/images/filter.png"
              alt="filter-icon"
              width={25}
              height={25}
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ButtonsModal;
