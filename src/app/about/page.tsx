"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { GraduationCapIcon, PersonIcon } from "@/components/icons/ProfileIcons";

export default function AboutPage() {
	const { t } = useLanguage();

	return (
		<div>
			<section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
				<div>
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
				</div>

				<div className="relative mx-auto w-full max-w-xs">
					<div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 rounded-[2rem] border border-dashed border-zinc-300 bg-white/70 text-zinc-400">
						<PersonIcon />
						<p className="text-[0.65rem] uppercase tracking-[0.3em]">
							{t.about.photoPlaceholder}
						</p>
					</div>
					<div className="absolute -bottom-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 bg-zinc-900 text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)]">
						<GraduationCapIcon />
					</div>
				</div>
			</section>

			<section className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
				<div className="rounded-[2rem] border border-zinc-300 bg-white/70 p-8 sm:p-10">
					<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
						{t.about.educationLabel}
					</p>
					<h2 className="mt-4 text-2xl font-semibold leading-tight">
						{t.about.institution}
					</h2>
					<p className="mt-1 text-sm uppercase tracking-[0.2em] text-zinc-500">
						{t.about.faculty}
					</p>
					<p className="mt-5 text-base leading-8 text-zinc-700">
						{t.about.educationText}
					</p>
				</div>

				<div className="rounded-[2rem] border border-zinc-300 bg-zinc-900 p-8 text-zinc-100 sm:p-10">
					<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-400">
						{t.about.focusLabel}
					</p>
					<ul className="mt-5 flex flex-wrap gap-2">
						{t.about.focusAreas.map((area) => (
							<li
								key={area}
								className="rounded-full border border-zinc-700 px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.3em] text-zinc-200"
							>
								{area}
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="mt-14">
				<div className="rounded-[2rem] border border-zinc-300 bg-white/70 p-8 sm:p-10">
					<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
						{t.about.approachLabel}
					</p>
					<h2 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
						{t.about.approachHeading}
					</h2>
					<p className="mt-5 max-w-2xl text-base leading-8 text-zinc-700">
						{t.about.approachText}
					</p>
					<Link
						href="/contact"
						className="mt-8 inline-flex text-[0.7rem] uppercase tracking-[0.35em] text-zinc-700 transition hover:text-black"
					>
						{t.about.getInTouch}
					</Link>
				</div>
			</section>
		</div>
	);
}
