"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Dictionary, Locale, dictionaries } from "./translations";

const STORAGE_KEY = "language";

type LanguageContextValue = {
	locale: Locale;
	setLocale: (locale: Locale) => void;
	t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [locale, setLocaleState] = useState<Locale>("en");

	useEffect(() => {
		const stored = window.localStorage.getItem(STORAGE_KEY);

		if (stored === "en" || stored === "ro") {
			// Restoring a persisted preference from an external system (localStorage)
			// once it's available on mount — SSR/first paint always start from "en".
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setLocaleState(stored);
		}
	}, []);

	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);

	const setLocale = (next: Locale) => {
		setLocaleState(next);
		window.localStorage.setItem(STORAGE_KEY, next);
	};

	return (
		<LanguageContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);

	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}

	return context;
}
