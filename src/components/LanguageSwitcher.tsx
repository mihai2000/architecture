"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { locales } from "@/lib/i18n/translations";

export default function LanguageSwitcher() {
	const { locale, setLocale } = useLanguage();

	return (
		<div
			role="group"
			aria-label="Language"
			className="inline-flex items-center gap-1 rounded-full border border-zinc-300 p-0.5"
		>
			{locales.map((option) => (
				<button
					key={option}
					type="button"
					onClick={() => setLocale(option)}
					aria-pressed={locale === option}
					className={`rounded-full px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.2em] transition ${
						locale === option
							? "bg-zinc-900 text-white"
							: "text-zinc-600 hover:text-zinc-900"
					}`}
				>
					{option}
				</button>
			))}
		</div>
	);
}
