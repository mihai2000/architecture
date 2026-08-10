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
			<Navigation />
			<main className="flex-1 px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-10">
				<PageTransition>{children}</PageTransition>
			</main>
			<Footer />
		</>
	);
}
