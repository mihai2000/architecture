// "use client";

// import Link from "next/link";
// import { useLanguage } from "@/lib/i18n/LanguageContext";

// export default function NotFound() {
// 	const { t } = useLanguage();

// 	return (
// 		// <main className="relative py-8 sm:py-10 lg:py-12">
// 		<main className="relative flex min-h-[620px] items-center">
// 			{/* Background architectural grid */}
// 			<div
// 				aria-hidden="true"
// 				className="pointer-events-none absolute inset-0 opacity-[0.3]"
// 				style={{
// 					backgroundImage: `
// 						linear-gradient(to right, #d9d7d2 1px, transparent 1px),
// 						linear-gradient(to bottom, #d9d7d2 1px, transparent 1px)
// 					`,
// 					backgroundSize: "84px 84px",
// 					maskImage:
// 						"linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
// 					WebkitMaskImage:
// 						"linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
// 				}}
// 			/>

// 			{/* Architectural presentation sheet */}
// 			<section className="relative mx-auto w-full max-w-[1240px] rounded-[2rem] border border-zinc-300 bg-white/90 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.03)] backdrop-blur-sm sm:p-9 lg:p-10">
// 				{/* Sheet header */}
// 				<div className="flex items-start justify-end border-b border-zinc-300 pb-6">
// 					<p className="text-4xl font-light tracking-[-0.05em] text-zinc-900 sm:text-5xl">
// 						404
// 					</p>
// 				</div>

// 				{/* Main composition */}
// 				<div className="grid min-h-[500px] items-center gap-10 py-12 sm:min-h-[540px] sm:py-14 lg:min-h-[560px] lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-16">
// 					{/* Left side */}
// 					<div className="relative z-10 lg:pl-2">
// 						<p className="text-[0.6rem] font-medium uppercase tracking-[0.4em] text-zinc-500">
// 							{t.notFound.eyebrow}
// 						</p>

// 						<h1 className="mt-5 text-[6rem] font-light leading-[0.8] tracking-[-0.065em] text-zinc-950 sm:text-[7.5rem] lg:text-[8.5rem]">
// 							404
// 						</h1>

// 						<div className="mt-8">
// 							<h2 className="text-lg font-medium uppercase tracking-[0.32em] text-zinc-900 sm:text-xl">
// 								{t.notFound.title}
// 							</h2>

// 							<div className="mt-5 h-px w-14 bg-zinc-400" />

// 							<p className="mt-6 max-w-[390px] text-sm leading-7 text-zinc-600 sm:text-[0.9rem]">
// 								{t.notFound.description}
// 							</p>
// 						</div>

// 						<Link
// 							href="/"
// 							className="group mt-8 inline-flex items-center gap-4 border border-zinc-300 bg-white px-6 py-4 text-[0.6rem] font-medium uppercase tracking-[0.32em] text-zinc-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-50"
// 						>
// 							<span className="text-sm transition-transform duration-300 group-hover:-translate-x-1">
// 								←
// 							</span>

// 							{t.notFound.backHome}
// 						</Link>
// 					</div>

// 					{/* Right side — architectural drawing */}
// 					<div className="relative flex min-h-[420px] items-center justify-center sm:min-h-[480px] lg:min-h-[540px]">
// 						{/* Drawing grid */}
// 						<div
// 							aria-hidden="true"
// 							className="absolute inset-0 opacity-60"
// 							style={{
// 								backgroundImage: `
// 									linear-gradient(to right, #e7e7e8 1px, transparent 1px),
// 									linear-gradient(to bottom, #e7e7e8 1px, transparent 1px)
// 								`,
// 								backgroundSize: "38px 38px",
// 							}}
// 						/>

// 						{/* Top dimension */}
// 						<div className="absolute left-[12%] right-[12%] top-[5%] flex items-center">
// 							<div className="h-px flex-1 bg-zinc-300" />

// 							<span className="px-3 text-[0.5rem] tracking-[0.15em] text-zinc-400">
// 								12.60
// 							</span>

// 							<div className="h-px flex-1 bg-zinc-300" />
// 						</div>

// 						{/* Dimension ticks */}
// 						<div className="absolute left-[12%] top-[calc(5%-4px)] h-2 w-px bg-zinc-400" />
// 						<div className="absolute right-[12%] top-[calc(5%-4px)] h-2 w-px bg-zinc-400" />

// 						{/* Side dimension */}
// 						<div className="absolute bottom-[13%] right-[4%] hidden items-center gap-2 sm:flex">
// 							<div className="h-px w-8 bg-zinc-300" />

// 							<span className="text-[0.5rem] tracking-[0.15em] text-zinc-400">
// 								8.40
// 							</span>
// 						</div>

// 						{/* Undefined space */}
// 						<div className="absolute bottom-[6%] left-1/2 flex -translate-x-1/2 items-center gap-3">
// 							<span className="whitespace-nowrap text-[0.48rem] uppercase tracking-[0.25em] text-zinc-400">
// 								{t.notFound.undefinedSpace}
// 							</span>

// 							<div className="h-px w-10 bg-zinc-300" />
// 						</div>

// 						{/* Floor plan */}
// 						<svg
// 							viewBox="0 0 600 500"
// 							className="relative z-10 h-full w-full max-w-[720px] overflow-visible"
// 							fill="none"
// 							xmlns="http://www.w3.org/2000/svg"
// 							aria-label="Architectural floor plan"
// 						>
// 							{/* Construction grid */}
// 							<g
// 								stroke="#d4d4d8"
// 								strokeWidth="1"
// 								strokeDasharray="5 7"
// 								opacity="0.75"
// 							>
// 								<line x1="90" y1="40" x2="90" y2="460" />
// 								<line x1="180" y1="40" x2="180" y2="460" />
// 								<line x1="270" y1="40" x2="270" y2="460" />
// 								<line x1="360" y1="40" x2="360" y2="460" />
// 								<line x1="450" y1="40" x2="450" y2="460" />
// 								<line x1="510" y1="40" x2="510" y2="460" />

// 								<line x1="55" y1="100" x2="545" y2="100" />
// 								<line x1="55" y1="190" x2="545" y2="190" />
// 								<line x1="55" y1="280" x2="545" y2="280" />
// 								<line x1="55" y1="370" x2="545" y2="370" />
// 								<line x1="55" y1="430" x2="545" y2="430" />
// 							</g>

// 							{/* Main floor plan */}
// 							<path
// 								d="
// 									M135 90
// 									H390
// 									V145
// 									H475
// 									V295
// 									H400
// 									V380
// 									H135
// 									V305
// 									H90
// 									V220
// 									H135
// 									Z
// 								"
// 								stroke="#18181b"
// 								strokeWidth="5"
// 								strokeLinecap="square"
// 								strokeLinejoin="miter"
// 								className="floor-plan"
// 							/>

// 							{/* Inner plan */}
// 							<path
// 								d="
// 									M200 145
// 									H345
// 									V215
// 									H400
// 									V295
// 									H345
// 									V340
// 									H200
// 									V275
// 									H165
// 									V220
// 									H200
// 									Z
// 								"
// 								stroke="#71717a"
// 								strokeWidth="2"
// 								strokeDasharray="8 6"
// 								className="inner-plan"
// 							/>

// 							{/* Door */}
// 							<path
// 								d="M400 295 A68 68 0 0 0 332 227"
// 								stroke="#a1a1aa"
// 								strokeWidth="2"
// 								className="detail-line"
// 							/>

// 							<line
// 								x1="400"
// 								y1="295"
// 								x2="332"
// 								y2="295"
// 								stroke="#71717a"
// 								strokeWidth="2"
// 							/>

// 							{/* Stairs */}
// 							<g stroke="#71717a" strokeWidth="2" className="detail-line">
// 								<line x1="425" y1="150" x2="475" y2="150" />
// 								<line x1="425" y1="160" x2="475" y2="160" />
// 								<line x1="425" y1="170" x2="475" y2="170" />
// 								<line x1="425" y1="180" x2="475" y2="180" />
// 								<line x1="425" y1="190" x2="475" y2="190" />
// 								<line x1="425" y1="200" x2="475" y2="200" />
// 							</g>

// 							{/* Undefined space marker */}
// 							<rect
// 								x="260"
// 								y="258"
// 								width="12"
// 								height="12"
// 								fill="#18181b"
// 								className="marker"
// 							/>

// 							{/* Reference points */}
// 							<g stroke="#71717a" strokeWidth="1" className="reference-points">
// 								<circle cx="90" cy="90" r="5" />
// 								<line x1="80" y1="90" x2="100" y2="90" />
// 								<line x1="90" y1="80" x2="90" y2="100" />

// 								<circle cx="510" cy="430" r="5" />
// 								<line x1="500" y1="430" x2="520" y2="430" />
// 								<line x1="510" y1="420" x2="510" y2="440" />
// 							</g>
// 						</svg>

// 						{/* Brand phrase */}
// 						<p className="absolute left-0 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[0.48rem] uppercase tracking-[0.38em] text-zinc-400 sm:block">
// 							Exploring Form and Space.
// 						</p>
// 					</div>
// 				</div>

// 				{/* Technical title block */}
// 				<div className="grid border-t border-zinc-300 pt-6 sm:grid-cols-2 lg:grid-cols-5">
// 					<div className="border-zinc-300 pb-5 sm:border-r sm:pr-6 lg:pb-0">
// 						<p className="text-[0.5rem] uppercase tracking-[0.25em] text-zinc-400">
// 							{t.notFound.studio}
// 						</p>

// 						<p className="mt-2 text-[0.6rem] font-medium uppercase tracking-[0.15em] text-zinc-900">
// 							Catalin Carp Studio
// 						</p>
// 					</div>

// 					<div className="border-zinc-300 py-5 sm:pl-6 lg:border-r lg:py-0 lg:pr-6">
// 						<p className="text-[0.5rem] uppercase tracking-[0.25em] text-zinc-400">
// 							{t.notFound.project}
// 						</p>

// 						<p className="mt-2 text-[0.6rem] uppercase tracking-[0.15em] text-zinc-900">
// 							{t.notFound.projectValue}
// 						</p>
// 					</div>

// 					<div className="border-zinc-300 py-5 sm:pr-6 lg:border-r lg:py-0 lg:pl-6">
// 						<p className="text-[0.5rem] uppercase tracking-[0.25em] text-zinc-400">
// 							{t.notFound.drawing}
// 						</p>

// 						<p className="mt-2 text-[0.6rem] uppercase tracking-[0.15em] text-zinc-900">
// 							{t.notFound.drawingValue}
// 						</p>
// 					</div>

// 					<div className="border-zinc-300 py-5 sm:pl-6 lg:border-r lg:py-0 lg:pr-6">
// 						<p className="text-[0.5rem] uppercase tracking-[0.25em] text-zinc-400">
// 							{t.notFound.scale}
// 						</p>

// 						<p className="mt-2 text-[0.6rem] uppercase tracking-[0.15em] text-zinc-900">
// 							{t.notFound.scaleValue}
// 						</p>
// 					</div>

// 					<div className="pt-5 sm:pl-6 lg:pt-0">
// 						<p className="text-[0.5rem] uppercase tracking-[0.25em] text-zinc-400">
// 							{t.notFound.revision}
// 						</p>

// 						<p className="mt-2 text-[0.6rem] uppercase tracking-[0.15em] text-zinc-900">
// 							{t.notFound.revisionValue}
// 						</p>
// 					</div>
// 				</div>
// 			</section>

// 			<style>{`
// 				.floor-plan {
// 					stroke-dasharray: 1900;
// 					stroke-dashoffset: 1900;
// 					animation: drawPlan 2.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
// 				}

// 				.inner-plan {
// 					opacity: 0;
// 					animation: fadePlan 0.8s ease-out 1.1s forwards;
// 				}

// 				.detail-line {
// 					opacity: 0;
// 					animation: fadePlan 0.7s ease-out 1.4s forwards;
// 				}

// 				.marker {
// 					opacity: 0;
// 					transform-origin: center;
// 					animation: markerIn 0.6s ease-out 1.8s forwards;
// 				}

// 				.reference-points {
// 					opacity: 0;
// 					animation: fadePlan 0.7s ease-out 1.6s forwards;
// 				}

// 				@keyframes drawPlan {
// 					to {
// 						stroke-dashoffset: 0;
// 					}
// 				}

// 				@keyframes fadePlan {
// 					to {
// 						opacity: 1;
// 					}
// 				}

// 				@keyframes markerIn {
// 					0% {
// 						opacity: 0;
// 						transform: scale(0);
// 					}

// 					70% {
// 						opacity: 1;
// 						transform: scale(1.2);
// 					}

// 					100% {
// 						opacity: 1;
// 						transform: scale(1);
// 					}
// 				}

// 				@media (prefers-reduced-motion: reduce) {
// 					.floor-plan,
// 					.inner-plan,
// 					.detail-line,
// 					.marker,
// 					.reference-points {
// 						animation: none;
// 						opacity: 1;
// 						stroke-dashoffset: 0;
// 						transform: none;
// 					}
// 				}
// 			`}</style>
// 		</main>
// 	);
// }
"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function NotFound() {
	const { t } = useLanguage();

	return (
		<main className="relative min-h-[calc(100vh-7rem)] w-full">
			<div className="mx-auto flex min-h-[calc(100vh-7rem)] w-full items-center justify-center">
				<section className="relative aspect-[1402/1122] w-full overflow-hidden border border-zinc-300 bg-[#fdfdfc] text-zinc-950">
					{/* =====================================================
					    GLOBAL SHEET
					===================================================== */}

					{/* Technical top header */}
					<header className="absolute inset-x-[3.5%] top-[4.5%] flex items-start justify-between">
						<div>
							<p className="text-[clamp(0.55rem,0.8vw,0.95rem)] font-semibold uppercase tracking-[0.16em]">
								CATALIN CARP STUDIO
							</p>

							<p className="mt-2 text-[clamp(0.45rem,0.65vw,0.8rem)] text-zinc-600">
								Architecture / Interior / Urban
							</p>
						</div>

						<p className="text-[clamp(1.8rem,4vw,4.3rem)] font-light leading-none tracking-[-0.06em]">
							404
						</p>
					</header>

					{/* Main horizontal technical line */}
					<div className="absolute left-[3.5%] right-[3.5%] top-[11.6%] h-px bg-zinc-300" />

					{/* =====================================================
					    LEFT INFORMATION
					===================================================== */}

					<div className="absolute left-[12%] top-[28%] z-20 w-[31%]">
						<p className="text-[clamp(0.42rem,0.55vw,0.65rem)] font-medium uppercase tracking-[0.38em] text-zinc-500">
							{t.notFound?.eyebrow ?? "ERROR / 404"}
						</p>

						<h1 className="mt-[2.5%] text-[clamp(4rem,10vw,10rem)] font-light leading-[0.8] tracking-[-0.075em]">
							404
						</h1>

						<h2 className="mt-[6%] text-[clamp(0.8rem,1.6vw,1.7rem)] font-medium uppercase tracking-[0.28em]">
							{t.notFound?.title ?? "SPACE NOT FOUND."}
						</h2>

						<div className="mt-[7%] h-px w-[17%] bg-zinc-400" />

						<p className="mt-[7%] max-w-[390px] text-[clamp(0.55rem,0.85vw,0.95rem)] leading-[1.8] text-zinc-600">
							{t.notFound?.description ??
								"It seems you've stepped into a space that doesn't exist in the current project."}
						</p>

						<Link
							href="/"
							className="group mt-[9%] inline-flex items-center gap-5 border border-zinc-700 bg-transparent px-6 py-4 text-[clamp(0.55rem,0.75vw,0.8rem)] font-medium uppercase tracking-[0.25em] transition-all duration-300 hover:bg-zinc-950 hover:text-white"
						>
							<span className="text-lg leading-none transition-transform duration-300 group-hover:-translate-x-1">
								←
							</span>

							{t.notFound?.backHome ?? "BACK TO HOME"}
						</Link>
					</div>

					{/* =====================================================
					    LEFT VERTICAL LABEL
					===================================================== */}

					<div className="absolute bottom-[28%] left-[4%] top-[43%] hidden items-center md:flex">
						<div className="h-full w-px bg-zinc-400" />

						<p className="ml-[-0.1rem] -rotate-90 whitespace-nowrap text-[clamp(0.4rem,0.55vw,0.65rem)] uppercase tracking-[0.3em] text-zinc-500">
							Exploring Form and Space.
						</p>
					</div>

					{/* =====================================================
					    RIGHT ARCHITECTURAL DRAWING
					===================================================== */}

					<div className="absolute left-[48%] top-[14%] h-[58%] w-[48%]">
						{/* SVG construction drawing */}
						<svg
							viewBox="0 0 700 620"
							className="h-full w-full"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-label="Architectural floor plan"
						>
							{/* -------------------------------------------------
							    CONSTRUCTION GRID
							------------------------------------------------- */}

							<g className="construction-grid">
								{[110, 180, 250, 320, 390, 460, 530, 600].map((x) => (
									<line
										key={`v-${x}`}
										x1={x}
										y1="35"
										x2={x}
										y2="570"
										stroke="#e2e2e2"
										strokeWidth="1"
										strokeDasharray="4 7"
									/>
								))}

								{[90, 160, 230, 300, 370, 440, 510].map((y) => (
									<line
										key={`h-${y}`}
										x1="50"
										y1={y}
										x2="650"
										y2={y}
										stroke="#e2e2e2"
										strokeWidth="1"
										strokeDasharray="4 7"
									/>
								))}
							</g>

							{/* -------------------------------------------------
							    REFERENCE AXES
							------------------------------------------------- */}

							<g className="reference-lines">
								<line
									x1="190"
									y1="25"
									x2="190"
									y2="570"
									stroke="#dedede"
									strokeWidth="1"
									strokeDasharray="5 7"
								/>

								<line
									x1="515"
									y1="25"
									x2="515"
									y2="570"
									stroke="#dedede"
									strokeWidth="1"
									strokeDasharray="5 7"
								/>

								<line
									x1="55"
									y1="250"
									x2="650"
									y2="250"
									stroke="#dedede"
									strokeWidth="1"
									strokeDasharray="5 7"
								/>
							</g>

							{/* -------------------------------------------------
							    TOP DIMENSION
							------------------------------------------------- */}

							<g className="dimension-line">
								<line
									x1="205"
									y1="62"
									x2="530"
									y2="62"
									stroke="#b8b8b8"
									strokeWidth="1"
								/>

								<line
									x1="205"
									y1="55"
									x2="205"
									y2="69"
									stroke="#b8b8b8"
									strokeWidth="1"
								/>

								<line
									x1="530"
									y1="55"
									x2="530"
									y2="69"
									stroke="#b8b8b8"
									strokeWidth="1"
								/>

								<text
									x="367"
									y="52"
									textAnchor="middle"
									fill="#777"
									fontSize="9"
									letterSpacing="2"
								>
									12.60
								</text>
							</g>

							{/* -------------------------------------------------
							    RIGHT DIMENSION
							------------------------------------------------- */}

							<g className="dimension-line">
								<line
									x1="610"
									y1="160"
									x2="610"
									y2="420"
									stroke="#b8b8b8"
									strokeWidth="1"
								/>

								<line
									x1="603"
									y1="160"
									x2="617"
									y2="160"
									stroke="#b8b8b8"
									strokeWidth="1"
								/>

								<line
									x1="603"
									y1="420"
									x2="617"
									y2="420"
									stroke="#b8b8b8"
									strokeWidth="1"
								/>

								<text
									x="625"
									y="295"
									fill="#777"
									fontSize="9"
									letterSpacing="2"
									transform="rotate(90 625 295)"
								>
									8.40
								</text>
							</g>

							{/* -------------------------------------------------
							    REFERENCE POINT — TOP LEFT
							------------------------------------------------- */}

							<g className="reference-point">
								<circle cx="165" cy="82" r="5" stroke="#777" strokeWidth="1" />

								<line x1="155" y1="82" x2="175" y2="82" stroke="#777" />

								<line x1="165" y1="72" x2="165" y2="92" stroke="#777" />
							</g>

							{/* -------------------------------------------------
							    REFERENCE POINT — BOTTOM RIGHT
							------------------------------------------------- */}

							<g className="reference-point">
								<circle cx="585" cy="490" r="5" stroke="#777" strokeWidth="1" />

								<line x1="575" y1="490" x2="595" y2="490" stroke="#777" />

								<line x1="585" y1="480" x2="585" y2="500" stroke="#777" />
							</g>

							{/* -------------------------------------------------
							    MAIN FLOOR PLAN
							------------------------------------------------- */}

							<path
								className="main-wall"
								d="
									M210 115
									H430
									V160
									H535
									V335
									H470
									V435
									H210
									V345
									H145
									V275
									H210
									Z
								"
								stroke="#111111"
								strokeWidth="5"
								strokeLinecap="square"
								strokeLinejoin="miter"
							/>

							{/* -------------------------------------------------
							    SECONDARY / DASHED PLAN
							------------------------------------------------- */}

							<path
								className="secondary-wall"
								d="
									M275 190
									H390
									V245
									H450
									V330
									H390
									V385
									H275
									V315
									H235
									V260
									H275
									Z
								"
								stroke="#858585"
								strokeWidth="2"
								strokeDasharray="8 6"
							/>

							{/* -------------------------------------------------
							    DOOR OPENING
							------------------------------------------------- */}

							<path
								className="door-arc"
								d="M470 335 A75 75 0 0 0 395 260"
								stroke="#999"
								strokeWidth="2"
							/>

							<line
								className="door-line"
								x1="470"
								y1="335"
								x2="395"
								y2="335"
								stroke="#777"
								strokeWidth="2"
							/>

							{/* -------------------------------------------------
							    STAIRS
							------------------------------------------------- */}

							<g className="stairs" stroke="#777" strokeWidth="2">
								<line x1="485" y1="165" x2="535" y2="165" />
								<line x1="485" y1="175" x2="535" y2="175" />
								<line x1="485" y1="185" x2="535" y2="185" />
								<line x1="485" y1="195" x2="535" y2="195" />
								<line x1="485" y1="205" x2="535" y2="205" />
								<line x1="485" y1="215" x2="535" y2="215" />
								<line x1="485" y1="225" x2="535" y2="225" />
							</g>

							{/* -------------------------------------------------
							    CENTRAL MARKER
							------------------------------------------------- */}

							<rect
								className="central-marker"
								x="332"
								y="292"
								width="12"
								height="12"
								fill="#111"
							/>

							{/* -------------------------------------------------
							    DRAWING LABELS
							------------------------------------------------- */}

							<text
								x="65"
								y="320"
								fill="#999"
								fontSize="8"
								letterSpacing="2"
								transform="rotate(-90 65 320)"
							>
								EXPLORING SPACE
							</text>

							<text x="85" y="340" fill="#666" fontSize="8" letterSpacing="1">
								UNDEFINED SPACE
							</text>
						</svg>
					</div>

					{/* =====================================================
					    RIGHT TOP DRAWING NUMBER
					===================================================== */}

					<div className="absolute right-[4%] top-[15%] hidden border-l border-zinc-400 pl-4 md:block">
						<p className="rotate-90 origin-top-left whitespace-nowrap text-[0.55rem] uppercase tracking-[0.3em] text-zinc-500">
							6R07 / 14.40A
						</p>
					</div>

					{/* =====================================================
					    BOTTOM TITLE BLOCK
					===================================================== */}

					<div className="absolute bottom-[3.5%] left-[3.5%] right-[3.5%]">
						<div className="h-px bg-zinc-400" />

						<div className="mt-6 grid grid-cols-[1.4fr_1.2fr_1.2fr_0.7fr_0.7fr_0.7fr]">
							{/* Studio */}
							<div className="border-r border-zinc-300 pr-8">
								<div className="flex gap-6">
									<div className="relative h-14 w-14 shrink-0 border border-zinc-400">
										<div className="absolute inset-0">
											<div className="absolute left-1/2 top-0 h-full w-px bg-zinc-400" />
											<div className="absolute left-0 top-1/2 h-px w-full bg-zinc-400" />
											<div className="absolute left-0 top-0 h-full w-px rotate-45 origin-center bg-zinc-400" />
										</div>
									</div>

									<div>
										<p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em]">
											Catalin
											<br />
											Carp Studio
										</p>

										<p className="mt-2 text-[0.7rem] text-zinc-600">
											Timisoara, Romania
										</p>
									</div>
								</div>
							</div>

							{/* Project */}
							<div className="border-r border-zinc-300 px-8">
								<p className="text-[0.55rem] font-semibold uppercase tracking-[0.2em]">
									Project
								</p>

								<p className="mt-4 text-[0.7rem] uppercase leading-6">
									Catalin Carp Studio
									<br />
									Architecture Portfolio
								</p>
							</div>

							{/* Drawing */}
							<div className="border-r border-zinc-300 px-8">
								<p className="text-[0.55rem] font-semibold uppercase tracking-[0.2em]">
									Drawing
								</p>

								<p className="mt-4 text-[0.7rem] uppercase leading-6">
									Error / 404
									<br />
									Space Not Found
								</p>
							</div>

							{/* Scale */}
							<div className="border-r border-zinc-300 px-8">
								<p className="text-[0.55rem] font-semibold uppercase tracking-[0.2em]">
									Scale
								</p>

								<p className="mt-4 text-[0.7rem] uppercase">NTS</p>
							</div>

							{/* Date */}
							<div className="border-r border-zinc-300 px-8">
								<p className="text-[0.55rem] font-semibold uppercase tracking-[0.2em]">
									Date
								</p>

								<p className="mt-4 text-[0.7rem] uppercase">2026</p>
							</div>

							{/* Revision */}
							<div className="pl-8">
								<p className="text-[0.55rem] font-semibold uppercase tracking-[0.2em]">
									Revision
								</p>

								<p className="mt-4 text-[0.7rem] uppercase">01</p>
							</div>
						</div>
					</div>
				</section>
			</div>

			{/* =========================================================
			    DRAWING ANIMATION
			========================================================= */}

			<style jsx>{`
				.main-wall {
					stroke-dasharray: 1500;
					stroke-dashoffset: 1500;
					animation: drawMainWall 2.4s cubic-bezier(0.65, 0, 0.35, 1) forwards;
				}

				.secondary-wall {
					stroke-dasharray: 700;
					stroke-dashoffset: 700;
					opacity: 0;
					animation:
						drawSecondary 1.6s cubic-bezier(0.65, 0, 0.35, 1) 1.4s forwards,
						fadeIn 0.5s ease 1.4s forwards;
				}

				.door-arc {
					stroke-dasharray: 120;
					stroke-dashoffset: 120;
					opacity: 0;
					animation:
						drawDoor 0.9s ease-out 2.7s forwards,
						fadeIn 0.2s ease 2.7s forwards;
				}

				.door-line {
					stroke-dasharray: 100;
					stroke-dashoffset: 100;
					opacity: 0;
					animation:
						drawDoorLine 0.6s ease-out 2.8s forwards,
						fadeIn 0.2s ease 2.8s forwards;
				}

				.stairs line {
					stroke-dasharray: 55;
					stroke-dashoffset: 55;
					opacity: 0;
					animation:
						drawStair 0.45s ease-out forwards,
						fadeIn 0.2s ease forwards;
				}

				.stairs line:nth-child(1) {
					animation-delay: 2.8s;
				}

				.stairs line:nth-child(2) {
					animation-delay: 2.9s;
				}

				.stairs line:nth-child(3) {
					animation-delay: 3s;
				}

				.stairs line:nth-child(4) {
					animation-delay: 3.1s;
				}

				.stairs line:nth-child(5) {
					animation-delay: 3.2s;
				}

				.stairs line:nth-child(6) {
					animation-delay: 3.3s;
				}

				.stairs line:nth-child(7) {
					animation-delay: 3.4s;
				}

				.central-marker {
					transform-box: fill-box;
					transform-origin: center;
					opacity: 0;
					transform: scale(0);
					animation: markerIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 3.3s
						forwards;
				}

				.reference-point {
					opacity: 0;
					transform-box: fill-box;
					transform-origin: center;
					animation: referenceIn 0.7s ease-out 3.1s forwards;
				}

				.reference-point:nth-of-type(2) {
					animation-delay: 3.4s;
				}

				.construction-grid {
					opacity: 0;
					animation: gridIn 1.2s ease-out 0.4s forwards;
				}

				.reference-lines {
					opacity: 0;
					animation: gridIn 1s ease-out 0.8s forwards;
				}

				.dimension-line {
					opacity: 0;
					animation: dimensionIn 0.8s ease-out 1s forwards;
				}

				@keyframes drawMainWall {
					to {
						stroke-dashoffset: 0;
					}
				}

				@keyframes drawSecondary {
					to {
						stroke-dashoffset: 0;
					}
				}

				@keyframes drawDoor {
					to {
						stroke-dashoffset: 0;
					}
				}

				@keyframes drawDoorLine {
					to {
						stroke-dashoffset: 0;
					}
				}

				@keyframes drawStair {
					to {
						stroke-dashoffset: 0;
					}
				}

				@keyframes fadeIn {
					to {
						opacity: 1;
					}
				}

				@keyframes gridIn {
					to {
						opacity: 1;
					}
				}

				@keyframes dimensionIn {
					from {
						opacity: 0;
						transform: translateY(-4px);
					}

					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes markerIn {
					0% {
						opacity: 0;
						transform: scale(0);
					}

					70% {
						opacity: 1;
						transform: scale(1.25);
					}

					100% {
						opacity: 1;
						transform: scale(1);
					}
				}

				@keyframes referenceIn {
					0% {
						opacity: 0;
						transform: scale(0.5);
					}

					100% {
						opacity: 1;
						transform: scale(1);
					}
				}

				@media (prefers-reduced-motion: reduce) {
					.main-wall,
					.secondary-wall,
					.door-arc,
					.door-line,
					.stairs line,
					.central-marker,
					.reference-point,
					.construction-grid,
					.reference-lines,
					.dimension-line {
						animation: none !important;
						opacity: 1 !important;
						stroke-dashoffset: 0 !important;
						transform: none !important;
					}
				}
			`}</style>
		</main>
	);
}
