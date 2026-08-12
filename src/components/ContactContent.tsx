"use client";

import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactContent() {
	const { t } = useLanguage();
	const wp = process.env.NEXT_PUBLIC_WHATSAPP;
	const wpD = process.env.NEXT_PUBLIC_WHATSAPP_DYSPLAY;
	const email = process.env.NEXT_PUBLIC_EMAIL;

	return (
		<div className="mx-auto max-w-2xl">
			{/* Page Title */}
			<Reveal className="mb-16">
				<h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">
					{t.contact.heading}
				</h1>
				<p className="text-zinc-700 text-lg">{t.contact.lead}</p>
			</Reveal>

			{/* Contact Info */}
			<Reveal delay={80} className="mb-16 grid gap-6 md:grid-cols-3">
				<a
					href={`mailto:${email}`}
					className="group relative rounded-[1.5rem] border border-zinc-300 bg-white/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:bg-white hover:shadow-[0_10px_30px_-18px_rgba(0,0,0,0.15)]"
				>
					<p className="text-[0.7rem] uppercase tracking-[0.3em] text-zinc-500">
						{t.contact.emailLabel}
					</p>

					<p className="mt-5 break-all text-lg font-medium leading-relaxed text-zinc-900 transition-colors group-hover:text-zinc-600">
						{email}
					</p>

					<span
						aria-hidden="true"
						className="absolute bottom-5 right-6 text-xl text-zinc-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
					>
						↗
					</span>
				</a>

				<a
					href={`https://wa.me/${wp}`}
					target="_blank"
					rel="noopener noreferrer"
					className="group rounded-[1.5rem] border border-zinc-300 bg-white/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:bg-white hover:shadow-[0_10px_30px_-18px_rgba(0,0,0,0.15)]"
				>
					<p className="text-[0.7rem] uppercase tracking-[0.3em] text-zinc-500">
						{t.contact.phoneLabel}
					</p>

					<div className="mt-5 flex items-center justify-between">
						<p className="text-lg font-medium text-zinc-900 transition-colors group-hover:text-zinc-600">
							{wpD}
						</p>

						<span className="text-xl text-zinc-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
							↗
						</span>
					</div>
				</a>
				<div className="rounded-[1.5rem] border border-zinc-300 bg-white/70 p-6 transition hover:border-zinc-400 hover:bg-white">
					<p className="text-[0.7rem] uppercase tracking-[0.3em] text-zinc-500">
						{t.contact.locationLabel}
					</p>

					<div className="mt-5 space-y-1 text-lg font-medium text-zinc-900">
						{t.contact.locationValue.map((location) => (
							<p key={location}>{location}</p>
						))}
					</div>
				</div>
			</Reveal>
			<Reveal
				delay={120}
				className="mt-8 rounded-[2rem] border border-zinc-300 bg-zinc-900 p-8 text-white"
			>
				<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-400">
					{t.contact.availableLabel}
				</p>

				<h2 className="mt-5 text-2xl font-semibold">
					{t.contact.availableHeading}
				</h2>

				<ul className="mt-8 space-y-4">
					{t.contact.availableItems.map((item) => (
						<li key={item} className="flex items-center gap-3">
							<div className="h-2 w-2 rounded-full bg-white" />

							<span className="text-zinc-200">{item}</span>
						</li>
					))}
				</ul>
			</Reveal>
			{/* Form Container */}
			<Reveal
				delay={160}
				className=" mt-8 rounded-[2rem] border border-zinc-300 bg-white/70 p-8 sm:p-10 backdrop-blur-sm"
			>
				<ContactForm />
			</Reveal>
			<Reveal delay={220}>
				<p className="mt-8 text-center text-sm leading-7 text-zinc-500">
					{t.contact.responseNote}
				</p>
			</Reveal>
		</div>
	);
}
