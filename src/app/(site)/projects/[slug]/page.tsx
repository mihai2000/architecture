import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { jsonLd, siteUrl } from "@/lib/site";
import ProjectDetail from "@/components/ProjectDetail";

export function generateStaticParams() {
	return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const project = projects.find((p) => p.slug === slug);

	if (!project) {
		return {};
	}

	const title = `${project.title.en} | Catalin Carp Studio`;
	const description = project.description.en[0];

	return {
		title,
		description,
		alternates: { canonical: `${siteUrl}/projects/${project.slug}/` },
		openGraph: { title, description },
		twitter: { title, description },
	};
}

export default async function ProjectDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const project = projects.find((p) => p.slug === slug);

	if (!project) {
		notFound();
	}

	const creativeWorkJsonLd = {
		"@context": "https://schema.org",
		"@type": "CreativeWork",
		name: project.title.en,
		description: project.description.en[0],
		locationCreated: project.location.en,
		dateCreated: String(project.year),
		image: `${siteUrl}${project.image}`,
		url: `${siteUrl}/projects/${project.slug}/`,
		creator: { "@type": "Person", name: "Catalin Carp" },
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: jsonLd(creativeWorkJsonLd) }}
			/>
			<ProjectDetail project={project} />
		</>
	);
}
