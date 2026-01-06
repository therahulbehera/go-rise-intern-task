import { Card } from "@/components/card";
import ProductsFilter from "@/components/products-filter";
import { Product } from "@/lib/products";
import Link from "next/link";
import React from "react";

const page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);

  if (!res.ok) throw new Error("Fetch failed!");

  const { data } = await res.json();
  const products = data.map((product: Product) => (
    <Link href={`/products/${product.id}`} key={product.id}>
      <Card name={product.name} image={product.image} price={product.price} />
    </Link>
  ));

  return (
    <div className="m-6">
      <ProductsFilter />
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {products}
      </div>
    </div>
  );
};

export default page;
