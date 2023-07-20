"use client";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

function SessionContext({ children }: { children: ReactNode }) {
	return <SessionProvider>{children}</SessionProvider>;
}

export default SessionContext;
