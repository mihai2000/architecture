"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/projects";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Reveal from "@/components/Reveal";

export default function ProjectDetail({ project }: { project: Project }) {
	const { t, locale } = useLanguage();
	const paragraphs = project.description[locale];

	return (
		<article>
			<Link
				href="/projects"
				className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-zinc-600 transition hover:text-black"
			>
				← {t.projectDetail.back}
			</Link>

			<Reveal as="header" className="mt-6 border-b border-zinc-300 pb-8">
				<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
					{project.type}
				</p>
				<h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
					{project.title}
				</h1>
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

			<Reveal
				delay={100}
				className="relative mt-8 h-72 overflow-hidden rounded-[2rem] sm:h-96"
			>
				<Image
					src={project.image}
					alt={project.imageAlt}
					fill
					sizes="100vw"
					priority
					className="object-cover"
				/>
			</Reveal>

			<Reveal delay={180} className="mt-8 max-w-2xl space-y-4">
				{paragraphs.map((paragraph, index) => (
					<p key={index} className="text-base leading-8 text-zinc-700">
						{paragraph}
					</p>
				))}
			</Reveal>

			<Reveal delay={240} as="section" className="mt-14">
				<h2 className="text-2xl font-semibold">
					{t.projectDetail.galleryHeading}
				</h2>
				<div className="mt-6 grid gap-4 sm:grid-cols-2">
					{project.gallery.map((item, index) => (
						<div
							key={`${item.category}-${index}`}
							className="relative overflow-hidden rounded-[1.5rem] border border-zinc-300"
						>
							<div className="relative h-56 w-full">
								<Image
									src={item.url}
									alt={item.alt}
									fill
									sizes="(min-width: 640px) 50vw, 100vw"
									className="object-cover"
								/>
							</div>
							<span className="absolute left-3 top-3 rounded-full bg-zinc-900/80 px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-white">
								{t.projectDetail.categories[item.category]}
							</span>
						</div>
					))}
				</div>
			</Reveal>
		</article>
	);
}
