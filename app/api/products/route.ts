import { products } from "@/lib/products";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    products,
  });
}
