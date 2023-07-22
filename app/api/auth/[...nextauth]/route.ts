import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prismadb";
import * as argon2 from "argon2";

const handler = NextAuth({
	providers: [
		GithubProvider({ clientId: process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET }),
		GoogleProvider({ clientId: process.env.GOOGLE_ID, clientSecret: process.env.GOOGLE_SECRET }),
		FacebookProvider({
			clientId: process.env.FACEBOOK_ID,
			clientSecret: process.env.FACEBOOK_SECRET,
		}),
		CredentialsProvider({
			type: "credentials",
			credentials: {},
			async authorize(credentials) {
				const { email, password } = credentials as { email: string; password: string };

				const user = await prisma.user.findUnique({ where: { email: email } });

				if (!user || !user.hashedPassword) {
					throw new Error("Email does not exist");
				}
				const isCorrectPassword = await argon2.verify(user.hashedPassword, password);
				if (!isCorrectPassword) {
					throw new Error("Incorrect password");
				}
				return user;
			},
		}),
	],
	pages: { signIn: "/auth" },
	debug: process.env.NODE_ENV === "development",
	secret: process.env.NEXTAUTH_SECRET,
});
export { handler as GET, handler as POST };
