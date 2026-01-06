import Products from "@/components/products";
import React from "react";

const page = () => {
  return (
    <div className="m-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
        <Products />
      </div>
    </div>
  );
};

export default page;
