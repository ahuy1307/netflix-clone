import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
	try {
		const movies = await prisma.movie.findMany();
		return new NextResponse(JSON.stringify(movies));
	} catch (error) {
		return new NextResponse("Server Error");
	}
};
