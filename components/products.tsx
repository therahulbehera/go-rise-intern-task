"use client";

import Link from "next/link";
import React from "react";
import { Card } from "./card";
import { Product } from "@/lib/products";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "./ui/spinner";
import { useSearchParams } from "next/navigation";

const Products = () => {
  const searchParams = useSearchParams();

  const query = searchParams.toString();

  const { isFetching, data, isFetched } = useQuery({
    queryKey: ["products", query],
    queryFn: async () => {
      const res = await fetch(`/api/products?${query}`);
      if (!res.ok) throw new Error("Fetch failed");
      return res.json();
    },
  });

  if (isFetching)
    return (
      <>
        <Spinner />
      </>
    );

  if (isFetched)
    return (
      <>
        {data?.products?.map((product: Product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <Card
              name={product.name}
              image={product.image}
              price={product.price}
            />
          </Link>
        ))}
      </>
    );
};

export default Products;
