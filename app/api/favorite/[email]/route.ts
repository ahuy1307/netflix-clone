import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
	const email = req.url.split("/favorite/")[1];
	const { id } = await req.json();

	try {
		const updateUser = await prisma.user.update({
			where: {
				email: email,
			},
			data: {
				favoriteIds: {
					push: id,
				},
			},
		});

		return new NextResponse("Add favorite successfully!", { status: 200, statusText: "Add favorite successfully!" });
	} catch (error) {
		return new NextResponse("Server error", {
			status: 500,
		});
	}
};

export const DELETE = async (req: Request) => {
	const email = req.url.split("/favorite/")[1].split("?id=")[0];
	const url = new URL(req.url);
	const id = url.searchParams.get("id");

	try {
		const user = await prisma.user.findUnique({
			where: {
				email: email,
			},
		});

		const newFavoriteIds = user?.favoriteIds.filter((item) => item !== id);

		const deleteUser = await prisma.user.update({
			where: {
				email: email,
			},
			data: {
				favoriteIds: newFavoriteIds,
			},
		});

		return new NextResponse("Remove favorite successfully!", { status: 200, statusText: "Remove favorite successfully!" });
	} catch (error) {
		return new NextResponse("Server error", {
			status: 500,
		});
	}
};
