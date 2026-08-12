import { ImageResponse } from "next/og";
import { projects } from "@/lib/projects";

export const dynamic = "force-static";
export const alt = "Catalin Carp Studio — project preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
	return projects.map((project) => ({ slug: project.slug }));
}

export default async function OpengraphImage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const project = projects.find((p) => p.slug === slug);

	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				background: "#18181b",
				padding: 72,
			}}
		>
			<div
				style={{
					fontSize: 22,
					letterSpacing: 6,
					color: "#a1a1aa",
					display: "flex",
				}}
			>
				CATALIN CARP STUDIO
			</div>
			<div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
				<div
					style={{
						fontSize: 56,
						fontWeight: 700,
						lineHeight: 1.15,
						color: "#f3efe8",
						display: "flex",
					}}
				>
					{project?.title.en ?? "Architecture Portfolio"}
				</div>
				{project ? (
					<div
						style={{
							fontSize: 28,
							letterSpacing: 2,
							color: "#a1a1aa",
							display: "flex",
						}}
					>
						{project.location.en}
					</div>
				) : null}
			</div>
		</div>,
		{ ...size },
	);
}
