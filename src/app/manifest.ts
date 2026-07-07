import type { MetadataRoute } from "next";
import { siteName } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: `${siteName} | Architecture Portfolio`,
		short_name: siteName,
		description:
			"Architecture portfolio of Catalin Carp, student at the Politehnica University of Timișoara, Faculty of Architecture and Urban Planning.",
		start_url: "/",
		display: "standalone",
		background_color: "#f3efe8",
		theme_color: "#18181b",
		icons: [
			{
				src: "/icon.svg",
				sizes: "any",
				type: "image/svg+xml",
			},
		],
	};
}
