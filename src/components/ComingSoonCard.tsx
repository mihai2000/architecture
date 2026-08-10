"use client";

import { Hammer } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ComingSoonCard() {
	const { t } = useLanguage();

	return (
		<div className="flex h-full w-full flex-col rounded-[1.5rem] border border-dashed border-zinc-300 bg-white/40 p-5">
			<div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-100">
				<Hammer className="h-8 w-8 text-zinc-400" aria-hidden="true" />
			</div>
			<div className="mt-4 flex flex-1 flex-col justify-end">
				<h3 className="text-base font-semibold leading-snug text-zinc-500 sm:text-lg lg:text-xl">
					{t.comingSoon.title}
				</h3>
				<p className="mt-2 text-sm text-zinc-500">{t.comingSoon.subtitle}</p>
			</div>
		</div>
	);
}
