"use client";
import InfoModal from "@/components/InfoModal";
import { Movie } from "@/types/interface";
import { useEffect, useState } from "react";

function ModalProvider({ data }: { data: Movie }) {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return null;
	return (
		<>
			<InfoModal data={data} />
		</>
	);
}

export default ModalProvider;
