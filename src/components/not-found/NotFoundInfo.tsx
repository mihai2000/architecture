// components/not-found/NotFoundInfo.tsx

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function NotFoundInfo() {
	const { t } = useLanguage();

	return (
		<>
			<header className="absolute inset-x-[3.5%] top-[4.5%] flex items-start justify-between">
				<div>
					<p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em]">
						CATALIN CARP STUDIO
					</p>

					<p className="mt-2 text-[0.57rem] text-zinc-600">
						Architecture / Interior / Urban
					</p>
				</div>

				<p className="text-[3.5rem] font-light leading-none tracking-[-0.06em]">
					404
				</p>
			</header>

			<div className="absolute left-[3.5%] right-[3.5%] top-[11.6%] h-px bg-zinc-300" />

			<div className="absolute left-[12%] top-[28%] z-20 w-[31%]">
				<p className="text-[0.48rem] font-medium uppercase tracking-[0.38em] text-zinc-500">
					{t.notFound.eyebrow}
				</p>

				<h1 className="mt-[2.5%] text-[8.75rem] font-light leading-[0.8] tracking-[-0.075em]">
					404
				</h1>

				<h2 className="mt-[6%] text-[1.4rem] font-medium uppercase tracking-[0.28em]">
					{t.notFound.title}
				</h2>

				<div className="mt-[7%] h-px w-[17%] bg-zinc-400" />

				<p className="mt-[7%] max-w-[390px] text-[0.75rem] leading-[1.8] text-zinc-600">
					{t.notFound.description}
				</p>

				<Link
					href="/"
					className="group mt-[9%] inline-flex items-center gap-5 border border-zinc-700 bg-transparent px-6 py-4 text-[0.66rem] font-medium uppercase tracking-[0.25em] transition-all duration-300 hover:bg-zinc-950 hover:text-white"
				>
					<span className="text-lg leading-none transition-transform duration-300 group-hover:-translate-x-1">
						←
					</span>

					{t.notFound.backHome}
				</Link>
			</div>

			<div className="absolute bottom-[28%] left-[4%] top-[43%] flex items-center">
				<div className="h-full w-px bg-zinc-400" />

				<p className="ml-[-0.1rem] -rotate-90 whitespace-nowrap text-[0.48rem] uppercase tracking-[0.3em] text-zinc-500">
					Exploring Form and Space.
				</p>
			</div>

			<div className="absolute right-[4%] top-[15%] border-l border-zinc-400 pl-4">
				<p className="origin-top-left rotate-90 whitespace-nowrap text-[0.55rem] uppercase tracking-[0.3em] text-zinc-500">
					6R07 / 14.40A
				</p>
			</div>
		</>
	);
}
