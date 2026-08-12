import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";

export default function SiteLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-zinc-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
			>
				Skip to content
			</a>
			<Navigation />
			<main
				id="main-content"
				tabIndex={-1}
				className="flex-1 px-6 py-8 outline-none sm:px-8 sm:py-10 lg:px-12 lg:py-10"
			>
				<PageTransition>{children}</PageTransition>
			</main>
			<Footer />
		</>
	);
}
