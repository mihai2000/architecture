import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import AboutContent from "@/components/AboutContent";

const title = "About | Catalin Carp Studio";
const description =
	"Background, education, and design philosophy of Catalin Carp, architecture student at the Politehnica University of Timișoara.";

export const metadata: Metadata = {
	title,
	description,
	alternates: { canonical: `${siteUrl}/about/` },
	openGraph: { title, description },
	twitter: { title, description },
};

export default function Page() {
	return <AboutContent />;
}
