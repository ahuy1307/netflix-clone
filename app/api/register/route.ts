import prisma from "@/libs/prismadb";
import * as argon2 from "argon2";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
	try {
		const { name, email, password } = await req.json();
		const hashedPassword = await argon2.hash(password);
		const user = await prisma.user.findUnique({
			where: {
				email: email,
			},
		});

		if (user) return new NextResponse("Duplicate user", { status: 400, statusText: "Duplicate user" });

		await prisma.user.create({
			data: {
				name: name,
				email: email,
				hashedPassword: hashedPassword,
			},
		});

		return new NextResponse("Register successfully", { status: 200, statusText: "Register successfull" });
	} catch (error) {
		return new NextResponse("Server error", { status: 500 });
	}
};
