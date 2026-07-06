import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function ContactPage() {
	return (
		<div className="min-h-screen bg-[#f3efe8] text-zinc-900">
			{/* Header */}
			<Navigation currentPage="contact" />

			{/* Main Content */}
			<main className="px-6 py-12 sm:px-8 lg:px-12">
				<div className="mx-auto max-w-2xl">
					{/* Page Title */}
					<div className="mb-12">
						<h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">
							Get in Touch
						</h1>
						<p className="text-zinc-700 text-lg">
							We&apos;d love to hear about your next project. Send us a message
							and we&apos;ll respond as soon as possible.
						</p>
					</div>

					{/* Contact Info */}
					<div className="mb-12 grid gap-8 sm:grid-cols-2">
						<div>
							<h3 className="text-sm font-semibold uppercase tracking-[0.2em] mb-2">
								Email
							</h3>
							<a
								href="mailto:catalincarp12345@gmail.com"
								className="text-zinc-700 transition hover:text-black"
							>
								catalincarp12345@gmail.com
							</a>
						</div>
						<div>
							<h3 className="text-sm font-semibold uppercase tracking-[0.2em] mb-2">
								Phone
							</h3>
							<a
								href="tel:+40256123456"
								className="text-zinc-700 transition hover:text-black"
							>
								+40 (256) 123-456
							</a>
						</div>
						<div>
							<h3 className="text-sm font-semibold uppercase tracking-[0.2em] mb-2">
								Location
							</h3>
							<p className="text-zinc-700">
								Timișoara
								<br />
								Romania
							</p>
						</div>
						<div>
							<h3 className="text-sm font-semibold uppercase tracking-[0.2em] mb-2">
								Hours
							</h3>
							<p className="text-zinc-700">
								Mon - Fri: 9:00 - 18:00
								<br />
								Closed on weekends
							</p>
						</div>
					</div>

					{/* Form Container */}
					<div className="rounded-[2rem] border border-zinc-300 bg-white/70 p-8 sm:p-10 backdrop-blur-sm">
						<ContactForm />
					</div>
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
}
