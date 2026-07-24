// type LanguageSkillProps = {
// 	label: string;
// 	level: number;
// };

// export function LanguageSkill({ label, level }: LanguageSkillProps) {
// 	return (
// 		<div className="space-y-2">
// 			<div className="flex justify-between text-sm">
// 				<span>{label}</span>
// 				<span className="text-zinc-500">{level}%</span>
// 			</div>

// 			<div className="h-2 overflow-hidden rounded-full bg-zinc-200">
// 				<div
// 					className="h-full rounded-full bg-zinc-800 transition-all duration-300"
// 					style={{ width: `${level}%` }}
// 				/>
// 			</div>
// 		</div>
// 	);
// }
type LanguageSkillProps = {
	label: string;
	level: 1 | 2 | 3 | 4 | 5;
};

export function LanguageSkill({ label, level }: LanguageSkillProps) {
	return (
		<div className="flex items-center gap-6">
			<span className="min-w-[180px]">{label}</span>

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
