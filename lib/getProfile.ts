import { prisma } from "@/lib/prisma";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getProfileData() {
  // Ex. récupère depuis une DB via Prisma
  return await prisma.profile.findMany(
    {
            include: { skills: true , socialLinks:true},
        }
  );
}

export async function getProjectData() {
  // Ex. récupère depuis une DB via Prisma
  return await prisma.project.findMany();
}

export async function apiProjectData() {
  // Ex. récupère depuis une DB via Prisma
  return await fetch(`${baseUrl}/api/profile`);
}


export async function apiProfileData() {
  // Ex. récupère depuis une DB via Prisma
  return await fetch(`${baseUrl}/api/profile`)
}


