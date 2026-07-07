"use client";

import emailjs from "@emailjs/browser";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export default function ContactForm() {
	const { t } = useLanguage();
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		subject: "",
		message: "",
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

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);
		setError(null);
		setSuccess(false);

		try {
			if (!formData.name || !formData.email || !formData.message) {
				throw new Error(t.contactForm.errorRequired);
			}

			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

			if (!emailRegex.test(formData.email)) {
				throw new Error(t.contactForm.errorInvalidEmail);
			}

			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
				{
					name: formData.name,
					email: formData.email,
					subject: formData.subject,
					message: formData.message,
				},
			);

			setFormData({
				name: "",
				email: "",
				subject: "",
				message: "",
			});

			setSuccess(true);

			setTimeout(() => {
				setSuccess(false);
			}, 5000);
		} catch (err) {
			console.error("Contact form error:", err);

			setError(
				err instanceof Error ? err.message : t.contactForm.errorGeneric,
			);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			{/* Name */}
			<div>
				<label htmlFor="name" className="block text-sm font-medium mb-2">
					{t.contactForm.nameLabel} <span className="text-red-500">*</span>
				</label>

				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					disabled={loading}
					placeholder={t.contactForm.namePlaceholder}
					className="w-full px-4 py-3 border border-zinc-300 rounded-lg bg-white text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 disabled:opacity-50 disabled:bg-zinc-100"
				/>
			</div>

			{/* Email */}
			<div>
				<label htmlFor="email" className="block text-sm font-medium mb-2">
					{t.contactForm.emailLabel} <span className="text-red-500">*</span>
				</label>

				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					disabled={loading}
					placeholder={t.contactForm.emailPlaceholder}
					className="w-full px-4 py-3 border border-zinc-300 rounded-lg bg-white text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 disabled:opacity-50 disabled:bg-zinc-100"
				/>
			</div>

			{/* Subject */}
			<div>
				<label htmlFor="subject" className="block text-sm font-medium mb-2">
					{t.contactForm.subjectLabel}
				</label>

				<input
					type="text"
					id="subject"
					name="subject"
					value={formData.subject}
					onChange={handleChange}
					disabled={loading}
					placeholder={t.contactForm.subjectPlaceholder}
					className="w-full px-4 py-3 border border-zinc-300 rounded-lg bg-white text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 disabled:opacity-50 disabled:bg-zinc-100"
				/>
			</div>

			{/* Message */}
			<div>
				<label htmlFor="message" className="block text-sm font-medium mb-2">
					{t.contactForm.messageLabel} <span className="text-red-500">*</span>
				</label>

				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					disabled={loading}
					rows={6}
					placeholder={t.contactForm.messagePlaceholder}
					className="w-full px-4 py-3 border border-zinc-300 rounded-lg bg-white text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 disabled:opacity-50 disabled:bg-zinc-100 resize-none"
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
