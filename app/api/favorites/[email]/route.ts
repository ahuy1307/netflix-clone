import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
	const email = req.url.split("/favorites/")[1];
	try {
		const user = await prisma.user.findUnique({
			where: {
				email: email,
			},
		});

		const movies = await prisma.movie.findMany({
			where: {
				id: {
					in: user?.favoriteIds,
				},
			},
		});

		return new NextResponse(JSON.stringify(movies));
	} catch (error) {
		return new NextResponse("Server error");
	}
};
