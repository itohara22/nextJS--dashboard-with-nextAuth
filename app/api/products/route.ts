import { NextResponse } from "next/server";

const products = [
  {
    type: "Basic Tees",
    qunatity: 60
  },
  {
    type: "Custom Cargos",
    qunatity: 20
  },
  {
    type: "Super Hoodies",
    qunatity: 40
  }
];

export function GET() {
  return NextResponse.json(products);
}
