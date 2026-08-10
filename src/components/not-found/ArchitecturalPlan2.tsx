// components/not-found/ArchitecturalPlan.tsx

import type { SVGProps } from "react";
import styles from "./ArchitecturalPlan2.module.css";

export default function ArchitecturalPlan({
	className,
	...props
}: SVGProps<SVGSVGElement>) {
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
			<title id="plan-title">Architectural floor plan</title>

			<desc id="plan-description">
				Architectural floor plan with technical construction grid, wall
				geometry, staircase, elevator core, dimensions and drafting annotations.
			</desc>

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
				<path d="M174 218 H438" />

				{/* Left parallel line */}
				<path d="M174 218 V365" />

				{/* Bottom parallel line */}
				<path d="M218 603 H438" />

				{/* Lower-left parallel line */}
				<path d="M218 506 V603" />

				{/* Right upper parallel line */}
				<path d="M438 218 V307" />

				{/* Upper-right parallel line */}
				<path d="M438 307 H550" />

				{/* Right side parallel line */}
				<path d="M550 307 V396" />

				{/* Core bottom/right outline */}
				<path d="M469 528 H550 V435" />
			</g>

			{/* ----------------------------------------------------------------
			    INTERIOR DASHED CONSTRUCTION

			    These MUST stay dashed. They are never part of the primary
			    wall animation.
			----------------------------------------------------------------- */}

			<g className={styles.dashedLines} aria-hidden="true">
				<path d="M252 307 H438" />
				<path d="M438 307 V528" />
				<path d="M252 307 V365" />
				<path d="M218 506 H252" />
				<path d="M218 506 V526" />
				<path d="M252 526 H469" />
			</g>

			{/* ----------------------------------------------------------------
			    PRIMARY BLACK WALLS

			    Only these architectural edges receive the heavy stroke.
			----------------------------------------------------------------- */}

			<g className={styles.primaryWalls} aria-hidden="true">
				{/* Upper horizontal wall */}
				<path pathLength="1" d="M180 220 H438" />

				{/* Upper-right drop */}
				<path pathLength="1" d="M438 220 V307" />

				{/* Upper-right horizontal */}
				<path pathLength="1" d="M438 307 H550" />

				{/* Right external wall */}
				<path pathLength="1" d="M550 307 V395" />

				{/* Right stair/core upper boundary */}
				<path pathLength="1" d="M550 395 H469" />

				{/* Left side of stair/core */}
				<path pathLength="1" d="M469 435 V528" />

				{/* Lower core transition */}
				<path pathLength="1" d="M469 528 H438" />

				{/* Bottom-right wall */}
				<path pathLength="1" d="M438 528 V603" />

				{/* Bottom wall */}
				<path pathLength="1" d="M438 603 H218" />

				{/* Lower-left wall */}
				<path pathLength="1" d="M218 506 V440" />

				{/* Recess horizontal */}
				<path pathLength="1" d="M218 440 H271" />

				{/* Recess vertical */}
				<path pathLength="1" d="M271 440 V365" />

				{/* Recess upper horizontal */}
				<path pathLength="1" d="M271 365 H180" />

				{/* Left upper wall */}
				<path pathLength="1" d="M180 365 V220" />
			</g>

			{/* ----------------------------------------------------------------
			    THIN INTERNAL WALL EDGES

			    These remain gray and are NOT converted into heavy walls.
			----------------------------------------------------------------- */}

			<g className={styles.secondaryWalls} aria-hidden="true">
				<path d="M224 224 H432" />
				<path d="M224 224 V359" />
				<path d="M224 500 V597" />
				<path d="M224 597 H432" />
				<path d="M432 313 V522" />
				<path d="M432 522 H463" />
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
				<path d="M469 396 H550" />

				{/* Treads */}
				<line x1="477" y1="402" x2="477" y2="432" />
				<line x1="485" y1="402" x2="485" y2="432" />
				<line x1="493" y1="402" x2="493" y2="432" />
				<line x1="501" y1="402" x2="501" y2="432" />
				<line x1="509" y1="402" x2="509" y2="432" />
				<line x1="517" y1="402" x2="517" y2="432" />
				<line x1="525" y1="402" x2="525" y2="432" />
				<line x1="533" y1="402" x2="533" y2="432" />
				<line x1="541" y1="402" x2="541" y2="432" />

				{/* Lower stair boundary */}
				<path d="M469 435 H550" />
			</g>

			{/* ----------------------------------------------------------------
			    ELEVATOR / SERVICE CORE

			    The X remains thin, unlike the surrounding structural wall.
			----------------------------------------------------------------- */}

			<g className={styles.core} aria-hidden="true">
				<rect x="469" y="435" width="81" height="93" />

				<line x1="469" y1="435" x2="550" y2="528" />
				<line x1="550" y1="435" x2="469" y2="528" />
			</g>

			{/* ----------------------------------------------------------------
			    CENTRAL DATUM

			    Important: there is NO vertical line below this square.
			----------------------------------------------------------------- */}

			<rect
				className={styles.datum}
				x="332"
				y="527"
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
					12.60
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
					8.40
				</text>
			</g>

			{/* ----------------------------------------------------------------
			    UNDEFINED SPACE
			----------------------------------------------------------------- */}

			<g className={styles.annotations} aria-hidden="true">
				<text x="49" y="485" className={styles.annotationText}>
					UNDEFINED SPACE
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
				EXPLORING SPACE
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
				6R07 / 14.40A
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
