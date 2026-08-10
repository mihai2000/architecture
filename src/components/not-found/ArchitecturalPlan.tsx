// components/not-found/ArchitecturalPlan.tsx

import styles from "./ArchitecturalPlan.module.css";

interface ArchitecturalPlanProps {
	className?: string;
}

export default function ArchitecturalPlan({
	className = "",
}: ArchitecturalPlanProps) {
	return (
		<svg
			viewBox="0 0 647 622"
			className={className}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			aria-label="Architectural floor plan"
		>
			<g className={styles.planGrid}>
				<line x1="99" y1="45" x2="99" y2="610" />
				<line x1="181" y1="45" x2="181" y2="610" />
				<line x1="245" y1="45" x2="245" y2="610" />
				<line x1="316" y1="45" x2="316" y2="610" />
				<line x1="387" y1="45" x2="387" y2="610" />
				<line x1="457" y1="45" x2="457" y2="610" />
				<line x1="528" y1="45" x2="528" y2="610" />
				<line x1="600" y1="45" x2="600" y2="610" />

				<line x1="20" y1="90" x2="625" y2="90" />
				<line x1="20" y1="167" x2="625" y2="167" />
				<line x1="20" y1="243" x2="625" y2="243" />
				<line x1="20" y1="319" x2="625" y2="319" />
				<line x1="20" y1="397" x2="625" y2="397" />
				<line x1="20" y1="474" x2="625" y2="474" />
				<line x1="20" y1="551" x2="625" y2="551" />
			</g>

			<g className={styles.planDimension}>
				<line x1="134" y1="120" x2="498" y2="120" />
				<line x1="134" y1="112" x2="134" y2="128" />
				<line x1="498" y1="112" x2="498" y2="128" />

				<text x="316" y="109" textAnchor="middle" className={styles.planText}>
					12.60
				</text>
			</g>

			<g className={styles.planDimension}>
				<line x1="560" y1="263" x2="560" y2="484" />
				<line x1="552" y1="263" x2="568" y2="263" />
				<line x1="552" y1="484" x2="568" y2="484" />

				<text
					x="578"
					y="374"
					textAnchor="middle"
					transform="rotate(90 578 374)"
					className={styles.planText}
				>
					8.40
				</text>
			</g>

			<g className={styles.referencePoint}>
				<circle cx="99" cy="90" r="7" />
				<line x1="86" y1="90" x2="112" y2="90" />
				<line x1="99" y1="77" x2="99" y2="103" />
			</g>

			<g className={`${styles.referencePoint} ${styles.referencePointDelayed}`}>
				<circle cx="600" cy="551" r="7" />
				<line x1="587" y1="551" x2="613" y2="551" />
				<line x1="600" y1="538" x2="600" y2="564" />
			</g>

			<path
				className={styles.mainWall}
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

			<path
				className={styles.innerConstruction}
				d="
					M209 265
					H385
					V479
					H297
				"
			/>

			<path
				className={styles.innerWall}
				d="
					M174 479
					H297
					V550
				"
			/>

			<g className={styles.stairs}>
				<line x1="418" y1="355" x2="497" y2="355" />
				<line x1="418" y1="363" x2="497" y2="363" />
				<line x1="418" y1="372" x2="497" y2="372" />
				<line x1="418" y1="381" x2="497" y2="381" />
				<line x1="418" y1="390" x2="497" y2="390" />
				<line x1="418" y1="399" x2="497" y2="399" />
				<line x1="418" y1="408" x2="497" y2="408" />
			</g>

			<g className={styles.serviceBox}>
				<rect x="418" y="388" width="80" height="96" />

				<line x1="418" y1="388" x2="498" y2="484" />
				<line x1="498" y1="388" x2="418" y2="484" />
			</g>

			<path
				className={styles.innerDashed}
				d="
					M209 265
					H385
					V353
					H418
				"
			/>

			<rect
				className={styles.centralMarker}
				x="286"
				y="475"
				width="12"
				height="12"
			/>

			<g className={styles.undefinedLabel}>
				<text
					x="12"
					y="475"
					className={`${styles.planText} ${styles.planLabel}`}
				>
					UNDEFINED SPACE
				</text>

				<line x1="141" y1="434" x2="157" y2="434" />
			</g>

			<text
				x="70"
				y="440"
				transform="rotate(-90 70 440)"
				className={`${styles.planText} ${styles.planLabel}`}
			>
				EXPLORING SPACE
			</text>

			<text
				x="628"
				y="35"
				transform="rotate(90 628 35)"
				className={`${styles.planText} ${styles.planLabel}`}
			>
				6R07 / 14.40A
			</text>
		</svg>
	);
}
