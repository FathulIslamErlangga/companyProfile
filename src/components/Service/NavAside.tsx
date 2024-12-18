"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { ICategoryService } from "@/uitls/type/companyType";
import debounce from "debounce";
import ButtonsModal from "./Modals/ButtonsModal";
import Modals from "./Modals/Modals";
import Button from "../parts/Button";

interface IModals {
  categories: ICategoryService[];
  onSearch: (query: string) => void;
  onFilterCategory: (categoryId: number) => void;
}

const NavAside = ({ onSearch, onFilterCategory, categories }: IModals) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isQuery, setQuery] = useState("");

  const handleSearch = debounce((value: string) => {
    console.log("Searching for:", value);
    onSearch(value);
  }, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="flex flex-wrap gap-5 relative">
          <ButtonsModal />
          <Modals
            handleSearch={onSearch}
            category={categories}
            onFilterCategories={onFilterCategory}
          />
        </div>
      ) : (
        <div className=" w-80  relative ">
          <div className="card bg-base-100 w-50 shadow-xl absolute mx-14">
            <details className="collapse collapse-arrow bg-base-200 ">
              <summary className="collapse-title text-xl font-medium">
                Search Blog
              </summary>
              <div className="collapse-content">
                <label className="input input-bordered flex items-center ">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Search"
                    onChange={handleChange}
                    value={isQuery}
                  />
                  <Image
                    src="/images/search.png"
                    alt=""
                    width={40}
                    height={40}
                    className="opacity-70 pr-4"
                  />
                </label>
              </div>
            </details>
          </div>
          <div className="bg-base-100 card w-50 shadow-xl mt-36 mx-14">
            <details className="collapse collapse-arrow bg-base-200 ">
              <summary className="collapse-title text-xl font-medium">
                Category Blog
              </summary>
              <div className="collapse-content">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    className="text-lg block"
                    onClick={() => onFilterCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </details>
          </div>
        </div>
      )}
    </>
  );
};
export default NavAside;
