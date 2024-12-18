"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { StateToggle } from "./useState/stateToggle";
import { ICategoryService, IServices } from "@/uitls/type/companyType";
import { fetchCategory, fetchService } from "@/uitls/service/ServiceApi";

interface GlobalStateProviderProps {
  services: IServices[];
  categories: ICategoryService[];
  isToggle: boolean;
  isOpenModal: boolean;
  onClickModal: () => void;
  handleToggle: () => void;
  fetchAllData: () => Promise<void>;
}

const GlobalStateContext = createContext<GlobalStateProviderProps | undefined>(
  undefined
);
export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [services, setService] = useState<IServices[]>([]);
  const [categories, setCategories] = useState<ICategoryService[]>([]);

  const fetchAllData = async () => {
    try {
      const [isService, isCategories] = await Promise.all([
        fetchService(),
        fetchCategory(),
      ]);
      setService(isService);
      setCategories(isCategories);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);
  const { isToggle, handleToggle, isOpenModal, onClickModal } = StateToggle();
  return (
    <GlobalStateContext.Provider
      value={{
        isToggle,
        services,
        categories,
        isOpenModal,
        onClickModal,
        handleToggle,
        fetchAllData,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalStateContext = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error(
      "useGlobalStateContext must be used within a GlobalStateProvider"
    );
  }
  //   console.log(context);
  return context;
};
