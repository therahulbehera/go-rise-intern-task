import Products from "@/components/products";
import ProductsFilter from "@/components/products-filter";
import React from "react";

const page = () => {
  return (
    <div className="m-6">
      <ProductsFilter />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center md:mx-40">
        <Products />
      </div>
    </div>
  );
};

export default page;
