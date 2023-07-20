import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async () => {
	try {
		const countMovie = await prisma.movie.count();
		const skipIndex = Math.floor(Math.random() * countMovie);

		const movie = await prisma.movie.findMany({
			take: 1,
			skip: skipIndex,
		});

		return new NextResponse(JSON.stringify(movie[0]));
	} catch (error) {
		return new NextResponse("Server Error", { status: 500 });
	}
};
