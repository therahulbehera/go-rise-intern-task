import Products from "@/components/products";
import React from "react";

const page = () => {
  return (
    <div className="m-6">
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <Products />
      </div>
    </div>
  );
};

export default page;
