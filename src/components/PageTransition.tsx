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
			enter={{
				"nav-forward": "page-enter-forward",
				"nav-back": "page-enter-back",
				default: "none",
			}}
			exit={{
				"nav-forward": "page-exit-forward",
				"nav-back": "page-exit-back",
				default: "none",
			}}
			default="none"
		>
			{children}
		</ViewTransition>
	);
}
