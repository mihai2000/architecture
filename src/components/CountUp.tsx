"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({
	value,
	duration = 1200,
	className = "",
}: {
	value: number;
	duration?: number;
	className?: string;
}) {
	const ref = useRef<HTMLSpanElement>(null);
	const [count, setCount] = useState(0);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				observer.disconnect();

				const prefersReducedMotion = window.matchMedia(
					"(prefers-reduced-motion: reduce)",
				).matches;

				if (prefersReducedMotion) {
					setCount(value);
					return;
				}

				const start = performance.now();

				const step = (now: number) => {
					const progress = Math.min((now - start) / duration, 1);
					setCount(Math.round(progress * value));

					if (progress < 1) {
						requestAnimationFrame(step);
					}
				};

				requestAnimationFrame(step);
			},
			{ threshold: 0.4 },
		);

		observer.observe(element);

		return () => observer.disconnect();
	}, [value, duration]);

	return (
		<span ref={ref} className={className}>
			{count}
		</span>
	);
}
