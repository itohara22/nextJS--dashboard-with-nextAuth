import { NextResponse } from "next/server";

const users = [
  {
    Guest: 200,
    User: 250
  },
  {
    Guest: 300,
    User: 370
  },
  {
    Guest: 100,
    User: 300
  },
  {
    Guest: 450,
    User: 500
  }
];

export function GET() {
  return NextResponse.json(users);
}
