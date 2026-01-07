"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select,
} from "./ui/select";
import { useRouter } from "next/navigation";

const ProductsFilter = () => {
  const [minPrice, setMinPrice] = useState<string | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<string | undefined>(undefined);
  const [category, setCategory] = useState<string>();
  const [metal, setMetal] = useState<string>();

  const router = useRouter();

  const buttonHandler = () => {
    const params = new URLSearchParams();

    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (metal) params.set("metal", metal);
    if (category) params.set("category", category);

    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="bg-green w-full my-8 p-4 flex flex-col md:flex-row gap-4 justify-between items-center">
      <Input
        placeholder="minPrice"
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <Input
        placeholder="maxPrice"
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <Select value={metal} onValueChange={(e) => setMetal(e)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Metal" />
        </SelectTrigger>
        <SelectContent className="bg-green-500">
          <SelectItem value="gold">Gold</SelectItem>
          <SelectItem value="silver">Silver</SelectItem>
          <SelectItem value="rose gold">Rose Gold</SelectItem>
          <SelectItem value="white gold">White Gold</SelectItem>
        </SelectContent>
      </Select>
      <Select value={category} onValueChange={(e) => setCategory(e)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent className="bg-green-500">
          <SelectItem value="necklace">Necklace</SelectItem>
          <SelectItem value="ring">Ring</SelectItem>
          <SelectItem value="earrings">Earrings</SelectItem>
          <SelectItem value="bracelet">Bracelet</SelectItem>
        </SelectContent>
      </Select>
      <Button className="w-full md:w-20" onClick={buttonHandler}>
        Search
      </Button>
      <Button
        className="w-full md:w-20"
        onClick={() => {
          setMinPrice(undefined);
          setMaxPrice(undefined);
          setMetal("");
          setCategory("");
          router.push("/products");
        }}
      >
        Reset
      </Button>
    </div>
  );
};

export default ProductsFilter;
