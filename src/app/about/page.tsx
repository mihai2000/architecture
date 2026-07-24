"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { GraduationCapIcon, PersonIcon } from "@/components/icons/ProfileIcons";
import Reveal from "@/components/Reveal";
import { DocumentIcon } from "@/components/icons/DocumentIcon";

export default function AboutPage() {
	const { t } = useLanguage();

	return (
		// <div className="mx-auto max-w-[1440px]">
		<div className="mx-auto">
			<section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
				{" "}
				<Reveal>
					<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
						{t.about.eyebrow}
					</p>

					<h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
						{" "}
						{t.about.heading}
					</h1>

					<p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-700">
						{" "}
						{t.about.intro}
					</p>

					<p className="mt-6 max-w-2xl leading-8 text-zinc-600">
						{t.about.body}
					</p>

					<div className="mt-10 flex flex-wrap gap-3">
						<span className="rounded-full border border-zinc-300 px-3 py-1.5 text-xs">
							{t.about.badge1}
						</span>

						<span className="rounded-full border border-zinc-300 px-3 py-1.5 text-xs">
							{t.about.badge2}
						</span>

						<span className="rounded-full border border-zinc-300 px-3 py-1.5 text-xs">
							{t.about.badge3}
						</span>
					</div>
				</Reveal>
				<Reveal delay={120} className="relative mx-auto mt-8 w-full max-w-xs">
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

			<section className="mt-16 grid gap-6 lg:grid-cols-[1fr_0.7fr]">
				<Reveal delay={120} className="h-full">
					<div className="flex h-full overflow-hidden rounded-[2rem] border border-zinc-300 bg-white/70">
						<div className="flex w-full flex-col p-10">
							<div>
								<p className="text-[0.65rem] uppercase tracking-[0.3em] text-zinc-500">
									{t.about.currentStatusLabel}
								</p>

								<p className="mt-2 font-medium">{t.about.currentStatus}</p>
							</div>

							<div className="mt-7 border-t border-zinc-200 pt-7">
								<p className="text-[0.65rem] uppercase tracking-[0.3em] text-zinc-500">
									{t.contact.locationLabel}
								</p>
								<p className="mt-2">
									{t.contact.locationValue.join(", ")}
								</p>{" "}
							</div>
							<div className="border-t border-zinc-200 pt-7">
								<p className="text-[0.65rem] uppercase tracking-[0.3em] text-zinc-500">
									{t.about.primaryInterestLabel}
								</p>

								<p className="mt-3 text-zinc-700">{t.about.primaryInterest}</p>
							</div>
							<div className="mt-auto border-t border-zinc-200 pt-7">
								<p className="text-[0.65rem] uppercase tracking-[0.3em] text-zinc-500">
									{t.about.goalLabel}
								</p>

								<p className="mt-3 leading-7 text-zinc-700">{t.about.goal}</p>
							</div>
						</div>
					</div>
				</Reveal>
				<Reveal delay={180}>
					<div className="rounded-[2rem] border border-zinc-300 bg-zinc-900 p-10 text-white">
						<p className="text-[0.65rem] uppercase tracking-[0.3em] text-zinc-400">
							{t.about.interestsLabel}
						</p>

						<h2 className="mt-5 text-3xl font-semibold">
							{t.about.interestsHeading}
						</h2>

						<div className="mt-8 flex flex-wrap gap-3">
							{t.about.interests.map((item) => (
								<span
									key={item}
									className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-zinc-500"
								>
									{item}
								</span>
							))}
						</div>

						<div className="mt-10 border-t border-zinc-800 pt-8">
							<p className="leading-8 text-zinc-300">
								{t.about.interestsDescription}
							</p>
						</div>
					</div>
				</Reveal>
			</section>

			<section className="mt-24 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
				{/* Education */}
				<Reveal className="rounded-[2rem] border border-zinc-300 bg-white/70 p-8 sm:p-10">
					<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
						{t.about.educationLabel}
					</p>

					<div className="mt-8 space-y-10">
						<div className="border-l-2 border-zinc-200 pl-6">
							<div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
								<div>
									<h3 className="text-2xl font-semibold">
										{t.about.university}
									</h3>

									<p className="mt-1 uppercase tracking-[0.18em] text-zinc-500">
										{t.about.faculty}
									</p>

									<p className="mt-3 text-zinc-700">{t.about.specialization}</p>
								</div>

								<p className="text-sm text-zinc-500">
									{t.about.universityPeriod}
								</p>
							</div>

							<p className="mt-5 leading-8 text-zinc-700">
								{t.about.universityDescription}
							</p>
						</div>

						<div className="border-l-2 border-zinc-200 pl-6">
							<div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
								<div>
									<h3 className="text-xl font-semibold">
										{t.about.highSchool}
									</h3>

									<p className="mt-1 uppercase tracking-[0.18em] text-zinc-500">
										{t.about.highSchoolProfile}
									</p>
								</div>

								<p className="text-sm text-zinc-500">
									{t.about.highSchoolPeriod}
								</p>
							</div>
						</div>
					</div>
				</Reveal>

				{/* Academic Focus */}
				<Reveal
					delay={120}
					className="rounded-[2rem] border border-zinc-300 bg-zinc-900 p-8 text-white sm:p-10"
				>
					<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-400">
						{t.about.academicFocusLabel}
					</p>

					<div className="mt-8 flex flex-wrap gap-3">
						{t.about.academicFocus.map((item) => (
							<span
								key={item}
								className="rounded-full border border-zinc-700 px-4 py-2 text-sm tracking-wide text-zinc-200"
							>
								{item}
							</span>
						))}
					</div>

					<div className="mt-10 border-t border-zinc-700 pt-8">
						<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-400">
							{t.about.currentInterestsLabel}
						</p>

						<p className="mt-4 leading-8 text-zinc-300">
							{t.about.currentInterests}
						</p>
					</div>
				</Reveal>
			</section>

			<section className="relative mt-24 grid gap-6 lg:grid-cols-2">
				{/* Design Philosophy */}
				<Reveal className="rounded-[2rem] border border-zinc-300 bg-white/70 p-8 sm:p-10">
					<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
						{t.about.philosophyLabel}
					</p>

					<h2 className="mt-5 text-3xl font-medium text-zinc-900">
						{t.about.philosophyHeading}
					</h2>

					<div className="mt-10 space-y-10">
						{t.about.philosophyItems.map((item, index) => (
							<div
								key={item.title}
								className="flex gap-5 border-b border-zinc-200 pb-8 last:border-none last:pb-0"
							>
								<span className="text-2xl font-light text-zinc-300">
									{String(index + 1).padStart(2, "0")}
								</span>

								<div>
									<h3 className="font-medium text-zinc-900">{item.title}</h3>

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
								<div className="h-2 w-2 rounded-full bg-white" />

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

							<div className="rounded-full border border-zinc-700 p-4 transition-all group-hover:translate-x-1">
								<DocumentIcon />
							</div>
						</a>
					</div>
				</Reveal>
			</section>
		</div>
	);
}
