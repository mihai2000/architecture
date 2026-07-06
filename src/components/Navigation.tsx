import Link from "next/link";

interface NavigationProps {
	currentPage?: "home" | "contact" | "projects" | "about";
}

export default function Navigation({ currentPage = "home" }: NavigationProps) {
	return (
		<header className="flex flex-wrap items-center justify-between border-b border-zinc-300 px-6 py-5 sm:px-8 lg:px-12">
			<Link
				href="/"
				className="text-[0.7rem] font-semibold uppercase tracking-[0.35em]"
			>
				Catalin Carp Studio
			</Link>
			<nav className="flex flex-wrap gap-4 text-[0.7rem] uppercase tracking-[0.3em] text-zinc-700">
				<Link
					href="/projects"
					className={`transition hover:text-black ${
						currentPage === "projects" ? "font-semibold" : ""
					}`}
				>
					Projects
				</Link>
				<Link
					href="/about"
					className={`transition hover:text-black ${
						currentPage === "about" ? "font-semibold" : ""
					}`}
				>
					About
				</Link>
				<Link
					href="/contact"
					className={`transition hover:text-black ${
						currentPage === "contact" ? "font-semibold" : ""
					}`}
				>
					Contact
				</Link>
			</nav>
		</header>
	);
}
