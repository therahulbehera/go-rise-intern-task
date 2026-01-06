import { products } from "@/lib/products";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: 200,
    message: "Successfully fetched Data.",
    data: products,
  });
}
