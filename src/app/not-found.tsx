"use client";

import Link from "next/link";

export default function NotFound() {
	return (
		<main className="relative min-h-[calc(100vh-8rem)] overflow-hidden py-8 sm:py-12">
			{/* Subtle background grid */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 opacity-[0.22]"
				style={{
					backgroundImage: `
						linear-gradient(to right, #d4d4d8 1px, transparent 1px),
						linear-gradient(to bottom, #d4d4d8 1px, transparent 1px)
					`,
					backgroundSize: "80px 80px",
					maskImage:
						"linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
					WebkitMaskImage:
						"linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
				}}
			/>

			{/* Main sheet */}
			<section className="relative mx-auto max-w-[1500px] rounded-[2rem] border border-zinc-300 bg-white/80 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
				{/* Top information */}
				<div className="flex items-start justify-between gap-8 border-b border-zinc-300 pb-6">
					<div>
						<p className="text-[0.7rem] font-medium uppercase tracking-[0.35em] text-zinc-900">
							Catalin Carp Studio
						</p>

						<p className="mt-2 text-[0.65rem] uppercase tracking-[0.3em] text-zinc-500">
							Architecture / Interior / Urban
						</p>
					</div>

					<p className="text-3xl font-light tracking-tight text-zinc-900 sm:text-5xl">
						404
					</p>
				</div>

				{/* Main content */}
				<div className="grid min-h-[580px] items-center gap-12 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-16">
					{/* Left side */}
					<div className="relative z-10">
						<p className="mb-5 text-[0.65rem] uppercase tracking-[0.4em] text-zinc-500">
							Error / 404
						</p>

						<h1 className="text-[5rem] font-light leading-[0.8] tracking-[-0.06em] text-zinc-950 sm:text-[7rem] lg:text-[8rem]">
							404
						</h1>

						<div className="mt-8">
							<h2 className="text-xl font-medium uppercase tracking-[0.3em] text-zinc-900 sm:text-2xl">
								Space not found.
							</h2>

							<div className="mt-5 h-px w-16 bg-zinc-400" />

							<p className="mt-6 max-w-md text-sm leading-7 text-zinc-600 sm:text-base">
								It seems you&apos;ve stepped into a space that doesn&apos;t
								exist in the current project.
							</p>
						</div>

						<Link
							href="/"
							className="group mt-8 inline-flex items-center gap-4 border border-zinc-400 px-5 py-4 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
						>
							<span className="text-base transition-transform duration-300 group-hover:-translate-x-1">
								←
							</span>
							Back to home
						</Link>
					</div>

					{/* Architectural drawing */}
					<div className="relative flex min-h-[360px] items-center justify-center lg:min-h-[500px]">
						{/* Drawing grid */}
						<div
							aria-hidden="true"
							className="absolute inset-4 opacity-50"
							style={{
								backgroundImage: `
									linear-gradient(to right, #e4e4e7 1px, transparent 1px),
									linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)
								`,
								backgroundSize: "42px 42px",
							}}
						/>

						{/* Dimension lines */}
						<div className="absolute left-[12%] right-[12%] top-[8%] flex items-center">
							<div className="h-px flex-1 bg-zinc-300" />
							<span className="px-3 text-[0.55rem] tracking-[0.15em] text-zinc-500">
								12.60
							</span>
							<div className="h-px flex-1 bg-zinc-300" />
						</div>

						<div className="absolute bottom-[10%] left-[15%] right-[15%] flex items-center justify-center gap-3">
							<span className="text-[0.55rem] uppercase tracking-[0.2em] text-zinc-400">
								Undefined space
							</span>
							<div className="h-px w-12 bg-zinc-300" />
						</div>

						{/* SVG floor plan */}
						<svg
							viewBox="0 0 600 500"
							className="relative z-10 h-full w-full max-w-[620px] overflow-visible"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-label="Abstract architectural floor plan"
						>
							{/* Construction grid */}
							<g
								stroke="#d4d4d8"
								strokeWidth="1"
								strokeDasharray="5 7"
								opacity="0.7"
							>
								<line x1="90" y1="50" x2="90" y2="450" />
								<line x1="180" y1="50" x2="180" y2="450" />
								<line x1="270" y1="50" x2="270" y2="450" />
								<line x1="360" y1="50" x2="360" y2="450" />
								<line x1="450" y1="50" x2="450" y2="450" />
								<line x1="510" y1="50" x2="510" y2="450" />

								<line x1="60" y1="100" x2="540" y2="100" />
								<line x1="60" y1="190" x2="540" y2="190" />
								<line x1="60" y1="280" x2="540" y2="280" />
								<line x1="60" y1="370" x2="540" y2="370" />
								<line x1="60" y1="430" x2="540" y2="430" />
							</g>

							{/* Main architectural outline */}
							<path
								d="M145 95
								   H390
								   V145
								   H475
								   V290
								   H400
								   V375
								   H145
								   V300
								   H95
								   V220
								   H145
								   Z"
								stroke="#18181b"
								strokeWidth="5"
								strokeLinecap="square"
								strokeLinejoin="miter"
								className="floor-plan"
							/>

							{/* Inner wall */}
							<path
								d="M205 145
								   H345
								   V215
								   H400
								   V290
								   H345
								   V335
								   H205
								   V275
								   H170
								   V220
								   H205
								   Z"
								stroke="#71717a"
								strokeWidth="2"
								strokeDasharray="8 6"
								className="inner-plan"
							/>

							{/* Door */}
							<path
								d="M400 290
								   A65 65 0 0 0 335 225"
								stroke="#a1a1aa"
								strokeWidth="2"
							/>

							<line
								x1="400"
								y1="290"
								x2="335"
								y2="290"
								stroke="#71717a"
								strokeWidth="2"
							/>

							{/* Stair / circulation */}
							<g stroke="#71717a" strokeWidth="2">
								<line x1="425" y1="150" x2="475" y2="150" />
								<line x1="425" y1="160" x2="475" y2="160" />
								<line x1="425" y1="170" x2="475" y2="170" />
								<line x1="425" y1="180" x2="475" y2="180" />
								<line x1="425" y1="190" x2="475" y2="190" />
								<line x1="425" y1="200" x2="475" y2="200" />
							</g>

							{/* Undefined space marker */}
							<rect
								x="260"
								y="255"
								width="12"
								height="12"
								fill="#18181b"
								className="marker"
							/>

							{/* Drawing reference points */}
							<g stroke="#71717a" strokeWidth="1">
								<circle cx="90" cy="95" r="5" />
								<line x1="80" y1="95" x2="100" y2="95" />
								<line x1="90" y1="85" x2="90" y2="105" />

								<circle cx="510" cy="430" r="5" />
								<line x1="500" y1="430" x2="520" y2="430" />
								<line x1="510" y1="420" x2="510" y2="440" />
							</g>
						</svg>

						{/* Vertical annotation */}
						<p className="absolute left-0 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[0.55rem] uppercase tracking-[0.4em] text-zinc-400 sm:block">
							Exploring Form and Space.
						</p>
					</div>
				</div>

				{/* Technical title block */}
				<div className="grid border-t border-zinc-300 pt-6 sm:grid-cols-2 lg:grid-cols-5">
					<div className="border-zinc-300 pb-5 sm:border-r sm:pr-6 lg:pb-0">
						<p className="text-[0.55rem] uppercase tracking-[0.25em] text-zinc-500">
							Studio
						</p>
						<p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-zinc-900">
							Catalin Carp Studio
						</p>
					</div>

					<div className="border-zinc-300 py-5 sm:pl-6 lg:border-r lg:py-0 lg:pr-6">
						<p className="text-[0.55rem] uppercase tracking-[0.25em] text-zinc-500">
							Project
						</p>
						<p className="mt-2 text-xs uppercase tracking-[0.15em] text-zinc-900">
							Architecture Portfolio
						</p>
					</div>

					<div className="border-zinc-300 py-5 sm:pr-6 lg:border-r lg:py-0 lg:pl-6">
						<p className="text-[0.55rem] uppercase tracking-[0.25em] text-zinc-500">
							Drawing
						</p>
						<p className="mt-2 text-xs uppercase tracking-[0.15em] text-zinc-900">
							Error / 404
						</p>
					</div>

					<div className="border-zinc-300 py-5 sm:pl-6 lg:border-r lg:py-0 lg:pr-6">
						<p className="text-[0.55rem] uppercase tracking-[0.25em] text-zinc-500">
							Scale
						</p>
						<p className="mt-2 text-xs uppercase tracking-[0.15em] text-zinc-900">
							NTS
						</p>
					</div>

					<div className="pt-5 sm:pl-6 lg:pt-0">
						<p className="text-[0.55rem] uppercase tracking-[0.25em] text-zinc-500">
							Revision
						</p>
						<p className="mt-2 text-xs uppercase tracking-[0.15em] text-zinc-900">
							01 / 2026
						</p>
					</div>
				</div>
			</section>

			<style>{`
				.floor-plan {
					stroke-dasharray: 1800;
					stroke-dashoffset: 1800;
					animation: drawPlan 2.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
				}

				.inner-plan {
					opacity: 0;
					animation: fadeInPlan 0.8s ease-out 1.3s forwards;
				}

				.marker {
					opacity: 0;
					animation: markerIn 0.6s ease-out 1.8s forwards;
				}

				@keyframes drawPlan {
					to {
						stroke-dashoffset: 0;
					}
				}

				@keyframes fadeInPlan {
					to {
						opacity: 1;
					}
				}

				@keyframes markerIn {
					0% {
						opacity: 0;
						transform: scale(0);
						transform-origin: center;
					}
					70% {
						transform: scale(1.25);
					}
					100% {
						opacity: 1;
						transform: scale(1);
					}
				}

				@media (prefers-reduced-motion: reduce) {
					.floor-plan,
					.inner-plan,
					.marker {
						animation: none;
						opacity: 1;
						stroke-dashoffset: 0;
					}
				}
			`}</style>
		</main>
	);
}
