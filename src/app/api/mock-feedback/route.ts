import { NextResponse } from "next/server";
import data1 from "@/mockData/feedback1.json";
import data2 from "@/mockData/feedback2.json";
import data3 from "@/mockData/feedback3.json";
import data4 from "@/mockData/feedback4.json";
import data5 from "@/mockData/feedback5.json";

const samples = [data1, data2, data3, data4, data5];

export async function GET() {
  const random = samples[Math.floor(Math.random() * samples.length)];
  return NextResponse.json(random);
}
