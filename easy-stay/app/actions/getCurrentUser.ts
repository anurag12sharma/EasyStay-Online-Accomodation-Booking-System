import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/[...nextauth]";
import prisma from "@/app/libs/prismadb";

export async function getSession() {
    return await getServerSession(authOptions);
}

export default async function getCurrentUser(){
    try{
        const session = await getSession();

        if(!session?.user?.email){
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session .user.email as string
            }
        })

        if(!currentUser){
            return null;
        }

        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null
        };
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Failed to fetch listing by ID: ${error.message}`);
        } else {
            throw new Error('An unexpected error occurred while fetching the listing.');
        }
    }
}