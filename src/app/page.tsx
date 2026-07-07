"use client";

import ProjectCarousel from "@/components/ProjectCarousel";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { projects } from "@/lib/projects";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { locales } from "@/lib/i18n/translations";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const { t } = useLanguage();
	const featuredProject =
		projects.find((project) => project.slug === "event-house") ??
		projects[0];
	const categoryCount = new Set(projects.map((project) => project.type)).size;

	const stats = [
		{ value: projects.length, label: t.home.statsProjects },
		{ value: categoryCount, label: t.home.statsCategories },
		{ value: locales.length, label: t.home.statsLanguages },
	];

	return (
		<>
			<section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
				<Reveal className="flex flex-col justify-between rounded-[2rem] border border-zinc-300 bg-white/70 p-8 sm:p-10">
					<div>
						<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
							{t.home.eyebrow}
						</p>
						<h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[0.95] sm:text-5xl lg:text-6xl">
							{t.home.heading}
						</h1>
					</div>
					<p className="mt-8 max-w-xl text-base leading-8 text-zinc-700 sm:text-lg">
						{t.home.lead}
					</p>
					{/* <div className="mt-8 flex gap-8 border-t border-zinc-200 pt-6">
						{stats.map((stat) => (
							<div key={stat.label}>
								<p className="text-2xl font-semibold tabular-nums">
									<CountUp value={stat.value} />
								</p>
								<p className="mt-1 text-[0.65rem] uppercase tracking-[0.25em] text-zinc-500">
									{stat.label}
								</p>
							</div>
						))}
					</div> */}
				</Reveal>

				<Reveal
					delay={120}
					className="rounded-[2rem] border border-zinc-300 bg-zinc-900 p-8 text-zinc-100 sm:p-10"
				>
					<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-400">
						{t.home.featuredLabel}
					</p>
					<div className="relative mt-6 h-56 overflow-hidden rounded-[1.5rem]">
						<Image
							src={featuredProject.image}
							alt={featuredProject.imageAlt}
							fill
							sizes="(min-width: 1024px) 45vw, 100vw"
							className="object-cover"
						/>
					</div>
					<div className="mt-6 flex items-end justify-between gap-4">
						<div>
							<p className="text-xl font-semibold">
								{featuredProject.title}
							</p>
							<p className="mt-1 text-sm text-zinc-400">
								{featuredProject.location}
							</p>
						</div>
						<Link
							href={`/projects/${featuredProject.slug}`}
							className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-300 transition hover:text-white"
						>
							{t.home.viewProject}
						</Link>
					</div>
				</Reveal>
			</section>

			<section id="projects" className="mt-14">
				<Reveal>
					<div className="flex items-end justify-between gap-4 border-b border-zinc-300 pb-4">
						<div>
							<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
								{t.home.selectedWork}
							</p>
							<h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
								{t.home.recentProjects}
							</h2>
						</div>
						<Link
							href="/projects"
							className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-700 transition hover:text-black"
						>
							{t.home.viewProjects}
						</Link>
					</div>

					<div className="mt-6">
						<ProjectCarousel projects={projects} />
					</div>
				</Reveal>
			</section>

			<section
				id="about"
				className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]"
			>
				<Reveal className="rounded-[2rem] border border-zinc-300 bg-white/70 p-8 sm:p-10">
					<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
						{t.home.aboutLabel}
					</p>
					<h2 className="mt-4 text-3xl font-semibold leading-tight">
						{t.home.aboutHeading}
					</h2>
					<p className="mt-5 text-base leading-8 text-zinc-700">
						{t.home.aboutText}
					</p>
				</Reveal>

				<Reveal
					delay={120}
					className="rounded-[2rem] border border-zinc-300 bg-zinc-900 p-8 text-zinc-100 sm:p-10"
				>
					<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-400">
						{t.home.contactLabel}
					</p>
					<h2 className="mt-4 text-3xl font-semibold">
						{t.home.contactHeading}
					</h2>
					<p className="mt-5 max-w-xl text-base leading-8 text-zinc-300">
						{t.home.contactText}
					</p>
					<Link
						href="/contact"
						className="mt-8 inline-flex text-[0.7rem] uppercase tracking-[0.35em] text-zinc-100 transition hover:text-white"
					>
						{t.home.getInTouch}
					</Link>
				</Reveal>
			</section>
		</>
	);
}
