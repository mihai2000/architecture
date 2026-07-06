import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-[#f3efe8] text-zinc-900">
			<Navigation currentPage="about" />
			<main className="px-6 py-12 sm:px-8 lg:px-12">
				<div className="mx-auto max-w-2xl">
					<p>Welcome to the About page!</p>
				</div>
			</main>
			<Footer />
		</div>
	);
}
