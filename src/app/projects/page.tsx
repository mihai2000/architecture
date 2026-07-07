"use client";

import ProjectExplorer from "@/components/ProjectExplorer";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ProjectsPage() {
	const { t } = useLanguage();

	return (
		<Reveal>
			<section id="projects">
				<div className="flex items-end justify-between gap-4 border-b border-zinc-300 pb-4">
					<div>
						<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
							{t.projects.eyebrow}
						</p>
						<h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
							{t.projects.heading}
						</h2>
					</div>
				</div>

				<div className="mt-6">
					<ProjectExplorer projects={projects} />
				</div>
			</section>
		</Reveal>
	);
}
