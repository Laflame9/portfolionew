import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// ✅ La bonne signature pour un handler GET dans app/api
export async function GET(request: Request) {
  try {
    const data = await prisma.project.findMany();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la récupération des project :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}