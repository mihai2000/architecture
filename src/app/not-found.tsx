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

import { useLanguage } from "@/lib/i18n/LanguageContext";
import Link from "next/link";

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
							viewBox="0 0 647 622"
							className="h-full w-full"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-label="Architectural floor plan"
						>
							{/* =========================================================
	    CONSTRUCTION GRID
	========================================================= */}

							<g className="plan-grid">
								{/* vertical construction lines */}
								<line x1="99" y1="45" x2="99" y2="610" />
								<line x1="181" y1="45" x2="181" y2="610" />
								<line x1="245" y1="45" x2="245" y2="610" />
								<line x1="316" y1="45" x2="316" y2="610" />
								<line x1="387" y1="45" x2="387" y2="610" />
								<line x1="457" y1="45" x2="457" y2="610" />
								<line x1="528" y1="45" x2="528" y2="610" />
								<line x1="600" y1="45" x2="600" y2="610" />

								{/* horizontal construction lines */}
								<line x1="20" y1="90" x2="625" y2="90" />
								<line x1="20" y1="167" x2="625" y2="167" />
								<line x1="20" y1="243" x2="625" y2="243" />
								<line x1="20" y1="319" x2="625" y2="319" />
								<line x1="20" y1="397" x2="625" y2="397" />
								<line x1="20" y1="474" x2="625" y2="474" />
								<line x1="20" y1="551" x2="625" y2="551" />
							</g>

							{/* =========================================================
	    DIMENSION — 12.60
	========================================================= */}

							<g className="plan-dimension">
								<line x1="134" y1="120" x2="498" y2="120" />
								<line x1="134" y1="112" x2="134" y2="128" />
								<line x1="498" y1="112" x2="498" y2="128" />

								<text x="316" y="109" textAnchor="middle" className="plan-text">
									12.60
								</text>
							</g>

							{/* =========================================================
	    DIMENSION — 8.40
	========================================================= */}

							<g className="plan-dimension">
								<line x1="560" y1="263" x2="560" y2="484" />
								<line x1="552" y1="263" x2="568" y2="263" />
								<line x1="552" y1="484" x2="568" y2="484" />

								<text
									x="578"
									y="374"
									textAnchor="middle"
									transform="rotate(90 578 374)"
									className="plan-text"
								>
									8.40
								</text>
							</g>

							{/* =========================================================
	    REFERENCE POINT — TOP LEFT
	========================================================= */}

							<g className="reference-point">
								<circle cx="99" cy="90" r="7" />
								<line x1="86" y1="90" x2="112" y2="90" />
								<line x1="99" y1="77" x2="99" y2="103" />
							</g>

							{/* =========================================================
	    REFERENCE POINT — BOTTOM RIGHT
	========================================================= */}

							<g className="reference-point">
								<circle cx="600" cy="551" r="7" />
								<line x1="587" y1="551" x2="613" y2="551" />
								<line x1="600" y1="538" x2="600" y2="564" />
							</g>

							{/* =========================================================
	    MAIN OUTER WALL — BASED ON REFERENCE
	========================================================= */}

							<path
								className="main-wall"
								d="
			M134 178
			H390
			V263
			H498
			V354
			H418
			V484
			H390
			V550
			H174
			V395
			H229
			V319
			H134
			Z
		"
							/>

							{/* =========================================================
	    SUBTLE INNER CONSTRUCTION LINE
	========================================================= */}

							<path
								className="inner-construction"
								d="
			M209 265
			H385
			V479
			H297
		"
							/>

							{/* =========================================================
	    LOWER INNER WALL
	========================================================= */}

							<path
								className="inner-wall"
								d="
			M174 479
			H297
			V550
		"
							/>

							{/* =========================================================
	    STAIR AREA
	========================================================= */}

							<g className="stairs">
								<line x1="418" y1="355" x2="497" y2="355" />

								<line x1="418" y1="363" x2="497" y2="363" />
								<line x1="418" y1="372" x2="497" y2="372" />
								<line x1="418" y1="381" x2="497" y2="381" />
								<line x1="418" y1="390" x2="497" y2="390" />
								<line x1="418" y1="399" x2="497" y2="399" />
								<line x1="418" y1="408" x2="497" y2="408" />
							</g>

							{/* =========================================================
	    ELEVATOR / SERVICE AREA
	========================================================= */}

							<g className="service-box">
								<rect x="418" y="388" width="80" height="96" />

								<line x1="418" y1="388" x2="498" y2="484" />
								<line x1="498" y1="388" x2="418" y2="484" />
							</g>

							{/* =========================================================
	    INTERNAL DASHED WALL
	========================================================= */}

							<path
								className="inner-dashed"
								d="
			M209 265
			H385
			V353
			H418
		"
							/>

							{/* =========================================================
	    CENTRAL MARKER
	========================================================= */}

							<rect
								className="central-marker"
								x="286"
								y="475"
								width="12"
								height="12"
							/>

							{/* =========================================================
	    UNDEFINED SPACE LABEL
	========================================================= */}

							<g className="undefined-label">
								<text x="12" y="437" className="plan-text plan-label">
									UNDEFINED SPACE
								</text>

								<line x1="141" y1="434" x2="157" y2="434" />
							</g>

							{/* =========================================================
	    VERTICAL EXPLORING SPACE LABEL
	========================================================= */}

							<text
								x="70"
								y="440"
								transform="rotate(-90 70 440)"
								className="plan-text plan-label"
							>
								EXPLORING SPACE
							</text>

							{/* =========================================================
	    DRAWING NUMBER
	========================================================= */}

							<text
								x="628"
								y="35"
								transform="rotate(90 628 35)"
								className="plan-text plan-label"
							>
								6R07 / 14.40A
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
				/* =========================================================
	   BASE SVG STYLES
	========================================================= */

				.plan-grid line {
					stroke: #dedede;
					stroke-width: 1;
					stroke-dasharray: 5 8;
				}

				.plan-dimension line {
					stroke: #9d9d9d;
					stroke-width: 1;
				}

				.plan-text {
					fill: #666;
					font-size: 9px;
					letter-spacing: 2px;
				}

				.plan-label {
					font-size: 8px;
				}

				/* =========================================================
	   GRID
	========================================================= */

				.plan-grid {
					opacity: 0;
					animation: gridAppear 1.2s ease-out 0.1s forwards;
				}

				/* =========================================================
	   DIMENSIONS
	========================================================= */

				.plan-dimension {
					opacity: 0;
					animation: dimensionAppear 0.8s ease-out 0.8s forwards;
				}

				/* =========================================================
	   REFERENCE POINTS
	========================================================= */

				.reference-point {
					stroke: #777;
					stroke-width: 1;
					opacity: 0;
					transform-box: fill-box;
					transform-origin: center;
					animation: referenceAppear 0.7s ease-out 1.2s forwards;
				}

				.reference-point:nth-of-type(2) {
					animation-delay: 2.8s;
				}

				/* =========================================================
	   MAIN WALL
	========================================================= */

				.main-wall {
					fill: none;
					stroke: #111;
					stroke-width: 7;
					stroke-linecap: square;
					stroke-linejoin: miter;

					stroke-dasharray: 1800;
					stroke-dashoffset: 1800;

					animation: drawMainWall 3s cubic-bezier(0.65, 0, 0.35, 1) 0.5s
						forwards;
				}

				/* =========================================================
	   INNER CONSTRUCTION
	========================================================= */

				.inner-construction {
					fill: none;
					stroke: #777;
					stroke-width: 2;

					stroke-dasharray: 600;
					stroke-dashoffset: 600;

					animation: drawInner 1.6s cubic-bezier(0.65, 0, 0.35, 1) 2.5s forwards;
				}

				.inner-wall {
					fill: none;
					stroke: #777;
					stroke-width: 2;

					stroke-dasharray: 400;
					stroke-dashoffset: 400;

					animation: drawInner 1.2s cubic-bezier(0.65, 0, 0.35, 1) 2.9s forwards;
				}

				/* =========================================================
	   DASHED INTERIOR
	========================================================= */

				.inner-dashed {
					fill: none;
					stroke: #999;
					stroke-width: 2;
					stroke-dasharray: 7 6;

					opacity: 0;

					animation: fadeDrawing 0.8s ease-out 3.1s forwards;
				}

				/* =========================================================
	   STAIRS
	========================================================= */

				.stairs {
					stroke: #777;
					stroke-width: 2;
				}

				.stairs line {
					stroke-dasharray: 80;
					stroke-dashoffset: 80;
					opacity: 0;

					animation:
						drawStair 0.4s ease-out forwards,
						fadeDrawing 0.2s ease-out forwards;
				}

				.stairs line:nth-child(1) {
					animation-delay: 3.4s;
				}

				.stairs line:nth-child(2) {
					animation-delay: 3.5s;
				}

				.stairs line:nth-child(3) {
					animation-delay: 3.6s;
				}

				.stairs line:nth-child(4) {
					animation-delay: 3.7s;
				}

				.stairs line:nth-child(5) {
					animation-delay: 3.8s;
				}

				.stairs line:nth-child(6) {
					animation-delay: 3.9s;
				}

				.stairs line:nth-child(7) {
					animation-delay: 4s;
				}

				/* =========================================================
	   SERVICE / ELEVATOR BOX
	========================================================= */

				.service-box {
					stroke: #888;
					stroke-width: 1.5;
					opacity: 0;

					animation: fadeDrawing 0.8s ease-out 4s forwards;
				}

				/* =========================================================
	   CENTRAL MARKER
	========================================================= */

				.central-marker {
					fill: #111;

					opacity: 0;
					transform-box: fill-box;
					transform-origin: center;
					transform: scale(0);

					animation: markerAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 3.8s
						forwards;
				}

				/* =========================================================
	   LABELS
	========================================================= */

				.undefined-label {
					opacity: 0;

					animation: fadeDrawing 0.8s ease-out 2.5s forwards;
				}

				.undefined-label line {
					stroke: #aaa;
					stroke-width: 1;
				}

				/* =========================================================
	   KEYFRAMES
	========================================================= */

				@keyframes gridAppear {
					from {
						opacity: 0;
					}

					to {
						opacity: 1;
					}
				}

				@keyframes dimensionAppear {
					from {
						opacity: 0;
						transform: translateY(-5px);
					}

					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes referenceAppear {
					0% {
						opacity: 0;
						transform: scale(0.5);
					}

					70% {
						opacity: 1;
						transform: scale(1.15);
					}

					100% {
						opacity: 1;
						transform: scale(1);
					}
				}

				@keyframes drawMainWall {
					to {
						stroke-dashoffset: 0;
					}
				}

				@keyframes drawInner {
					to {
						stroke-dashoffset: 0;
					}
				}

				@keyframes drawStair {
					to {
						stroke-dashoffset: 0;
					}
				}

				@keyframes fadeDrawing {
					to {
						opacity: 1;
					}
				}

				@keyframes markerAppear {
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

				/* =========================================================
	   ACCESSIBILITY
	========================================================= */

				@media (prefers-reduced-motion: reduce) {
					.plan-grid,
					.plan-dimension,
					.reference-point,
					.main-wall,
					.inner-construction,
					.inner-wall,
					.inner-dashed,
					.stairs line,
					.service-box,
					.central-marker,
					.undefined-label {
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
