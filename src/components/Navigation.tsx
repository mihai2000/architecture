"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Logo from "@/components/Logo";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function HamburgerIcon({ open }: { open: boolean }) {
	return (
		<span className="relative block h-4 w-6">
			<span
				className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${
					open ? "top-[7px] rotate-45" : "top-0 rotate-0"
				}`}
			/>
			<span
				className={`absolute left-0 top-[7px] h-0.5 w-6 rounded-full bg-current transition-opacity duration-200 ease-in-out ${
					open ? "opacity-0" : "opacity-100"
				}`}
			/>
			<span
				className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${
					open ? "top-[7px] -rotate-45" : "top-[14px] rotate-0"
				}`}
			/>
		</span>
	);
}

export default function Navigation() {
	const pathname = usePathname();
	const normalizedPathname =
		pathname === "/" ? pathname : pathname?.replace(/\/+$/, "");
	const { t } = useLanguage();
	const [mobileOpen, setMobileOpen] = useState(false);
	const [lastPathname, setLastPathname] = useState(pathname);

	if (pathname !== lastPathname) {
		setLastPathname(pathname);
		setMobileOpen(false);
	}

	const links = [
		{ href: "/projects", label: t.nav.projects },
		{ href: "/about", label: t.nav.about },
		{ href: "/contact", label: t.nav.contact },
	];

	return (
		<header className="border-b border-zinc-300 px-6 py-5 sm:px-8 lg:px-12">
			<div className="flex flex-wrap items-center justify-between gap-4">
				<Link
					href="/"
					className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.35em]"
				>
					<Logo className="h-8 w-8 shrink-0" />
					Catalin Carp Studio
				</Link>

				<div className="hidden items-center gap-4 md:flex">
					<nav className="flex flex-wrap gap-4 text-[0.7rem] uppercase tracking-[0.3em] text-zinc-700">
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`transition hover:text-black ${
									normalizedPathname === link.href ? "font-semibold" : ""
								}`}
							>
								{link.label}
							</Link>
						))}
					</nav>
					<LanguageSwitcher />
				</div>

				<button
					type="button"
					onClick={() => setMobileOpen((prev) => !prev)}
					aria-expanded={mobileOpen}
					aria-controls="mobile-menu"
					aria-label={t.nav.menu}
					className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900 md:hidden"
				>
					<HamburgerIcon open={mobileOpen} />
				</button>
			</div>

			<div
				id="mobile-menu"
				className={`grid transition-all duration-300 ease-in-out md:hidden ${
					mobileOpen
						? "mt-4 grid-rows-[1fr] opacity-100"
						: "grid-rows-[0fr] opacity-0"
				}`}
			>
				<div className="overflow-hidden">
					<nav className="flex flex-col gap-4 text-[0.7rem] uppercase tracking-[0.3em] text-zinc-700">
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`transition hover:text-black ${
									normalizedPathname === link.href ? "font-semibold" : ""
								}`}
							>
								{link.label}
							</Link>
						))}
					</nav>
					<div className="mt-5">
						<LanguageSwitcher />
					</div>
				</div>
			</div>
		</header>
	);
}
