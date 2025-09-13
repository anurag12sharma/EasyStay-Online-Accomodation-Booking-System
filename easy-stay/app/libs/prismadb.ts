import { PrismaClient } from "@prisma/client";

// eslint-disable-next-line no-var
declare global {
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
