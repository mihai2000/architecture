import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const title = "Catalin Carp Studio | Architecture Portfolio";
const description =
	"Architecture portfolio of Catalin Carp, student at the Politehnica University of Timișoara, Faculty of Architecture and Urban Planning.";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title,
	description,
	icons: {
		icon: [{ url: "/logo/favicon.ico", rel: "shortcut icon" }],
		shortcut: ["/logo/favicon.ico"],
		apple: [{ url: "/logo/favicon.ico" }],
	},
	openGraph: {
		title,
		description,
		siteName: "Catalin Carp Studio",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			data-scroll-behavior="smooth"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col bg-[#f3efe8] text-zinc-900">
				<LanguageProvider>{children}</LanguageProvider>
			</body>
		</html>
	);
}
