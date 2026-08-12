import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import ContactContent from "@/components/ContactContent";

const title = "Contact | Catalin Carp Studio";
const description =
	"Get in touch with Catalin Carp for architecture collaborations, inquiries, and portfolio requests.";

export const metadata: Metadata = {
	title,
	description,
	alternates: { canonical: `${siteUrl}/contact/` },
	openGraph: { title, description },
	twitter: { title, description },
};

export default function Page() {
	return <ContactContent />;
}
