"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { GraduationCapIcon, PersonIcon } from "@/components/icons/ProfileIcons";
import Reveal from "@/components/Reveal";
import { DocumentIcon } from "@/components/icons/DocumentIcon";

export default function AboutPage() {
	const { t } = useLanguage();

	return (
		<div>
			<section className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
				<Reveal>
					<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
						{t.about.eyebrow}
					</p>
					<h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
						{t.about.heading}
					</h1>
					<p className="mt-5 text-base leading-8 text-zinc-700">
						{t.about.intro}
					</p>
					<p className="mt-4 text-base leading-8 text-zinc-700">
						{t.about.body}
					</p>
					<a
						href="/projects/cv.pdf"
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
									{t.about.cvTitle}
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

				<Reveal delay={120} className="relative mx-auto w-full max-w-xs">
					<div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 rounded-[2rem] border border-dashed border-zinc-300 bg-white/70 text-zinc-400">
						<PersonIcon />
						<p className="text-[0.65rem] uppercase tracking-[0.3em]">
							{t.about.photoPlaceholder}
						</p>
					</div>
					<div className="absolute -bottom-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 bg-zinc-900 text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)]">
						<GraduationCapIcon />
					</div>
				</Reveal>
			</section>

			<section className="relative mt-20 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
				<Reveal className="rounded-[2rem] border border-zinc-300 bg-white/70 p-8 sm:p-10">
					<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
						{t.about.educationLabel}
					</p>

					<div className="mt-8 space-y-8">
						{/* University */}
						<div className="relative border-l-2 border-zinc-200 pl-6">
							<div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-zinc-900" />

							<div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
								<div>
									<h3 className="text-2xl font-semibold text-zinc-900">
										Universitatea Politehnica Timișoara
									</h3>

									<p className="mt-1 uppercase tracking-[0.18em] text-zinc-500">
										Facultatea de Arhitectură și Urbanism
									</p>

									<p className="mt-1 text-zinc-700">
										Specializarea Arhitectură
									</p>
								</div>

								<span className="text-sm font-medium text-zinc-500">
									2023 — prezent
								</span>
							</div>

							<p className="mt-5 leading-7 text-zinc-700">
								Studii axate pe proiectare arhitecturală, urbanism, structuri,
								reprezentare grafică și dezvoltarea proiectelor de la concept
								până la documentația tehnică.
							</p>
						</div>

						{/* High School */}
						<div className="relative border-l-2 border-zinc-200 pl-6">
							<div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-zinc-400" />

							<div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
								<div>
									<h3 className="text-xl font-semibold text-zinc-900">
										Liceul Teoretic „Petru Rareș”
									</h3>

									<p className="mt-1 uppercase tracking-[0.18em] text-zinc-500">
										Profil Real
									</p>
								</div>

								<span className="text-sm font-medium text-zinc-500">
									Absolvent 2023
								</span>
							</div>
						</div>
					</div>
				</Reveal>
			</section>

			<section className="relative mt-20 grid gap-6 lg:grid-cols-2">
				{/* Design Philosophy */}
				<Reveal className="rounded-[2rem] border border-zinc-300 bg-white/70 p-8 sm:p-10">
					<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
						{t.about.philosophyLabel}
					</p>

					<h2 className="mt-5 text-3xl font-semibold">
						{t.about.philosophyHeading}
					</h2>

					<div className="mt-10 space-y-8">
						{t.about.philosophyItems.map((item, index) => (
							<div
								key={item.title}
								className="flex gap-5 border-b border-zinc-200 pb-6 last:border-none last:pb-0"
							>
								<span className="text-2xl font-light text-zinc-300">
									{String(index + 1).padStart(2, "0")}
								</span>

								<div>
									<h3 className="font-semibold text-zinc-900">{item.title}</h3>

									<p className="mt-2 leading-7 text-zinc-600">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</Reveal>

				{/* Current Goals */}
				<Reveal
					delay={120}
					className="rounded-[2rem] border border-zinc-300 bg-zinc-900 p-8 text-white sm:p-10"
				>
					<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-400">
						{t.about.goalsLabel}
					</p>

					<h2 className="mt-5 text-3xl font-semibold">
						{t.about.goalsHeading}
					</h2>

					<ul className="mt-10 space-y-5">
						{t.about.goals.map((goal) => (
							<li
								key={goal}
								className="flex items-center gap-4 border-b border-zinc-800 pb-5 last:border-none"
							>
								<div className="h-2.5 w-2.5 rounded-full bg-white" />

								<span className="text-zinc-200">{goal}</span>
							</li>
						))}
					</ul>

					<div className="mt-12 border-t border-zinc-800 pt-8">
						<a
							href="/projects/cv.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center justify-between"
						>
							<div>
								<p className="text-lg font-semibold">{t.about.cvTitle}</p>

								<p className="mt-2 text-zinc-400">{t.about.cvSubtitle}</p>
							</div>

							<span className="text-2xl transition group-hover:translate-x-1">
								→
							</span>
						</a>
					</div>
				</Reveal>
			</section>
		</div>
	);
}
