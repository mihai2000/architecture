"use client";

import {
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
} from "@/components/icons/SocialIcons";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const socialLinks = [
	{ key: "facebook" as const, href: "https://www.facebook.com/catalin.carp.948", Icon: FacebookIcon },
	{ key: "instagram" as const, href: "https://www.instagram.com/katalin_k_/", Icon: InstagramIcon },
	{ key: "linkedin" as const, href: "https://www.linkedin.com/", Icon: LinkedinIcon },
];

export default function Footer() {
	const { t } = useLanguage();

	return (
		<footer className="border-t border-zinc-300 px-6 py-8 sm:px-8 lg:px-12 mt-20">
			<div className="mx-auto flex max-w-5xl flex-col items-center gap-4">
				<div className="flex gap-3">
					{socialLinks.map(({ key, href, Icon }) => (
						<a
							key={key}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={t.footer.social[key]}
							className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition hover:border-zinc-900 hover:text-zinc-900"
						>
							<Icon />
						</a>
					))}
				</div>
				<p className="text-center text-xs text-zinc-600">
					&copy; {new Date().getFullYear()} Catalin Carp Studio. {t.footer.rights}
				</p>
			</div>
		</footer>
	);
}
