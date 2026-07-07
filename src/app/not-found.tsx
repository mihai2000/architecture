"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function NotFound() {
	const { t } = useLanguage();

	return (
		<div className="flex min-h-[50vh] items-center">
			<div className="w-full rounded-[2rem] border border-zinc-300 bg-white/70 p-10 text-center sm:p-14">
				<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
					{t.notFound.eyebrow}
				</p>
				<h1 className="mx-auto mt-4 max-w-lg text-2xl font-semibold leading-tight sm:text-3xl">
					{t.notFound.heading}
				</h1>
				<p className="mx-auto mt-4 max-w-md text-base leading-8 text-zinc-700">
					{t.notFound.message}
				</p>
				<Link
					href="/"
					className="mt-8 inline-flex text-[0.7rem] uppercase tracking-[0.35em] text-zinc-700 transition hover:text-black"
				>
					← {t.notFound.backHome}
				</Link>
			</div>
		</div>
	);
}
