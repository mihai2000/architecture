"use client";

import { usePathname } from "next/navigation";
import { ViewTransition } from "react";

export default function PageTransition({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	return (
		<ViewTransition
			key={pathname}
			enter={{ "page-nav": "page-enter", default: "none" }}
			exit={{ "page-nav": "page-exit", default: "none" }}
		>
			{children}
		</ViewTransition>
	);
}
