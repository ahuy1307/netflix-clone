import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ToasterProvider from "@/context/ToastProvider";
import SessionContext from "@/context/SessionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Netflix Clone",
	description: "This i Netflix Clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ToasterProvider />
				<SessionContext>{children}</SessionContext>
			</body>
		</html>
	);
}
