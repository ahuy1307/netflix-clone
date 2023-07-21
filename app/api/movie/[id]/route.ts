import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
	const id = req.url.split("/movie/")[1];

	try {
		const movie = await prisma.movie.findUnique({
			where: {
				id: id,
			},
		});

		return new NextResponse(JSON.stringify(movie));
	} catch (error) {
		return new NextResponse("Server error");
	}
};
