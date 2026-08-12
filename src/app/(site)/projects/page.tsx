import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import ProjectsContent from "@/components/ProjectsContent";

const title = "Projects | Catalin Carp Studio";
const description =
	"Selected architecture projects and case studies by Catalin Carp, including cultural, residential, and urban design work.";

export const metadata: Metadata = {
	title,
	description,
	alternates: { canonical: `${siteUrl}/projects/` },
	openGraph: { title, description },
	twitter: { title, description },
};

export default function Page() {
	return <ProjectsContent />;
}
