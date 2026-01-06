import Product from "@/components/product";
import React from "react";

type Props = { params: Promise<{ prodId: string }> };

const page = async (props: Props) => {
  const { prodId } = await props.params;

  return (
    <>
      <Product prodId={prodId} />
    </>
  );
};

export default page;
