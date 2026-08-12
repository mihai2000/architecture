type LanguageSkillProps = {
	label: string;
	levelLabel?: string;
	level: 1 | 2 | 3 | 4 | 5;
};

export function LanguageSkill({
	label,
	levelLabel,
	level,
}: LanguageSkillProps) {
	return (
		<div className="flex flex-col gap-2 @[22rem]:flex-row @[22rem]:items-center @[22rem]:gap-4">
			<div className="flex-1">
				<span className="leading-6">{label}</span>
				<p className="text-sm text-zinc-600">{levelLabel}</p>
			</div>
			<div className="flex gap-2">
				{[1, 2, 3, 4, 5].map((dot) => (
					<div
						key={dot}
						className={`h-3 w-3 rounded-full ${
							dot <= level ? "bg-zinc-800" : "bg-zinc-300"
						}`}
					/>
				))}
			</div>
		</div>
	);
}
