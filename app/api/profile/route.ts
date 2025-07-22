import { getProfileData } from "@/lib/getProfile";
import { NextResponse } from "next/server";

// ✅ La bonne signature pour un handler GET dans app/api
export async function GET(request: Request) {
  try {
    const data = await getProfileData();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la récupération des profils :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}