import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<Link
			href={`/projects/${project.slug}`}
			className="group block rounded-[1.5rem] border border-zinc-300 bg-white/70 p-5 transition hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]"
		>
			<div className="relative h-40 overflow-hidden rounded-[1.25rem] bg-zinc-200">
				<Image
					src={project.image}
					alt={project.imageAlt}
					fill
					sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
					className="object-cover transition duration-500 group-hover:scale-105"
				/>
			</div>
			<p className="mt-4 text-[0.7rem] uppercase tracking-[0.35em] text-zinc-500">
				{project.type}
			</p>
			<h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
			<p className="mt-2 text-sm text-zinc-600">{project.location}</p>
		</Link>
	);
}
