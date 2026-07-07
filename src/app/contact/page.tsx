"use client";

import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactPage() {
	const { t } = useLanguage();

	return (
		<div className="mx-auto max-w-2xl">
			{/* Page Title */}
			<div className="mb-12">
				<h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">
					{t.contact.heading}
				</h1>
				<p className="text-zinc-700 text-lg">{t.contact.lead}</p>
			</div>

			{/* Contact Info */}
			<div className="mb-12 grid gap-8 sm:grid-cols-2">
				<div>
					<h3 className="text-sm font-semibold uppercase tracking-[0.2em] mb-2">
						{t.contact.emailLabel}
					</h3>
					<a
						href="mailto:catalincarp12345@gmail.com"
						className="text-zinc-700 transition hover:text-black"
					>
						catalincarp12345@gmail.com
					</a>
				</div>
				<div>
					<h3 className="text-sm font-semibold uppercase tracking-[0.2em] mb-2">
						{t.contact.phoneLabel}
					</h3>
					<a
						href="tel:+40256123456"
						className="text-zinc-700 transition hover:text-black"
					>
						+40 (256) 123-456
					</a>
				</div>
				<div>
					<h3 className="text-sm font-semibold uppercase tracking-[0.2em] mb-2">
						{t.contact.locationLabel}
					</h3>
					<p className="text-zinc-700">
						{t.contact.locationValue[0]}
						<br />
						{t.contact.locationValue[1]}
					</p>
				</div>
				<div>
					<h3 className="text-sm font-semibold uppercase tracking-[0.2em] mb-2">
						{t.contact.hoursLabel}
					</h3>
					<p className="text-zinc-700">
						{t.contact.hoursValue[0]}
						<br />
						{t.contact.hoursValue[1]}
					</p>
				</div>
			</div>

			{/* Form Container */}
			<div className="rounded-[2rem] border border-zinc-300 bg-white/70 p-8 sm:p-10 backdrop-blur-sm">
				<ContactForm />
			</div>
		</div>
	);
}
