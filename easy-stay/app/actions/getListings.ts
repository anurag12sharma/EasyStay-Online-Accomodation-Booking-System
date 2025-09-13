import prisma from "@/app/libs/prismadb";

export default async function getListings(){
    try{
        const listings = await prisma.listing.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        
        const safeListings = listings.map((listing)=>({
            ...listing,
            createdAt: listing.createdAt.toISOString(),
        }));

        return safeListings;

    } catch (error: unknown) {
        if (error instanceof Error) throw error;
        throw new Error(String(error));
      }
      
}