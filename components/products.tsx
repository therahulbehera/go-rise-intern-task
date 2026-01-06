"use client";

import Link from "next/link";
import React from "react";
import { Card } from "./card";
import { Product } from "@/lib/products";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "./ui/spinner";

const Products = () => {
  const { isFetching, data, isFetched } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("/api/products");
      if (!res.ok) throw new Error("Fetch failed");
      return res.json();
    },
    staleTime: 5 * 60 * 1000,
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
