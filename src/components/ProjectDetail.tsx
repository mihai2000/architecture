"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GalleryCategory, GalleryItem, Project } from "@/lib/projects";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Reveal from "@/components/Reveal";
import Select from "@/components/ui/Select";
import { DocumentIcon } from "@/components/icons/DocumentIcon";
import { ExpandIcon } from "@/components/icons/ExpandIcon";

const ALL_GROUPS = "all";
const CATEGORY_ORDER: GalleryCategory[] = ["sketch", "plan", "photo"];
const CATEGORY_DOT: Record<GalleryCategory, string> = {
	sketch: "bg-zinc-400",
	plan: "bg-amber-600",
	photo: "bg-sky-500",
};

export default function ProjectDetail({ project }: { project: Project }) {
	const { t, locale } = useLanguage();
	const paragraphs = project.description[locale];

	const categoryCounts = useMemo(() => {
		const counts: Partial<Record<GalleryCategory, number>> = {};
		for (const item of project.gallery) {
			counts[item.category] = (counts[item.category] ?? 0) + 1;
		}
		return counts;
	}, [project.gallery]);

	const availableCategories = useMemo(
		() => CATEGORY_ORDER.filter((cat) => (categoryCounts[cat] ?? 0) > 0),
		[categoryCounts],
	);

	const [categoryFilter, setCategoryFilter] = useState<GalleryCategory>(() =>
		availableCategories.includes("sketch") ? "sketch" : availableCategories[0],
	);
	const [groupFilter, setGroupFilter] = useState(ALL_GROUPS);
	const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

	useEffect(() => {
		if (!lightboxItem) return;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") setLightboxItem(null);
		};
		document.addEventListener("keydown", onKeyDown);
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.body.style.overflow = previousOverflow;
		};
	}, [lightboxItem]);

	const selectCategory = (cat: GalleryCategory) => {
		setCategoryFilter(cat);
		setGroupFilter(ALL_GROUPS);
	};

	const categoryItems = useMemo(
		() => project.gallery.filter((item) => item.category === categoryFilter),
		[project.gallery, categoryFilter],
	);

	const groups = useMemo(() => {
		const seen = new Map<string, string>();
		for (const item of categoryItems) {
			if (item.groupKey && item.groupLabel && !seen.has(item.groupKey)) {
				seen.set(item.groupKey, item.groupLabel[locale]);
			}
		}
		return Array.from(seen, ([value, label]) => ({ value, label }));
	}, [categoryItems, locale]);

	const filteredGallery = useMemo(() => {
		if (groupFilter === ALL_GROUPS) return categoryItems;
		return categoryItems.filter((item) => item.groupKey === groupFilter);
	}, [categoryItems, groupFilter]);

	return (
		<article className="mx-auto">
			<Link
				href="/projects"
				className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-zinc-600 transition hover:text-black"
			>
				← {t.projectDetail.back}
			</Link>

			<Reveal as="header" className="mt-6 border-b border-zinc-300 pb-8">
				{/* <p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
					{project.type}
				</p> */}
				<div className="d-flex flex gap-2">
					<Image
						width={75}
						height={75}
						src={project.logo}
						alt={project.imageAlt}
					/>
					<h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
						{project.title}
					</h1>
				</div>
				<p className="mt-2 text-base text-zinc-600">{project.location}</p>

				<dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
					<div>
						<dt className="text-[0.65rem] uppercase tracking-[0.3em] text-zinc-500">
							{t.projectDetail.yearLabel}
						</dt>
						<dd className="mt-1 text-sm text-zinc-800">{project.year}</dd>
					</div>
					<div>
						<dt className="text-[0.65rem] uppercase tracking-[0.3em] text-zinc-500">
							{t.projectDetail.areaLabel}
						</dt>
						<dd className="mt-1 text-sm text-zinc-800">{project.area}</dd>
					</div>
				</dl>
			</Reveal>

			<Reveal delay={100} className="mt-8">
				{project.imageWidth && project.imageHeight ? (
					<Image
						src={project.image}
						alt={project.imageAlt}
						width={project.imageWidth}
						height={project.imageHeight}
						sizes="100vw"
						loading="eager"
						fetchPriority="high"
						className="mx-auto block h-auto w-full max-w-5xl rounded-[2rem]"
					/>
				) : (
					<div className="relative h-72 overflow-hidden rounded-[2rem] sm:h-96">
						<Image
							src={project.image}
							alt={project.imageAlt}
							fill
							sizes="100vw"
							loading="eager"
							fetchPriority="high"
							className="object-cover"
						/>
					</div>
				)}
			</Reveal>

			<Reveal
				delay={180}
				className="mx-auto mt-8 grid max-w-6xl gap-8  lg:grid-cols-2"
			>
				{paragraphs.map((paragraph, index) => (
					<p key={index} className="text-base leading-8 text-zinc-700">
						{paragraph}
					</p>
				))}
			</Reveal>

			{project.pdfUrl && (
				<Reveal delay={210} className="mx-auto mt-8 max-w-6xl">
					<a
						href={project.pdfUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="group flex items-center justify-between gap-4 rounded-[1.5rem] border border-zinc-300 px-6 py-5 transition hover:border-zinc-900"
					>
						<div className="flex items-center gap-4">
							<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white">
								<DocumentIcon />
							</span>
							<div>
								<p className="text-sm font-semibold text-zinc-900">
									{t.projectDetail.pdfCtaTitle}
								</p>
								<p className="text-xs text-zinc-600">
									{t.projectDetail.pdfCtaSubtitle}
								</p>
							</div>
						</div>
						<span className="text-lg text-zinc-500 transition group-hover:translate-x-1">
							→
						</span>
					</a>
				</Reveal>
			)}

			<Reveal delay={240} as="section" className="mx-auto mt-14">
				<h2 className="text-2xl font-semibold">
					{t.projectDetail.galleryHeading}
				</h2>

				{(availableCategories.length > 1 || groups.length > 1) && (
					<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
						{availableCategories.length > 1 ? (
							<div className="flex flex-wrap gap-2">
								{availableCategories.map((cat) => (
									<button
										key={cat}
										type="button"
										onClick={() => selectCategory(cat)}
										aria-pressed={categoryFilter === cat}
										className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs transition ${
											categoryFilter === cat
												? "border-zinc-900 bg-zinc-900 text-white"
												: "border-zinc-300 text-zinc-700 hover:border-zinc-900 hover:text-zinc-900"
										}`}
									>
										<span
											className={`h-2 w-2 rounded-full ${CATEGORY_DOT[cat]}`}
										/>
										{categoryCounts[cat]}
										<span className="uppercase tracking-[0.2em]">
											{t.projectDetail.categories[cat]}
										</span>
									</button>
								))}
							</div>
						) : (
							<span />
						)}

						{groups.length > 1 && (
							<div className="flex items-center gap-3">
								<label
									htmlFor="gallery-filter"
									className="text-[0.65rem] uppercase tracking-[0.3em] text-zinc-500"
								>
									{t.projectDetail.filterLabel}
								</label>
								<Select
									id="gallery-filter"
									value={groupFilter}
									onValueChange={setGroupFilter}
									options={[
										{ value: ALL_GROUPS, label: t.projectDetail.filterAll },
										...groups,
									]}
									ariaLabel={t.projectDetail.filterLabel}
								/>
							</div>
						)}
					</div>
				)}

				<div
					className={
						categoryFilter === "sketch"
							? "mt-6 flex flex-wrap justify-center gap-4"
							: "mt-6 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3"
					}
				>
					{filteredGallery.map((item, index) => {
						const isCappedSketch =
							item.category === "sketch" && item.width && item.height;
						return (
							<div
								key={`${item.groupKey ?? item.category}-${index}`}
								role="button"
								tabIndex={0}
								onClick={() => setLightboxItem(item)}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										e.preventDefault();
										setLightboxItem(item);
									}
								}}
								className="group relative isolate cursor-pointer overflow-hidden rounded-[1.5rem] border border-zinc-300 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_25px_70px_-25px_rgba(0,0,0,0.3)] hover:ring-1 hover:ring-inset hover:ring-amber-600/30"
							>
								{isCappedSketch ? (
									<div className="relative h-56 w-[21rem] sm:h-72 sm:w-[27rem]">
										<Image
											src={item.url}
											alt={item.alt}
											fill
											sizes="(min-width: 640px) 27rem, 21rem"
											className="transform-gpu rounded-[1.5rem] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
										/>
									</div>
								) : item.width && item.height ? (
									<Image
										src={item.url}
										alt={item.alt}
										width={item.width}
										height={item.height}
										sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
										className="h-auto w-full transform-gpu rounded-[1.5rem] transition-transform duration-700 ease-out group-hover:scale-110"
									/>
								) : (
									<div className="relative h-56 w-full">
										<Image
											src={item.url}
											alt={item.alt}
											fill
											sizes="(min-width: 640px) 50vw, 100vw"
											className="transform-gpu rounded-[1.5rem] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
										/>
									</div>
								)}
								<div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
								<span className="pointer-events-none absolute inset-0 flex scale-90 items-center justify-center text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
									<span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
										<ExpandIcon />
									</span>
								</span>
								{/* <span className="absolute left-3 top-3 rounded-full bg-zinc-900/80 px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-white">
									{t.projectDetail.categories[item.category]}
								</span> */}
								{item.groupLabel && (
									<span className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[0.65rem] tracking-wide text-zinc-800">
										{item.groupLabel[locale]}
									</span>
								)}
							</div>
						);
					})}
				</div>
			</Reveal>

			{lightboxItem && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-10"
					onClick={() => setLightboxItem(null)}
				>
					<button
						type="button"
						onClick={() => setLightboxItem(null)}
						aria-label={t.projectDetail.closeLightbox}
						className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white transition hover:bg-white/20"
					>
						&times;
					</button>
					<div
						className="relative max-h-full max-w-full"
						onClick={(e) => e.stopPropagation()}
					>
						{lightboxItem.width && lightboxItem.height ? (
							<Image
								src={lightboxItem.url}
								alt={lightboxItem.alt}
								width={1280}
								height={905}
								sizes="90vw"
								className="max-h-[85vh]  max-w-full rounded-lg object-contain"
							/>
						) : (
							// eslint-disable-next-line @next/next/no-img-element
							<img
								src={lightboxItem.url}
								alt={lightboxItem.alt}
								className="max-h-[85vh] max-w-full rounded-lg object-contain"
							/>
						)}
						{lightboxItem.groupLabel && (
							<span className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[0.65rem] tracking-wide text-zinc-800">
								{lightboxItem.groupLabel[locale]}
							</span>
						)}
					</div>
				</div>
			)}
		</article>
	);
}
