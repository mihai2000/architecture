export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 32 32"
			className={className}
			role="img"
			aria-label="Catalin Carp Studio"
		>
			<circle cx="16" cy="16" r="16" fill="#18181b" />
			<path d="M7 15L16 6L25 15Z" fill="#f3efe8" />
			<rect x="8" y="15" width="16" height="11" fill="#f3efe8" />
			<rect x="13" y="18" width="6" height="8" fill="#18181b" />
		</svg>
	);
}
