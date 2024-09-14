import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
    listingId?: string;
}

export async function POST(
    request: Request,
    {params}: {params: IParams}
) {
    const currentUser = await getCurrentUser();
    if(!currentUser){
        return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
    }

    const {listingId} = params;

    if (!listingId || typeof listingId !== 'string'){
        return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    let favoriteIds = Array.isArray(currentUser.favoriteIds) ? [...currentUser.favoriteIds] : [];

    favoriteIds.push(listingId);

    const user = await prisma.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            favoriteIds
        }
    });
     
    return NextResponse.json(user);
}

export async function DELETE(
    request: Request,
    {params}: {params: IParams}
) {
    const currentUser = await getCurrentUser();

    if(!currentUser){
        return NextResponse.error();
    }

    const {listingId} = params;

    if(!listingId || typeof listingId !== 'string'){
        throw new Error('Invalid ID');
    }

    let favoriteIds = [...(currentUser.favoriteIds || [])];

    favoriteIds = favoriteIds.filter((id)=>id!==listingId);

    try {
        const user = await prisma.user.update({
            where: { id: currentUser.id },
            data: { favoriteIds }
        });
        return NextResponse.json(user);
    } catch (error) {
        console.error('Prisma update error:', error);
        return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
    }
}