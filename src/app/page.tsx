"use client";

import ProjectCarousel from "@/components/ProjectCarousel";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { Building2, Camera, PencilLine } from "lucide-react";
import { LanguageSkill } from "@/components/languageSkill/languageSkill";

const SKILLS = [
	{ label: "Archicad", level: 4 },
	{ label: "Twinmotion", level: 3 },
	{ label: "SketchUp", level: 4 },
	{ label: "Adobe Photoshop", level: 4 },
] satisfies {
	label: string;
	level: 1 | 2 | 3 | 4 | 5;
}[];
export default function Home() {
	const { t } = useLanguage();
	const featuredProject =
		projects.find((project) => project.slug === "event-house") ?? projects[0];

	return (
		<>
			<section className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
				<Reveal className="max-w-200 rounded-[2rem] border border-zinc-300 bg-white/70 p-8 sm:p-10">
					<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
						{t.home.eyebrow}
					</p>
					<h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[0.95] sm:text-5xl lg:text-6xl">
						{t.home.heading}
					</h1>
					<p className="mt-6 max-w-xl text-base leading-8 text-zinc-700 sm:text-lg">
						{t.home.lead}
					</p>
					<p className="mt-2 max-w-xl text-base leading-8 text-zinc-700 sm:text-lg">
						{t.home.subLead}
					</p>
				</Reveal>
				<Reveal
					delay={120}
					className="max-w-200 rounded-[2rem] border border-zinc-300 bg-zinc-900 p-8 text-zinc-100 sm:p-10"
				>
					<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-400">
						{t.home.featuredLabel}
					</p>
					<div className="mt-6 overflow-hidden rounded-[1.5rem]">
						{featuredProject.imageWidth && featuredProject.imageHeight ? (
							<Image
								src={featuredProject.image}
								alt={featuredProject.imageAlt}
								width={featuredProject.imageWidth}
								height={featuredProject.imageHeight}
								sizes="(min-width: 1024px) 45vw, 100vw"
								loading="eager"
								fetchPriority="high"
								className="h-auto w-full"
							/>
						) : (
							<div className="relative h-56">
								<Image
									src={featuredProject.image}
									alt={featuredProject.imageAlt}
									fill
									sizes="(min-width: 1024px) 45vw, 100vw"
									loading="eager"
									fetchPriority="high"
									className="object-cover"
								/>
							</div>
						)}
					</div>
					<div className="mt-6 flex items-end justify-between gap-4">
						<div>
							<p className="text-xl font-semibold">{featuredProject.title}</p>
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

				<Reveal
					delay={200}
					className="flex flex-1 flex-col rounded-[2rem] border border-zinc-300 bg-white/70 p-8 sm:p-10"
				>
					<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
						{t.home.skillsHeading}
					</p>
					{/* <div className="mt-8 flex flex-1 flex-wrap content-center gap-2">
						{SKILLS.map((skill) => (
							<span
								key={skill}
								className="rounded-full border border-zinc-300 px-4 py-1.5 text-sm text-zinc-700"
							>
								<LanguageSkill label={skill} level={2} />
							</span>
						))}
					</div> */}
					{/* <div className="mt-8 flex flex-1 flex-wrap content-center gap-2">
						{SKILLS.map((skill) => (
							<span
								key={skill.label}
								className="rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-700"
							>
								<LanguageSkill label={skill.label} level={skill.level} />
							</span>
						))}
					</div> */}
					<div className="mt-8 space-y-4">
						{SKILLS.map((skill) => (
							<LanguageSkill
								key={skill.label}
								label={skill.label}
								level={skill.level}
							/>
						))}
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
				{/* <Reveal className="rounded-[2rem] border border-zinc-300 bg-white/70 p-8 sm:p-10">
					<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
						{t.home.aboutLabel}
					</p>
					<h2 className="mt-4 text-3xl font-semibold leading-tight">
						{t.home.aboutHeading}
					</h2>
					<p className="mt-5 text-base leading-8 text-zinc-700">
						{t.home.aboutText}
					</p>
				</Reveal> */}
				<Reveal className="rounded-[2rem] border border-zinc-300 bg-white/70 p-8 sm:p-10">
					<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
						{t.home.aboutLabel}
					</p>
					<div className="mt-4 grid gap-8 md:grid-cols-2">
						<div>
							<h3 className="mb-3 text-md font-semibold uppercase tracking-[0.35em] text-zinc-600">
								{t.home.languagesTitle}
							</h3>

							<div className="space-y-4">
								<LanguageSkill label={`${t.home.language1}`} level={5} />
								<LanguageSkill label={`${t.home.language2}`} level={4} />
								<LanguageSkill label={`${t.home.language3}`} level={2} />
							</div>
						</div>

						<div>
							<h3 className="mb-3 text-md font-semibold uppercase tracking-[0.35em] text-zinc-600">
								{t.home.interestsTitle}
							</h3>

							<div className="space-y-4">
								<div className="flex items-center gap-4">
									<Building2 className="h-6 w-6 text-zinc-600" />
									<span>{t.home.interest1}</span>
								</div>

								<div className="flex items-center gap-4">
									<Camera className="h-6 w-6 text-zinc-600" />
									<span>{t.home.interest2}</span>
								</div>

								<div className="flex items-center gap-4">
									<PencilLine className="h-6 w-6 text-zinc-600" />
									<span>{t.home.interest3}</span>
								</div>
							</div>
						</div>
					</div>
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
