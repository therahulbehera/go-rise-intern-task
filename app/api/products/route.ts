import { products } from "@/lib/products";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const category = searchParams.get("category");
  const metal = searchParams.get("metal");

  let filtered = products;

  if (minPrice) filtered = filtered.filter((p) => p.price >= Number(minPrice));
  if (maxPrice) filtered = filtered.filter((p) => p.price <= Number(maxPrice));
  if (category)
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  if (metal)
    filtered = filtered.filter((p) =>
      p.metal.map((m) => m.toLowerCase()).includes(metal.toLowerCase())
    );

  return NextResponse.json({
    products: filtered,
  });
}
