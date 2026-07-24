import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<Link
			href={`/projects/${project.slug}`}
			className="group flex h-full w-full flex-col rounded-[1.5rem] border border-zinc-300 bg-white/70 p-5 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_35px_90px_-30px_rgba(0,0,0,0.3)] hover:ring-1 hover:ring-inset hover:ring-amber-600/30"
		>
			<div className="relative isolate overflow-hidden rounded-[1.25rem] bg-zinc-200">
				{project.imageWidth && project.imageHeight ? (
					<Image
						src={project.image}
						alt={project.imageAlt}
						width={project.imageWidth}
						height={project.imageHeight}
						sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
						className="h-auto w-full transform-gpu rounded-[1.25rem] transition-transform duration-700 ease-out group-hover:scale-110"
					/>
				) : (
					<div className="relative h-40">
						<Image
							src={project.image}
							alt={project.imageAlt}
							fill
							sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
							className="transform-gpu rounded-[1.25rem] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
						/>
					</div>
				)}
				<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
				<span className="pointer-events-none absolute bottom-4 left-4 hidden translate-y-2 text-[0.65rem] uppercase tracking-[0.3em] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:block">
					View project
				</span>
			</div>
			<div className="mt-4 flex flex-1 items-end justify-between gap-3">
				<div className="flex flex-col">
					<h3 className="text-base font-semibold leading-snug line-clamp-2 sm:text-lg lg:text-xl">
						{project.title}
					</h3>

					<p className="mt-2 text-sm text-zinc-600">{project.location}</p>
				</div>
				<span className="text-lg text-zinc-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
					→
				</span>
			</div>
		</Link>
	);
}
