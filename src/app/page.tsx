import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Link from "next/link";

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

export default function Home() {
	return (
		<div className="min-h-screen bg-[#f3efe8] text-zinc-900">
			<Navigation currentPage="home" />

			<main className="px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
				<section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
					<div className="flex flex-col justify-between rounded-[2rem] border border-zinc-300 bg-white/70 p-8 sm:p-10">
						<div>
							<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
								Architecture / Interior / Urban
							</p>
							<h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[0.95] sm:text-5xl lg:text-6xl">
								Minimal spaces with powerful presence.
							</h1>
						</div>
						<p className="mt-8 max-w-xl text-base leading-8 text-zinc-700 sm:text-lg">
							We design calm, contemporary environments shaped by context,
							light, and materiality. The result is architecture that feels
							timeless, precise, and quietly bold.
						</p>
					</div>

					<div className="rounded-[2rem] border border-zinc-300 bg-zinc-900 p-8 text-zinc-100 sm:p-10">
						<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-400">
							Featured project
						</p>
						<div className="mt-6 h-56 rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.2),_transparent_55%),linear-gradient(135deg,_#4a4a4a_0%,_#111111_100%)]" />
						<div className="mt-6 flex items-end justify-between gap-4">
							<div>
								<p className="text-xl font-semibold">Event House</p>
								<p className="mt-1 text-sm text-zinc-400">
									Cluj-Napoca, Romania
								</p>
							</div>
							<a
								href="#projects"
								className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-300 transition hover:text-white"
							>
								View project
							</a>
						</div>
					</div>
				</section>

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
						<Link
							href="/contact"
							className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-700 transition hover:text-black"
						>
							Start a project
						</Link>
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

				<section
					id="about"
					className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]"
				>
					<div className="rounded-[2rem] border border-zinc-300 bg-white/70 p-8 sm:p-10">
						<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-600">
							About
						</p>
						<h2 className="mt-4 text-3xl font-semibold leading-tight">
							Quietly rigorous, deeply human.
						</h2>
						<p className="mt-5 text-base leading-8 text-zinc-700">
							Our work ranges from private residences to cultural spaces and
							urban interventions. Every project is grounded in clarity,
							proportion, and a careful dialogue with its surroundings.
						</p>
					</div>

					<div className="rounded-[2rem] border border-zinc-300 bg-zinc-900 p-8 text-zinc-100 sm:p-10">
						<p className="text-[0.7rem] uppercase tracking-[0.35em] text-zinc-400">
							Contact
						</p>
						<h2 className="mt-4 text-3xl font-semibold">
							Let&apos;s build something lasting.
						</h2>
						<p className="mt-5 max-w-xl text-base leading-8 text-zinc-300">
							We welcome commissions, collaborations, and conversations about
							future spaces.
						</p>
						<Link
							href="/contact"
							className="mt-8 inline-flex text-[0.7rem] uppercase tracking-[0.35em] text-zinc-100 transition hover:text-white"
						>
							Get in touch
						</Link>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
