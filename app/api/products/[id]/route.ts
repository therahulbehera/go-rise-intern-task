import { products } from "@/lib/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const data = products.find((product) => product.id == id && product);

  return NextResponse.json({
    status: 200,
    message: `Successfully fetched product id ${id}`,
    data,
  });
}
