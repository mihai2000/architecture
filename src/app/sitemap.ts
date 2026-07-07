import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: siteUrl,
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${siteUrl}/projects`,
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${siteUrl}/about`,
			changeFrequency: "yearly",
			priority: 0.5,
		},
		{
			url: `${siteUrl}/contact`,
			changeFrequency: "yearly",
			priority: 0.5,
		},
	];

	const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
		url: `${siteUrl}/projects/${project.slug}`,
		changeFrequency: "monthly",
		priority: 0.6,
	}));

	return [...staticRoutes, ...projectRoutes];
}
