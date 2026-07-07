"use client";

import { useEffect, useRef, useState } from "react";

type RevealTag = "div" | "section" | "header";

export default function Reveal({
	children,
	className = "",
	delay = 0,
	as = "div",
}: {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	as?: RevealTag;
}) {
	const ref = useRef<HTMLElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.15 },
		);

		observer.observe(element);

		return () => observer.disconnect();
	}, []);

	const Tag = as;

	return (
		<Tag
			ref={ref as React.Ref<HTMLDivElement>}
			className={`transition-all duration-700 ease-out ${
				visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
			} ${className}`}
			style={{ transitionDelay: `${delay}ms` }}
		>
			{children}
		</Tag>
	);
}
