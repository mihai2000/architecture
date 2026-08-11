// components/not-found/NotFoundTitleBlock.tsx

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function NotFoundTitleBlock() {
	const { t } = useLanguage();

	return (
		<div className="absolute bottom-[3.5%] left-[3.5%] right-[3.5%]">
			<div className="h-px bg-zinc-400" />

			<div className="mt-6 grid grid-cols-[1.4fr_1.2fr_1.2fr_0.8fr_0.8fr]">
				{/* Studio */}
				<div className="border-r border-zinc-300 pr-8">
					<div className="flex gap-6">
						<div className="relative h-14 w-14 shrink-0 border border-zinc-400">
							<div className="absolute inset-0">
								<div className="absolute left-1/2 top-0 h-full w-px bg-zinc-400" />
								<div className="absolute left-0 top-1/2 h-px w-full bg-zinc-400" />
								<div className="absolute left-0 top-0 h-full w-px origin-center rotate-45 bg-zinc-400" />
							</div>
						</div>

						<div>
							<p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em]">
								Catalin
								<br />
								Carp Studio
							</p>

							<p className="mt-2 text-[0.7rem] text-zinc-600">
								{t.contact.locationValue.join(", ")}
							</p>
						</div>
					</div>
				</div>

				{/* Project */}
				<div className="border-r border-zinc-300 px-8">
					<p className="text-[0.55rem] font-semibold uppercase tracking-[0.2em]">
						{t.notFound.project}
					</p>

					<p className="mt-4 text-[0.7rem] uppercase leading-6">
						{t.notFound.projectValue}
					</p>
				</div>

				{/* Drawing */}
				<div className="border-r border-zinc-300 px-8">
					<p className="text-[0.55rem] font-semibold uppercase tracking-[0.2em]">
						{t.notFound.drawing}
					</p>

					<p className="mt-4 text-[0.7rem] uppercase leading-6">
						{t.notFound.drawingValue}
					</p>
				</div>

				{/* Scale */}
				<div className="border-r border-zinc-300 px-8">
					<p className="text-[0.55rem] font-semibold uppercase tracking-[0.2em]">
						{t.notFound.scale}
					</p>

					<p className="mt-4 text-[0.7rem] uppercase">
						{t.notFound.scaleValue}
					</p>
				</div>

				{/* Revision */}
				<div className="pl-8">
					<p className="text-[0.55rem] font-semibold uppercase tracking-[0.2em]">
						{t.notFound.revision}
					</p>

					<p className="mt-4 text-[0.7rem] uppercase">
						{t.notFound.revisionValue}
					</p>
				</div>
			</div>
		</div>
	);
}
