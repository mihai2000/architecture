"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/lib/projects";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
	return (
		<svg
			width="16"
			height="12"
			viewBox="0 0 16 12"
			fill="none"
			aria-hidden="true"
			className={direction === "left" ? "rotate-180" : ""}
		>
			<path
				d="M9.5 1L15 6L9.5 11"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15 6H1"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default function ProjectCarousel({
	projects,
}: {
	projects: Project[];
}) {
	const { t } = useLanguage();
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
	]);

	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;

		// Reading emblaApi's initial state as soon as the instance exists,
		// not deriving it from React state — the recommended Embla pattern.
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setScrollSnaps(emblaApi.scrollSnapList());
		onSelect();
		emblaApi.on("select", onSelect);
		emblaApi.on("reInit", onSelect);

		return () => {
			emblaApi.off("select", onSelect);
			emblaApi.off("reInit", onSelect);
		};
	}, [emblaApi, onSelect]);

	return (
		<div>
			<div className="overflow-hidden" ref={emblaRef}>
				<div className="-ml-4 flex items-stretch py-3">
					{projects.map((project) => (
						<div
							key={project.slug}
							className="flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] xl:flex-[0_0_25%]"
						>
							<ProjectCard project={project} />
						</div>
					))}
				</div>
			</div>

			<div className="mt-6 grid grid-cols-[auto_1fr_auto] items-center gap-4">
				<button
					type="button"
					onClick={scrollPrev}
					aria-label={t.carousel.previous}
					className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition hover:border-zinc-900 hover:text-zinc-900"
				>
					<ArrowIcon direction="left" />
				</button>

				<div className="flex items-center justify-center gap-2">
					{scrollSnaps.map((_, index) => (
						<button
							key={index}
							type="button"
							onClick={() => emblaApi?.scrollTo(index)}
							aria-label={t.carousel.goToSlide(index + 1)}
							className={`h-1.5 rounded-full transition-all ${
								index === selectedIndex
									? "w-6 bg-zinc-900"
									: "w-1.5 bg-zinc-300 hover:bg-zinc-500"
							}`}
						/>
					))}
				</div>

				<button
					type="button"
					onClick={scrollNext}
					aria-label={t.carousel.next}
					className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition hover:border-zinc-900 hover:text-zinc-900"
				>
					<ArrowIcon direction="right" />
				</button>
			</div>
		</div>
	);
}
