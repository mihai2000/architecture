"use client";

import ProjectExplorer from "@/components/ProjectExplorer";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ProjectsPage() {
	const { t } = useLanguage();

	return (
		<section id="projects">
			<Reveal className="border-b border-zinc-300 pb-6">
				<div>
					<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
						{t.projects.eyebrow}
					</p>
					<h2 className="mt-3 text-3xl font-semibold lg:text-4xl">
						{t.projects.heading}
					</h2>
				</div>
			</Reveal>

			<div className="mt-6">
				<ProjectExplorer projects={projects} />
			</div>
		</section>
	);
}
