export const siteUrl = "https://catalincarp-studio.web.app";
export const siteName = "Catalin Carp Studio";

export function jsonLd(data: unknown) {
	return JSON.stringify(data).replace(/</g, "\\u003c");
}
