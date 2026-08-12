import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
	alternates: { canonical: siteUrl },
};

export default function Page() {
	return <HomeContent />;
}
