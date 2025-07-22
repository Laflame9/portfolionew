import { prisma } from "@/lib/prisma";

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
