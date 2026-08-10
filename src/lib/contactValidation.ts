export const CONTACT_SUBJECTS = [
	"internship",
	"collaboration",
	"competition",
	"general",
] as const;

export type ContactSubject = (typeof CONTACT_SUBJECTS)[number];

const NAME_PATTERN = /^[\p{L}\p{M}'’\- ]{2,100}$/u;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

export function isValidName(value: string): boolean {
	return NAME_PATTERN.test(value.trim());
}

export function isValidEmail(value: string): boolean {
	const trimmed = value.trim();
	return trimmed.length <= 254 && EMAIL_PATTERN.test(trimmed);
}

export function isValidSubject(value: string): value is ContactSubject {
	return (CONTACT_SUBJECTS as readonly string[]).includes(value);
}

export function isValidMessage(value: string): boolean {
	const length = value.trim().length;
	return length >= 10 && length <= 5000;
}

export function sanitizeText(value: string): string {
	return value.trim().replace(/[<>]/g, "");
}

const COOLDOWN_MS = 30_000;
const COOLDOWN_STORAGE_KEY = "contact-last-submit";

export function isSubmittingTooFast(): boolean {
	if (typeof window === "undefined") return false;

	const last = Number(window.localStorage.getItem(COOLDOWN_STORAGE_KEY));
	return Boolean(last) && Date.now() - last < COOLDOWN_MS;
}

export function markSubmitted(): void {
	if (typeof window === "undefined") return;

	window.localStorage.setItem(COOLDOWN_STORAGE_KEY, String(Date.now()));
}
