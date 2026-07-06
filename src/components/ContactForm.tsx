// "use client";

// import emailjs from "@emailjs/browser";
// import firebaseApp from "@/lib/firebase";
// import {
// 	addDoc,
// 	collection,
// 	getFirestore,
// 	serverTimestamp,
// } from "firebase/firestore";
// import { ChangeEvent, FormEvent, useEffect, useState } from "react";

// interface FormData {
// 	name: string;
// 	email: string;
// 	subject: string;
// 	message: string;
// }

// export default function ContactForm() {
// 	const [formData, setFormData] = useState<FormData>({
// 		name: "",
// 		email: "",
// 		subject: "",
// 		message: "",
// 	});

// 	const [loading, setLoading] = useState(false);
// 	const [error, setError] = useState<string | null>(null);
// 	const [success, setSuccess] = useState(false);

// 	// Initialize EmailJS once on component mount
// 	useEffect(() => {
// 		if (typeof window !== "undefined") {
// 			emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
// 		}
// 	}, []);

// 	const handleChange = (
// 		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
// 	) => {
// 		const { name, value } = e.target;
// 		setFormData((prev) => ({
// 			...prev,
// 			[name]: value,
// 		}));
// 	};

// 	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		setLoading(true);
// 		setError(null);
// 		setSuccess(false);

// 		try {
// 			// Validate form data
// 			if (!formData.name || !formData.email || !formData.message) {
// 				throw new Error("Please fill in all required fields");
// 			}

// 			// Basic email validation
// 			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 			if (!emailRegex.test(formData.email)) {
// 				throw new Error("Please enter a valid email address");
// 			}

// 			console.log("Form validation passed, saving to Firestore...");

// 			// Initialize Firestore
// 			const db = getFirestore(firebaseApp);
// 			const contactsCollection = collection(db, "contacts");

// 			// Try to save to Firestore, but don't block the form if it fails
// 			try {
// 				console.log("Adding to Firestore with data:", {
// 					name: formData.name,
// 					email: formData.email,
// 					subject: formData.subject,
// 					message: formData.message,
// 				});

// 				// Firestore with longer timeout (15 seconds - first writes can be slow)
// 				const firestorePromise = addDoc(contactsCollection, {
// 					...formData,
// 					timestamp: serverTimestamp(),
// 					read: false,
// 				});

// 				const firestoreTimeout = new Promise<void>((_, reject) => {
// 					const timer = setTimeout(() => {
// 						console.warn(
// 							"⚠️ Firestore timeout - continuing without database save",
// 						);
// 						reject(new Error("Firestore timeout"));
// 					}, 15000);

// 					// Clear timeout if promise completes first
// 					firestorePromise.then(() => clearTimeout(timer));
// 				});

// 				await Promise.race([firestorePromise, firestoreTimeout]);
// 				console.log("✅ Firestore saved successfully!");
// 			} catch (firestoreError) {
// 				console.warn(
// 					"⚠️ Firestore save failed, but continuing with email:",
// 					firestoreError,
// 				);
// 				// Continue anyway - email is the priority
// 			}

// 			console.log("Now sending email...");

// 			// Send email via EmailJS
// 			const emailData = {
// 				name: formData.name,
// 				email: formData.email,
// 				subject: formData.subject,
// 				message: formData.message,
// 			};

// 			console.log("Sending email with data:", emailData);

// 			const emailPromise = emailjs.send(
// 				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
// 				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
// 				emailData,
// 			);

// 			// Timeout with proper cleanup
// 			const emailTimeout = new Promise<void>((_, reject) => {
// 				const timer = setTimeout(() => {
// 					console.error("❌ Email sending timed out after 10 seconds");
// 					reject(new Error("Email sending timed out"));
// 				}, 10000);

// 				// Clear timeout if promise completes first
// 				emailPromise.then(() => clearTimeout(timer));
// 			});

// 			await Promise.race([emailPromise, emailTimeout]);

// 			console.log("✅ Email sent successfully!");

// 			// Reset form and show success message
// 			setFormData({ name: "", email: "", subject: "", message: "" });
// 			setSuccess(true);

// 			// Clear success message after 5 seconds
// 			setTimeout(() => setSuccess(false), 5000);
// 		} catch (err) {
// 			const errorMessage =
// 				err instanceof Error ? err.message : "An error occurred";
// 			setError(errorMessage);
// 			console.error("Contact form error:", err);
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	return (
// 		<form onSubmit={handleSubmit} className="space-y-6">
// 			{/* Name Field */}
// 			<div>
// 				<label htmlFor="name" className="block text-sm font-medium mb-2">
// 					Name <span className="text-red-500">*</span>
// 				</label>
// 				<input
// 					type="text"
// 					id="name"
// 					name="name"
// 					value={formData.name}
// 					onChange={handleChange}
// 					disabled={loading}
// 					className="w-full px-4 py-3 border border-zinc-300 rounded-lg bg-white text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 disabled:opacity-50 disabled:bg-zinc-100"
// 					placeholder="Your name"
// 				/>
// 			</div>

// 			{/* Email Field */}
// 			<div>
// 				<label htmlFor="email" className="block text-sm font-medium mb-2">
// 					Email <span className="text-red-500">*</span>
// 				</label>
// 				<input
// 					type="email"
// 					id="email"
// 					name="email"
// 					value={formData.email}
// 					onChange={handleChange}
// 					disabled={loading}
// 					className="w-full px-4 py-3 border border-zinc-300 rounded-lg bg-white text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 disabled:opacity-50 disabled:bg-zinc-100"
// 					placeholder="your@email.com"
// 				/>
// 			</div>

// 			{/* Subject Field */}
// 			<div>
// 				<label htmlFor="subject" className="block text-sm font-medium mb-2">
// 					Subject
// 				</label>
// 				<input
// 					type="text"
// 					id="subject"
// 					name="subject"
// 					value={formData.subject}
// 					onChange={handleChange}
// 					disabled={loading}
// 					className="w-full px-4 py-3 border border-zinc-300 rounded-lg bg-white text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 disabled:opacity-50 disabled:bg-zinc-100"
// 					placeholder="Project inquiry"
// 				/>
// 			</div>

// 			{/* Message Field */}
// 			<div>
// 				<label htmlFor="message" className="block text-sm font-medium mb-2">
// 					Message <span className="text-red-500">*</span>
// 				</label>
// 				<textarea
// 					id="message"
// 					name="message"
// 					value={formData.message}
// 					onChange={handleChange}
// 					disabled={loading}
// 					rows={6}
// 					className="w-full px-4 py-3 border border-zinc-300 rounded-lg bg-white text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 disabled:opacity-50 disabled:bg-zinc-100 resize-none"
// 					placeholder="Tell us about your project..."
// 				/>
// 			</div>

// 			{/* Error Message */}
// 			{error && (
// 				<div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
// 					{error}
// 				</div>
// 			)}

// 			{/* Success Message */}
// 			{success && (
// 				<div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
// 					Thank you for your message. We&apos;ll get back to you soon!
// 				</div>
// 			)}

// 			{/* Submit Button */}
// 			<button
// 				type="submit"
// 				disabled={loading}
// 				className="w-full px-6 py-3 bg-zinc-900 text-white font-medium rounded-lg transition hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
// 			>
// 				{loading ? "Sending..." : "Send Message"}
// 			</button>

// 			<p className="text-xs text-zinc-600">
// 				<span className="text-red-500">*</span> Required fields
// 			</p>
// 		</form>
// 	);
// }
"use client";

import emailjs from "@emailjs/browser";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

// Uncomment these if you want to save messages to Firestore later
// import firebaseApp from "@/lib/firebase";
// import {
// 	addDoc,
// 	collection,
// 	getFirestore,
// 	serverTimestamp,
// } from "firebase/firestore";

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export default function ContactForm() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);

	// Initialize EmailJS once on component mount
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
			// Validate required fields
			if (!formData.name || !formData.email || !formData.message) {
				throw new Error("Please fill in all required fields");
			}

			// Validate email
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

			if (!emailRegex.test(formData.email)) {
				throw new Error("Please enter a valid email address");
			}

			console.log("Form validation passed.");

			// ==================================================
			// OPTIONAL: Save contact message to Firestore
			// Uncomment the imports at the top and this block
			// if you want to store contact submissions.
			// ==================================================

			/*
			const db = getFirestore(firebaseApp);
			const contactsCollection = collection(db, "contacts");

			await addDoc(contactsCollection, {
				...formData,
				timestamp: serverTimestamp(),
				read: false,
			});
			*/

			console.log("Sending email...");

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

			console.log("✅ Email sent successfully!");

			// Reset form
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
				err instanceof Error ? err.message : "An unexpected error occurred.",
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
					Name <span className="text-red-500">*</span>
				</label>

				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					disabled={loading}
					placeholder="Your name"
					className="w-full px-4 py-3 border border-zinc-300 rounded-lg bg-white text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 disabled:opacity-50 disabled:bg-zinc-100"
				/>
			</div>

			{/* Email */}
			<div>
				<label htmlFor="email" className="block text-sm font-medium mb-2">
					Email <span className="text-red-500">*</span>
				</label>

				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					disabled={loading}
					placeholder="your@email.com"
					className="w-full px-4 py-3 border border-zinc-300 rounded-lg bg-white text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 disabled:opacity-50 disabled:bg-zinc-100"
				/>
			</div>

			{/* Subject */}
			<div>
				<label htmlFor="subject" className="block text-sm font-medium mb-2">
					Subject
				</label>

				<input
					type="text"
					id="subject"
					name="subject"
					value={formData.subject}
					onChange={handleChange}
					disabled={loading}
					placeholder="Project inquiry"
					className="w-full px-4 py-3 border border-zinc-300 rounded-lg bg-white text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 disabled:opacity-50 disabled:bg-zinc-100"
				/>
			</div>

			{/* Message */}
			<div>
				<label htmlFor="message" className="block text-sm font-medium mb-2">
					Message <span className="text-red-500">*</span>
				</label>

				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					disabled={loading}
					rows={6}
					placeholder="Tell us about your project..."
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
					Thank you for your message. We&apos;ll get back to you soon!
				</div>
			)}

			{/* Submit */}
			<button
				type="submit"
				disabled={loading}
				className="w-full px-6 py-3 bg-zinc-900 text-white font-medium rounded-lg transition hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
			>
				{loading ? "Sending..." : "Send Message"}
			</button>

			<p className="text-xs text-zinc-600">
				<span className="text-red-500">*</span> Required fields
			</p>
		</form>
	);
}
