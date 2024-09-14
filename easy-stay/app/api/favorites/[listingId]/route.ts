import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
    listingId?: string;
}

export async function POST(
    request: Request,
    { params }: { params: IParams }
): Promise<NextResponse> {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
        }

        const { listingId } = params;

        if (!listingId || typeof listingId !== 'string') {
            return NextResponse.json({ error: 'Invalid listing ID' }, { status: 400 });
        }

        let favoriteIds = [...(currentUser.favoriteIds || [])];
        favoriteIds.push(listingId);

        const user = await prisma.user.update({
            where: { id: currentUser.id },
            data: { favoriteIds }
        });

        return NextResponse.json(user);
    } catch (error) {
        console.error('POST /api/favorites/[listingId] error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: IParams }
): Promise<NextResponse> {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
        }

        const { listingId } = params;

        if (!listingId || typeof listingId !== 'string') {
            return NextResponse.json({ error: 'Invalid listing ID' }, { status: 400 });
        }

        let favoriteIds = [...(currentUser.favoriteIds || [])];
        favoriteIds = favoriteIds.filter(id => id !== listingId);

        const user = await prisma.user.update({
            where: { id: currentUser.id },
            data: { favoriteIds }
        });

        return NextResponse.json(user);
    } catch (error) {
        console.error('DELETE /api/favorites/[listingId] error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
