"use client";
import { useGlobalStateContext } from "@/components/contexts/GlobalProvider";
import NavAside from "@/components/Service/NavAside";
import Services from "@/components/Service/Services";
import { useState } from "react";

const Service = () => {
  const { services, categories } = useGlobalStateContext();
  console.log("data", services);
  const [filters, setFilters] = useState(services);
  const hendleSearch = (query: string) => {
    if (!query) {
      setFilters(services);
    } else {
      const searchData = services.filter((service) => {
        return service.name.toLowerCase().includes(query.toLowerCase());
      });
      console.log(searchData);
      setFilters(searchData);
    }
  };
  const handleFilterCategory = (categoryId: number) => {
    const filteredData = services.filter(
      (service) => service.categories.id === categoryId
    );
    setFilters(filteredData);
  };
  return (
    <>
      <section className="lg:flex pt-32">
        <NavAside
          onSearch={hendleSearch}
          categories={categories}
          onFilterCategory={handleFilterCategory}
        />
        <div className="lg:flex-1 lg:w-full lg:p-6">
          <Services servicesData={filters} />
        </div>
      </section>
    </>
  );
};

export default Service;
