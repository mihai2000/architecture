"use client";

import emailjs from "@emailjs/browser";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Select from "@/components/ui/Select";
import {
	isSubmittingTooFast,
	isValidEmail,
	isValidMessage,
	isValidName,
	isValidSubject,
	markSubmitted,
	sanitizeText,
} from "@/lib/contactValidation";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
	company: string;
}

export default function ContactForm() {
	const { t } = useLanguage();
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		subject: "",
		message: "",
		company: "",
	});

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
		}
	}, []);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubjectChange = (value: string) => {
		setFormData((prev) => ({
			...prev,
			subject: value,
		}));
	};

	const subjectOptions = [
		{ value: "internship", label: t.contact.subjectInternship },
		{ value: "collaboration", label: t.contact.subjectCollaboration },
		{ value: "competition", label: t.contact.subjectCompetition },
		{ value: "general", label: t.contact.subjectGeneral },
	];

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);
		setError(null);
		setSuccess(false);

		try {
			// Honeypot: real users never fill this field, so a filled value
			// means a bot submitted the form. Pretend success without sending.
			if (formData.company) {
				setFormData({
					name: "",
					email: "",
					subject: "",
					message: "",
					company: "",
				});
				setSuccess(true);
				setTimeout(() => setSuccess(false), 5000);
				return;
			}

			if (isSubmittingTooFast()) {
				throw new Error(t.contactForm.errorTooFast);
			}

			if (
				!formData.name ||
				!formData.email ||
				!formData.subject ||
				!formData.message
			) {
				throw new Error(t.contactForm.errorRequired);
			}

			if (!isValidName(formData.name)) {
				throw new Error(t.contactForm.errorInvalidName);
			}

			if (!isValidEmail(formData.email)) {
				throw new Error(t.contactForm.errorInvalidEmail);
			}

			if (!isValidSubject(formData.subject)) {
				throw new Error(t.contactForm.errorInvalidSubject);
			}

			if (!isValidMessage(formData.message)) {
				throw new Error(t.contactForm.errorInvalidMessage);
			}

			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
				{
					name: sanitizeText(formData.name),
					email: sanitizeText(formData.email),
					subject: sanitizeText(formData.subject),
					message: sanitizeText(formData.message),
				},
			);

			markSubmitted();

			setFormData({
				name: "",
				email: "",
				subject: "",
				message: "",
				company: "",
			});

			setSuccess(true);

			setTimeout(() => {
				setSuccess(false);
			}, 5000);
		} catch (err) {
			console.error("Contact form error:", err);

			setError(err instanceof Error ? err.message : t.contactForm.errorGeneric);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			{/* Honeypot: hidden from real users, catches basic bots */}
			<div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
				<label htmlFor="company">Company</label>
				<input
					type="text"
					id="company"
					name="company"
					value={formData.company}
					onChange={handleChange}
					tabIndex={-1}
					autoComplete="off"
					aria-hidden="true"
				/>
			</div>

			{/* Name */}
			<div className="space-y-2">
				<label
					htmlFor="name"
					className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-zinc-500"
				>
					{t.contactForm.nameLabel} <span className="text-red-500">*</span>
				</label>

				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					disabled={loading}
					maxLength={100}
					placeholder={t.contactForm.namePlaceholder}
					className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-zinc-900 focus:shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)] disabled:opacity-50 disabled:bg-zinc-100"
				/>
			</div>

			{/* Email */}
			<div className="space-y-2">
				<label
					htmlFor="email"
					className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-zinc-500"
				>
					{t.contactForm.emailLabel} <span className="text-red-500">*</span>
				</label>

				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					disabled={loading}
					maxLength={254}
					placeholder={t.contactForm.emailPlaceholder}
					className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-zinc-900 focus:shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)] disabled:opacity-50 disabled:bg-zinc-100"
				/>
			</div>

			{/* Subject */}
			<div className="space-y-2">
				<label
					htmlFor="subject"
					className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-zinc-500"
				>
					{t.contact.subjectLabel} <span className="text-red-500">*</span>
				</label>

				<Select
					id="subject"
					value={formData.subject}
					onValueChange={handleSubjectChange}
					options={subjectOptions}
					placeholder={t.contact.subjectPlaceholder}
					ariaLabel={t.contact.subjectLabel}
					disabled={loading}
					variant="field"
				/>
			</div>

			{/* Message */}
			<div className="space-y-2">
				<label
					htmlFor="message"
					className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-zinc-500"
				>
					{t.contactForm.messageLabel} <span className="text-red-500">*</span>
				</label>

				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					disabled={loading}
					maxLength={5000}
					rows={6}
					placeholder={t.contactForm.messagePlaceholder}
					className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-zinc-900 focus:shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)] disabled:opacity-50 disabled:bg-zinc-100 resize-none"
				/>
			</div>

			{/* Error */}
			{error && (
				<div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
					{error}
				</div>
			)}

			{/* Success */}
			{success && (
				<div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
					{t.contactForm.successMessage}
				</div>
			)}

			{/* Submit */}
			<button
				type="submit"
				disabled={loading}
				className="w-full px-6 py-3 bg-zinc-900 text-white font-medium rounded-lg transition hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
			>
				{loading ? t.contactForm.submitting : t.contactForm.submit}
			</button>

			<p className="text-xs text-zinc-600">
				<span className="text-red-500">*</span> {t.contactForm.requiredNote}
			</p>
		</form>
	);
}
