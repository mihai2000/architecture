import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Catalin Carp Studio — Architecture Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					gap: 40,
					background: "#18181b",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<div
						style={{
							width: 0,
							height: 0,
							borderLeft: "70px solid transparent",
							borderRight: "70px solid transparent",
							borderBottom: "80px solid #f3efe8",
						}}
					/>
					<div
						style={{
							position: "relative",
							width: 140,
							height: 90,
							background: "#f3efe8",
							display: "flex",
						}}
					>
						<div
							style={{
								position: "absolute",
								bottom: 0,
								left: 47,
								width: 46,
								height: 60,
								background: "#18181b",
							}}
						/>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 14,
					}}
				>
					<div
						style={{
							fontSize: 54,
							fontWeight: 700,
							letterSpacing: 10,
							color: "#f3efe8",
						}}
					>
						CATALIN CARP STUDIO
					</div>
					<div
						style={{
							fontSize: 24,
							letterSpacing: 6,
							color: "#a1a1aa",
						}}
					>
						ARCHITECTURE PORTFOLIO
					</div>
				</div>
			</div>
		),
		{ ...size },
	);
}
