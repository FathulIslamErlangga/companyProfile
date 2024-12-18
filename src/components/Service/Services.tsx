import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IServices } from "../../uitls/type/companyType";
import { formatCurrency } from "../../uitls/currency";

interface IServicesProps {
  servicesData: IServices[];
}

const Services = ({ servicesData }: IServicesProps) => {
  return (
    <section className="pt-5 lg:pt-8">
      <div className="container lg:mx-auto lg:px-10">
        <div className="grid grid-cols-2 pb-5 px-4  lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            console.log(service.name);
            return (
              <div
                key={service.id}
                className="card card-compact bg-base-100 shadow-xl mx-auto w-full max-w-xs"
              >
                <Image
                  src={service.images.url}
                  className="w-full"
                  alt="Album"
                  width={250}
                  height={250}
                />
                <div className="card-body">
                  <h2 className="card-title">{service.name}</h2>
                  <p className="text-primaryDark">{service.decription}</p>
                  <div className="flex  justify-between w-full items-center pt-10">
                    <div className="flex justify-start">
                      <div className="flex flex-wrap gap-1 pl-2">
                        <span className="text-primary">
                          {formatCurrency(service.price)}
                        </span>
                      </div>
                    </div>
                    <div className="flex">
                      <Link href="">contact me</Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Services;
