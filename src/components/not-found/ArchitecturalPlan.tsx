// components/not-found/ArchitecturalPlan.tsx

import type { SVGProps } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./ArchitecturalPlan.module.css";

export default function ArchitecturalPlan({
	className,
	...props
}: SVGProps<SVGSVGElement>) {
	const { t } = useLanguage();

	return (
		<svg
			{...props}
			className={[styles.plan, className].filter(Boolean).join(" ")}
			viewBox="0 0 711 684"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid meet"
			role="img"
			aria-labelledby="plan-title plan-description"
		>
			<title id="plan-title">{t.notFound.planTitle}</title>

			<desc id="plan-description">{t.notFound.planDescription}</desc>

			{/* ----------------------------------------------------------------
			    GRID
			----------------------------------------------------------------- */}

			<g className={styles.grid} aria-hidden="true">
				<line x1="60" y1="45" x2="60" y2="650" />
				<line x1="140" y1="45" x2="140" y2="650" />
				<line x1="216" y1="45" x2="216" y2="650" />
				<line x1="293" y1="45" x2="293" y2="650" />
				<line x1="370" y1="45" x2="370" y2="650" />
				<line x1="447" y1="45" x2="447" y2="650" />
				<line x1="524" y1="45" x2="524" y2="650" />
				<line x1="601" y1="45" x2="601" y2="650" />
				<line x1="685" y1="45" x2="685" y2="650" />

				<line x1="20" y1="136" x2="690" y2="136" />
				<line x1="20" y1="216" x2="690" y2="216" />
				<line x1="20" y1="286" x2="690" y2="286" />
				<line x1="20" y1="366" x2="690" y2="366" />
				<line x1="20" y1="446" x2="690" y2="446" />
				<line x1="20" y1="526" x2="690" y2="526" />
				<line x1="20" y1="605" x2="690" y2="605" />
			</g>

			{/* ----------------------------------------------------------------
			    REFERENCE AXES
			----------------------------------------------------------------- */}

			<g className={styles.referenceAxes} aria-hidden="true">
				<line x1="140" y1="65" x2="140" y2="645" />
				<line x1="586" y1="65" x2="586" y2="645" />
				<line x1="35" y1="216" x2="690" y2="216" />
				<line x1="35" y1="605" x2="690" y2="605" />
			</g>

			{/* ----------------------------------------------------------------
			    REFERENCE MARKERS
			----------------------------------------------------------------- */}

			<g className={styles.referencePoints} aria-hidden="true">
				<g className={styles.referencePoint}>
					<circle cx="140" cy="87" r="6" />
					<line x1="128" y1="87" x2="152" y2="87" />
					<line x1="140" y1="75" x2="140" y2="99" />
				</g>

				<g className={styles.referencePoint}>
					<circle cx="586" cy="87" r="6" />
					<line x1="574" y1="87" x2="598" y2="87" />
					<line x1="586" y1="75" x2="586" y2="99" />
				</g>

				<g className={styles.referencePoint}>
					<circle cx="685" cy="216" r="6" />
					<line x1="673" y1="216" x2="697" y2="216" />
					<line x1="685" y1="204" x2="685" y2="228" />
				</g>

				<g className={styles.referencePoint}>
					<circle cx="685" cy="605" r="6" />
					<line x1="673" y1="605" x2="697" y2="605" />
					<line x1="685" y1="593" x2="685" y2="617" />
				</g>
			</g>

			{/* ----------------------------------------------------------------
			    THIN DOUBLE-LINE ARCHITECTURAL OUTLINE

			    This layer is deliberately separate from the black walls.
			    It is what preserves the thin parallel lines visible in
			    the reference image.
			----------------------------------------------------------------- */}

			<g className={styles.lightOutline} aria-hidden="true">
				{/* Top parallel line */}
				<path d="M174 218 H426" />

				{/* Left parallel line */}
				<path d="M174 218 V365" />

				{/* Left Bottom parallel line */}
				<path d="M181 366 H174" />

				{/* Bottom parallel line */}
				<path d="M217 605 H426" />

				{/* Lower-left parallel line */}
				<path d="M216 510 V605" />

				{/* Right upper parallel line */}
				<path d="M426 218 V307" />

				{/* Right side parallel line */}
				<path d="M530 260 H427" />
				<path d="M530 280 V260" />

				{/* entrance */}
				<path d="M530 435 V365" />

				{/* Core bottom/right outline */}
				<path d="M450 532 H530 V436" />

				{/*  right bottom wall */}
				<path d="M426 532 V605" />
			</g>

			{/* ----------------------------------------------------------------
			    INTERIOR DASHED CONSTRUCTION

			    These MUST stay dashed. They are never part of the primary
			    wall animation.
			----------------------------------------------------------------- */}

			<g className={styles.dashedLines} aria-hidden="true">
				{/* top */}
				<path d="M250 307 H420" />
				{/* right */}
				<path d="M420 307 V531" />
				{/* bottom */}
				<path d="M222 526 H421" />
				{/* left */}
				<path d="M250 307 V360" />
			</g>

			{/* ----------------------------------------------------------------
			    PRIMARY BLACK WALLS

			    Only these architectural edges receive the heavy stroke.
			----------------------------------------------------------------- */}

			<g className={styles.primaryWalls} aria-hidden="true">
				{/* Upper horizontal wall - delete*/}
				{/* <path pathLength="1" d="M180 220 H438" /> */}

				{/* Upper-right drop */}
				<path pathLength="1" d="M423 228 V304" />

				{/* Upper-right horizontal */}
				<path pathLength="1" d="M424 304 H521" />

				{/* Right external wall */}
				<path pathLength="1" d="M527 277 V395" />

				{/* Right stair/core upper boundary */}

				<rect
					className={styles.datum}
					x="512"
					y="390"
					width="18"
					height="9"
					aria-hidden="true"
				/>
				<rect
					className={styles.datum}
					x="512"
					y="430"
					width="18"
					height="9"
					aria-hidden="true"
				/>

				{/* Left side of stair/core */}
				<path pathLength="1" d="M450 433 V528" />

				{/* Lower core transition */}
				<path pathLength="1" d="M450 529 H423" />

				{/* Lower-left wall */}
				<path pathLength="1" d="M219 506 V440" />

				{/* Recess horizontal */}
				<path pathLength="1" d="M220 440 H270" />

				{/* Recess vertical */}
				<path pathLength="1" d="M271 440 V363" />

				{/* Recess upper horizontal */}
				<path pathLength="1" d="M270 363 H183" />
			</g>

			{/* ----------------------------------------------------------------
			    THIN INTERNAL WALL EDGES

			    These remain gray and are NOT converted into heavy walls.
			----------------------------------------------------------------- */}

			<g className={styles.secondaryWalls} aria-hidden="true">
				{/* upper wall */}
				<path d="M180 225 H420" />
				{/* left upper wall */}
				<path d="M180 225 V360" />
				{/* left bottom wall */}
				<path d="M222 509 V597" />
				{/* bottom wall */}
				<path d="M222 598 H420" />
				{/* right bottom wall */}
				<path d="M420 532 V597" />
			</g>

			{/* ----------------------------------------------------------------
			    STAIRS

			    Reference structure:
			    - two stronger horizontal boundaries
			    - vertical tread lines
			    - no filled black rectangle
			    - treads stay thin gray
			----------------------------------------------------------------- */}

			<g className={styles.stairs} aria-hidden="true">
				{/* Upper stair boundary */}
				<path d="M447 390.5 H512" />
				<path d="M454 394.5 H512" />
				<path d="M447 399 H512" />
				<path d="M447 390.5 V399" />
				{/* Treads */}
				<line x1="460" y1="399" x2="460" y2="431" />
				<line x1="467" y1="399" x2="467" y2="431" />
				<line x1="474" y1="399" x2="474" y2="431" />
				<line x1="481" y1="399" x2="481" y2="431" />
				<line x1="488" y1="399" x2="488" y2="431" />
				<line x1="495" y1="399" x2="495" y2="431" />
				<line x1="502" y1="399" x2="502" y2="431" />
				{/* Lower stair boundary */}
				/<path d="M453 390.5 V430" />
				<path d="M454 439 H512" />
				<path d="M454 434.5 H512" />
				<path d="M454 430.5 H512" />
			</g>

			{/* ----------------------------------------------------------------
			    ELEVATOR / SERVICE CORE

			    The X remains thin, unlike the surrounding structural wall.
			----------------------------------------------------------------- */}
			<g className={styles.core} aria-hidden="true">
				<line className={styles.rect} x1="453" y1="446" x2="524" y2="446" />
				<line className={styles.rect} x1="524" y1="446" x2="524" y2="526" />
				<line className={styles.rect} x1="524" y1="526" x2="453" y2="526" />

				<line className={styles.cross} x1="453" y1="446" x2="524" y2="526" />
				<line className={styles.cross} x1="524" y1="446" x2="453" y2="526" />
			</g>

			{/* ----------------------------------------------------------------
			    CENTRAL DATUM

			    Important: there is NO vertical line below this square.
			----------------------------------------------------------------- */}

			<rect
				className={styles.datum}
				x="329"
				y="525"
				width="12"
				height="12"
				aria-hidden="true"
			/>

			{/* ----------------------------------------------------------------
			    DIMENSION: 12.60
			----------------------------------------------------------------- */}

			<g className={styles.dimensions} aria-hidden="true">
				<line x1="175" y1="157" x2="550" y2="157" />
				<line x1="175" y1="148" x2="175" y2="166" />
				<line x1="550" y1="148" x2="550" y2="166" />

				<line x1="171" y1="157" x2="179" y2="157" />
				<line x1="546" y1="157" x2="554" y2="157" />

				<text
					x="362.5"
					y="145"
					textAnchor="middle"
					className={styles.dimensionText}
				>
					{t.notFound.dimensionPrimary}
				</text>
			</g>

			{/* ----------------------------------------------------------------
			    DIMENSION: 8.40
			----------------------------------------------------------------- */}

			<g className={styles.dimensions} aria-hidden="true">
				<line x1="621" y1="278" x2="621" y2="533" />

				<line x1="612" y1="278" x2="630" y2="278" />
				<line x1="612" y1="533" x2="630" y2="533" />

				<line x1="617" y1="278" x2="625" y2="278" />
				<line x1="617" y1="533" x2="625" y2="533" />

				<text
					x="641"
					y="405"
					textAnchor="middle"
					transform="rotate(90 641 405)"
					className={styles.dimensionText}
				>
					{t.notFound.dimensionSecondary}
				</text>
			</g>

			{/* ----------------------------------------------------------------
			    UNDEFINED SPACE
			----------------------------------------------------------------- */}

			<g className={styles.annotations} aria-hidden="true">
				<text x="49" y="485" className={styles.annotationText}>
					{t.notFound.undefinedSpace}
				</text>

				<line x1="169" y1="482" x2="196" y2="482" />
			</g>

			{/* ----------------------------------------------------------------
			    EXPLORING SPACE
			----------------------------------------------------------------- */}

			<text
				x="52"
				y="440"
				transform="rotate(-90 52 440)"
				className={styles.verticalAnnotation}
				aria-hidden="true"
			>
				{t.notFound.exploringSpace}
			</text>

			{/* ----------------------------------------------------------------
			    DRAWING IDENTIFIER
			----------------------------------------------------------------- */}

			<text
				x="669"
				y="12"
				transform="rotate(90 669 12)"
				className={styles.drawingIdentifier}
				aria-hidden="true"
			>
				{t.notFound.drawingCode}
			</text>

			<line
				className={styles.identifierLine}
				x1="670"
				y1="8"
				x2="670"
				y2="147"
				aria-hidden="true"
			/>
		</svg>
	);
}
