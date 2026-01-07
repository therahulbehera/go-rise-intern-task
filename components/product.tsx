"use client";

import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Spinner } from "./ui/spinner";
import Image from "next/image";
import { Button } from "./ui/button";

const Product = ({ prodId }: { prodId: string }) => {
  const [variant, setVariant] = useState("");
  const { isFetching, isFetched, data } = useQuery({
    queryKey: ["product", prodId],
    queryFn: async ({ queryKey }) => {
      const [, id] = queryKey;
      const res = await fetch(`/api/products/${id}`);
      if (!res.ok) throw new Error("Fetching failed.");
      return res.json();
    },
  });

  if (isFetching)
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <Spinner />
      </div>
    );

  if (!data) return <span>Failed</span>;

  if (isFetched) {
    const { image, name, price, description, category, metal, variants } =
      data?.data;

    return (
      <section className="w-9/12 h-full flex flex-col md:flex-row justify-center items-center gap-10 m-auto py-8">
        <div className="w-full h-full">
          <span className="text-xl h-full w-full md:hidden">{name}</span>
          <Image
            src={image}
            alt={""}
            width={400}
            height={400}
            unoptimized
            className="w-full h-full my-2"
          />
        </div>
        <div className="flex flex-col gap-4 md:gap-20 justify-between w-full">
          <span className="text-4xl">₹{price}</span>
          <span className="text-justify">{description}</span>
          <div></div>
          <table className="table-auto w-full border ">
            <tbody>
              <tr>
                <td className="border p-2">Category</td>
                <td className="border p-2">{category}</td>
              </tr>
              <tr>
                <td className="border p-2">Metal</td>
                <td className="border p-2">{metal}</td>
              </tr>
              <tr>
                <td className="border p-2">Varient</td>
                <td className="border p-2">{variants.join(", ")}</td>
              </tr>
            </tbody>
          </table>
          <div className="w-full">
            <div className="flex flex-wrap justify-start items-center">
              {variants.map((v: string) => {
                const isSelected = variant == v;

                return (
                  <Button
                    key={v}
                    className="mr-2 my-2 p-8 w-40"
                    onClick={() => setVariant(v)}
                    variant={isSelected ? "outline" : "default"}
                  >
                    {v}
                  </Button>
                );
              })}
            </div>
            <Button className="w-full p-8 bg-green-500">Add to Cart</Button>
          </div>
        </div>
      </section>
    );
  }
};

export default Product;
