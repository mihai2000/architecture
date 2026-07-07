"use client";

import * as SelectPrimitive from "@radix-ui/react-select";

type SelectOption = {
	value: string;
	label: string;
};

function ChevronIcon() {
	return (
		<svg
			width="10"
			height="6"
			viewBox="0 0 10 6"
			fill="none"
			aria-hidden="true"
			className="shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
		>
			<path
				d="M1 1L5 5L9 1"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function CheckIcon() {
	return (
		<svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
			<path
				d="M1 4.5L4 7.5L10 1"
				stroke="currentColor"
				strokeWidth="1.6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default function Select({
	id,
	value,
	onValueChange,
	options,
	ariaLabel,
}: {
	id?: string;
	value: string;
	onValueChange: (value: string) => void;
	options: SelectOption[];
	ariaLabel?: string;
}) {
	return (
		<SelectPrimitive.Root value={value} onValueChange={onValueChange}>
			<SelectPrimitive.Trigger
				id={id}
				aria-label={ariaLabel}
				className="group inline-flex min-w-[9.5rem] items-center justify-between gap-2 rounded-full border border-zinc-300 bg-white/70 px-4 py-2 text-xs text-zinc-900 outline-none transition hover:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 data-[state=open]:border-zinc-900"
			>
				<SelectPrimitive.Value />
				<SelectPrimitive.Icon className="text-zinc-500 group-hover:text-zinc-900">
					<ChevronIcon />
				</SelectPrimitive.Icon>
			</SelectPrimitive.Trigger>

			<SelectPrimitive.Portal>
				<SelectPrimitive.Content
					position="popper"
					sideOffset={8}
					className="z-50 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] data-[state=open]:[animation:select-pop_140ms_ease-out]"
				>
					<SelectPrimitive.Viewport className="p-1.5">
						{options.map((option) => (
							<SelectPrimitive.Item
								key={option.value}
								value={option.value}
								className="relative flex cursor-pointer select-none items-center rounded-xl px-3 py-2 pr-8 text-sm text-zinc-700 outline-none data-[highlighted]:bg-zinc-900 data-[highlighted]:text-white"
							>
								<SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
								<SelectPrimitive.ItemIndicator className="absolute right-3 inline-flex items-center">
									<CheckIcon />
								</SelectPrimitive.ItemIndicator>
							</SelectPrimitive.Item>
						))}
					</SelectPrimitive.Viewport>
				</SelectPrimitive.Content>
			</SelectPrimitive.Portal>
		</SelectPrimitive.Root>
	);
}
