"use client";

import { useLayoutEffect, useRef, useState } from "react";
import ArchitecturalPlan from "@/components/not-found/ArchitecturalPlan";
import NotFoundInfo from "@/components/not-found/NotFoundInfo";
import NotFoundTitleBlock from "@/components/not-found/NotFoundTitleBlock";

// Native size of the sheet's design - everything inside it is laid out with
// fixed units against this canvas, then the whole sheet is scaled down (never
// up) as a single unit to fit whatever space is actually available. Scaling
// it as one block, rather than trying to make each piece individually
// responsive, is what keeps every proportion intact at any viewport size.
const DESIGN_WIDTH = 1402;
const DESIGN_HEIGHT = 1122;
const FIT_MARGIN = 8;

export default function NotFound() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [scale, setScale] = useState<number | null>(null);

	useLayoutEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const updateScale = () => {
			const { width, height } = container.getBoundingClientRect();
			const next = Math.min(
				(width - FIT_MARGIN * 2) / DESIGN_WIDTH,
				(height - FIT_MARGIN * 2) / DESIGN_HEIGHT,
				1,
			);
			setScale(Math.max(next, 0.1));
		};

		updateScale();
		const observer = new ResizeObserver(updateScale);
		observer.observe(container);
		return () => observer.disconnect();
	}, []);

	return (
		<main
			ref={containerRef}
			className="relative h-dvh w-full overflow-hidden border border-zinc-300 bg-[#fdfdfc] text-zinc-950"
		>
			{scale !== null && (
				<div
					style={{
						width: DESIGN_WIDTH,
						height: DESIGN_HEIGHT,
						transform: `translate(-50%, -50%) scale(${scale})`,
					}}
					className="absolute left-1/2 top-1/2"
				>
					<NotFoundInfo />

					<div className="absolute left-[49%] top-[15%] h-[52%] w-[43%]">
						{/* <div className="absolute left-[5%] top-[-30%]"> */}
						<ArchitecturalPlan className="h-full w-full" />
					</div>

					<NotFoundTitleBlock />
				</div>
			)}
		</main>
	);
}
