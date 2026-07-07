"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Select from "@/components/ui/Select";
import { Project } from "@/lib/projects";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type SortOption = "title-asc" | "title-desc" | "location-asc";

const ALL_TYPES = "All";

export default function ProjectExplorer({
	projects,
}: {
	projects: Project[];
}) {
	const { t } = useLanguage();
	const [activeType, setActiveType] = useState(ALL_TYPES);
	const [query, setQuery] = useState("");
	const [sort, setSort] = useState<SortOption>("title-asc");

	const sortOptions: { value: SortOption; label: string }[] = [
		{ value: "title-asc", label: t.explorer.sortOptions.titleAsc },
		{ value: "title-desc", label: t.explorer.sortOptions.titleDesc },
		{ value: "location-asc", label: t.explorer.sortOptions.locationAsc },
	];

	const types = useMemo(() => {
		const unique = Array.from(new Set(projects.map((p) => p.type))).sort();
		return [ALL_TYPES, ...unique];
	}, [projects]);

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();

		return projects
			.filter((project) => {
				const matchesType =
					activeType === ALL_TYPES || project.type === activeType;
				const matchesQuery =
					q.length === 0 ||
					project.title.toLowerCase().includes(q) ||
					project.location.toLowerCase().includes(q);

				return matchesType && matchesQuery;
			})
			.sort((a, b) => {
				if (sort === "title-asc") return a.title.localeCompare(b.title);
				if (sort === "title-desc") return b.title.localeCompare(a.title);
				return a.location.localeCompare(b.location);
			});
	}, [projects, activeType, query, sort]);

	const hasActiveFilters = activeType !== ALL_TYPES || query.trim().length > 0;

	const clearFilters = () => {
		setActiveType(ALL_TYPES);
		setQuery("");
	};

	return (
		<div>
			<div className="flex flex-wrap items-center gap-2">
				{types.map((type) => (
					<button
						key={type}
						type="button"
						onClick={() => setActiveType(type)}
						className={`rounded-full border px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.3em] transition ${
							activeType === type
								? "border-zinc-900 bg-zinc-900 text-white"
								: "border-zinc-300 text-zinc-600 hover:border-zinc-900 hover:text-zinc-900"
						}`}
					>
						{type === ALL_TYPES ? t.explorer.all : type}
					</button>
				))}
			</div>

			<div className="mt-5 flex flex-wrap items-center justify-between gap-3">
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder={t.explorer.searchPlaceholder}
					className="w-full max-w-xs rounded-full border border-zinc-300 bg-white/70 px-4 py-2 text-sm text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
				/>

				<div className="flex items-center gap-3">
					<label
						htmlFor="project-sort"
						className="text-[0.65rem] uppercase tracking-[0.3em] text-zinc-500"
					>
						{t.explorer.sortLabel}
					</label>
					<Select
						id="project-sort"
						value={sort}
						onValueChange={(value) => setSort(value as SortOption)}
						options={sortOptions}
						ariaLabel={t.explorer.sortLabel}
					/>
				</div>
			</div>

			<p className="mt-5 text-[0.7rem] uppercase tracking-[0.3em] text-zinc-500">
				{t.explorer.resultsCount(filtered.length, projects.length)}
			</p>

			{filtered.length > 0 ? (
				<div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
					{filtered.map((project) => (
						<ProjectCard key={project.slug} project={project} />
					))}
				</div>
			) : (
				<div className="mt-10 rounded-[1.5rem] border border-dashed border-zinc-300 p-10 text-center">
					<p className="text-sm text-zinc-600">{t.explorer.noResults}</p>
					{hasActiveFilters && (
						<button
							type="button"
							onClick={clearFilters}
							className="mt-4 text-[0.7rem] uppercase tracking-[0.3em] text-zinc-700 underline underline-offset-4 hover:text-black"
						>
							{t.explorer.clearFilters}
						</button>
					)}
				</div>
			)}
		</div>
	);
}
