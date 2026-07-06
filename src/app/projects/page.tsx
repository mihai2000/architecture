import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const projects = [
	{
		title: "M House",
		location: "Timișoara, Romania",
		type: "Residential",
	},
	{
		title: "Nord One",
		location: "Timișoara, Romania",
		type: "Housing",
	},
	{
		title: "Viennese Quarter",
		location: "Timișoara, Romania",
		type: "Urban",
	},
	{
		title: "Red Housing",
		location: "Dumbrăvița, Romania",
		type: "Residential",
	},
];

export default function ProjectsPage() {
	return (
		<div className="min-h-screen bg-[#f3efe8] text-zinc-900">
			<Navigation currentPage="projects" />
			<main className="px-6 py-12 sm:px-8 lg:px-12">
				<section id="projects" className="mt-14">
					<div className="flex items-end justify-between gap-4 border-b border-zinc-300 pb-4">
						<div>
							<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
								Selected work
							</p>
							<h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
								Recent projects
							</h2>
						</div>
					</div>

					<div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
						{projects.map((project) => (
							<article
								key={project.title}
								className="group rounded-[1.5rem] border border-zinc-300 bg-white/70 p-5 transition hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]"
							>
								<div className="h-40 rounded-[1.25rem] bg-zinc-200" />
								<p className="mt-4 text-[0.7rem] uppercase tracking-[0.35em] text-zinc-500">
									{project.type}
								</p>
								<h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
								<p className="mt-2 text-sm text-zinc-600">{project.location}</p>
							</article>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
