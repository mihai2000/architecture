export type Locale = "en" | "ro";

export const locales: Locale[] = ["en", "ro"];

export type Dictionary = {
	nav: {
		projects: string;
		about: string;
		contact: string;
		menu: string;
	};
	footer: {
		rights: string;
		social: {
			facebook: string;
			instagram: string;
			linkedin: string;
		};
	};
	home: {
		eyebrow: string;
		heading: string;
		lead: string;
		featuredLabel: string;
		viewProject: string;
		selectedWork: string;
		recentProjects: string;
		viewProjects: string;
		aboutLabel: string;
		aboutHeading: string;
		aboutText: string;
		contactLabel: string;
		contactHeading: string;
		contactText: string;
		getInTouch: string;
		skillsHeading: string;
	};
	projects: {
		eyebrow: string;
		heading: string;
	};
	projectDetail: {
		back: string;
		yearLabel: string;
		areaLabel: string;
		locationLabel: string;
		typeLabel: string;
		galleryHeading: string;
		categories: {
			photo: string;
			sketch: string;
			plan: string;
		};
		filterLabel: string;
		filterAll: string;
		closeLightbox: string;
		pdfCtaTitle: string;
		pdfCtaSubtitle: string;
	};
	explorer: {
		all: string;
		searchPlaceholder: string;
		sortLabel: string;
		sortOptions: {
			titleAsc: string;
			titleDesc: string;
			locationAsc: string;
		};
		resultsCount: (shown: number, total: number) => string;
		noResults: string;
		clearFilters: string;
	};
	carousel: {
		previous: string;
		next: string;
		goToSlide: (index: number) => string;
	};
	about: {
		eyebrow: string;
		heading: string;
		intro: string;
		body: string;
		photoPlaceholder: string;
		educationLabel: string;
		institution: string;
		faculty: string;
		educationText: string;
		focusLabel: string;
		focusAreas: string[];
		approachLabel: string;
		approachHeading: string;
		approachText: string;
		getInTouch: string;
	};
	contact: {
		heading: string;
		lead: string;
		emailLabel: string;
		phoneLabel: string;
		locationLabel: string;
		locationValue: string[];
		hoursLabel: string;
		hoursValue: string[];
	};
	contactForm: {
		nameLabel: string;
		namePlaceholder: string;
		emailLabel: string;
		emailPlaceholder: string;
		subjectLabel: string;
		subjectPlaceholder: string;
		messageLabel: string;
		messagePlaceholder: string;
		requiredNote: string;
		submit: string;
		submitting: string;
		successMessage: string;
		errorRequired: string;
		errorInvalidEmail: string;
		errorGeneric: string;
	};
	notFound: {
		eyebrow: string;
		heading: string;
		message: string;
		backHome: string;
	};
};

export const dictionaries: Record<Locale, Dictionary> = {
	en: {
		nav: {
			projects: "Projects",
			about: "About",
			contact: "Contact",
			menu: "Menu",
		},
		footer: {
			rights: "All rights reserved.",
			social: {
				facebook: "Facebook",
				instagram: "Instagram",
				linkedin: "LinkedIn",
			},
		},
		home: {
			eyebrow: "Architecture / Interior / Urban",
			heading: "Minimal spaces with powerful presence.",
			lead: "I'm an architecture student designing calm, contemporary spaces shaped by context, light, and materiality — work that stays timeless, precise, and quietly bold.",
			featuredLabel: "Featured project",
			viewProject: "View project",
			selectedWork: "Selected work",
			recentProjects: "Recent projects",
			viewProjects: "View Projects",
			aboutLabel: "About",
			aboutHeading: "Quietly rigorous, deeply human.",
			aboutText:
				"My projects range from student housing to urban interventions, developed throughout my architecture studies. Each one is grounded in clarity, proportion, and a careful dialogue with its surroundings.",
			contactLabel: "Contact",
			contactHeading: "Let's build something lasting.",
			contactText:
				"Open to feedback, collaborations, and conversations about architecture and future spaces.",
			getInTouch: "Get in touch",
			skillsHeading: "Tools & software",
		},
		projects: {
			eyebrow: "Selected work",
			heading: "Recent projects",
		},
		projectDetail: {
			back: "Back to projects",
			yearLabel: "Year",
			areaLabel: "Area",
			locationLabel: "Location",
			typeLabel: "Type",
			galleryHeading: "Gallery",
			filterLabel: "Filter",
			filterAll: "All",
			closeLightbox: "Close",
			pdfCtaTitle: "Full project booklet",
			pdfCtaSubtitle: "Open the complete PDF presentation",
			categories: {
				photo: "Photo",
				sketch: "Sketch",
				plan: "Plan",
			},
		},
		explorer: {
			all: "All",
			searchPlaceholder: "Search by title or location…",
			sortLabel: "Sort",
			sortOptions: {
				titleAsc: "Title, A–Z",
				titleDesc: "Title, Z–A",
				locationAsc: "Location, A–Z",
			},
			resultsCount: (shown, total) => `${shown} of ${total} projects`,
			noResults: "No projects match your filters.",
			clearFilters: "Clear filters",
		},
		carousel: {
			previous: "Previous project",
			next: "Next project",
			goToSlide: (index) => `Go to slide ${index}`,
		},
		about: {
			eyebrow: "About",
			heading: "An architecture student shaped by Timișoara's streets.",
			intro:
				"I'm a student at the Politehnica University of Timișoara, Faculty of Architecture and Urban Planning, where I've spent the past several years learning to translate context, light, and material into space.",
			body: "My work moves between academic studios and independent projects — from single-family houses to urban-scale interventions — always starting from the same question: how does a building belong to its site? Outside the studio, I'm drawn to the quieter side of architecture: proportion, restraint, the way a well-placed window changes a room. This portfolio brings together a selection of studio projects, competition entries, and personal studies produced throughout my studies.",
			photoPlaceholder: "Portrait coming soon",
			educationLabel: "Education",
			institution: "Politehnica University of Timișoara",
			faculty: "Faculty of Architecture and Urban Planning",
			educationText:
				"Coursework spanning architectural design studios, urban planning, structures, and the history and theory of architecture, with a growing focus on residential and cultural typologies.",
			focusLabel: "Areas of focus",
			focusAreas: [
				"Residential",
				"Urban",
				"Interior",
				"Cultural",
				"Landscape",
				"Competitions",
			],
			approachLabel: "Approach",
			approachHeading: "Clarity before complexity.",
			approachText:
				"I believe good architecture starts with restraint — understanding a site, a program, and a budget before reaching for a gesture. Every project here is an attempt to solve a problem simply, then push that simplicity until it feels inevitable.",
			getInTouch: "Get in touch",
		},
		contact: {
			heading: "Get in Touch",
			lead: "We'd love to hear about your next project. Send us a message and we'll respond as soon as possible.",
			emailLabel: "Email",
			phoneLabel: "Phone",
			locationLabel: "Location",
			locationValue: ["Timișoara", "Romania"],
			hoursLabel: "Hours",
			hoursValue: ["Mon - Fri: 9:00 - 18:00", "Closed on weekends"],
		},
		contactForm: {
			nameLabel: "Name",
			namePlaceholder: "Your name",
			emailLabel: "Email",
			emailPlaceholder: "your@email.com",
			subjectLabel: "Subject",
			subjectPlaceholder: "Project inquiry",
			messageLabel: "Message",
			messagePlaceholder: "Tell us about your project...",
			requiredNote: "Required fields",
			submit: "Send Message",
			submitting: "Sending...",
			successMessage: "Thank you for your message. We'll get back to you soon!",
			errorRequired: "Please fill in all required fields",
			errorInvalidEmail: "Please enter a valid email address",
			errorGeneric: "An unexpected error occurred.",
		},
		notFound: {
			eyebrow: "404",
			heading: "This page didn't make it past the concept stage.",
			message:
				"The page you're looking for doesn't exist — it may have been moved, renamed, or never built in the first place.",
			backHome: "Back to home",
		},
	},
	ro: {
		nav: {
			projects: "Proiecte",
			about: "Despre",
			contact: "Contact",
			menu: "Meniu",
		},
		footer: {
			rights: "Toate drepturile rezervate.",
			social: {
				facebook: "Facebook",
				instagram: "Instagram",
				linkedin: "LinkedIn",
			},
		},
		home: {
			eyebrow: "Arhitectură / Interior / Urban",
			heading: "Spații minimale, cu o prezență puternică.",
			lead: "Sunt student la arhitectură și proiectez spații calme și contemporane, modelate de context, lumină și materialitate — lucrări care rămân atemporale, precise și discret îndrăznețe.",
			featuredLabel: "Proiect recomandat",
			viewProject: "Vezi proiectul",
			selectedWork: "Lucrări selectate",
			recentProjects: "Proiecte recente",
			viewProjects: "Vezi proiectele",
			aboutLabel: "Despre",
			aboutHeading: "Riguroși în liniște, profund umani.",
			aboutText:
				"Proiectele mele variază de la locuințe pentru studenți la intervenții urbane, dezvoltate pe parcursul studiilor mele de arhitectură. Fiecare pornește de la claritate, proporție și un dialog atent cu împrejurimile sale.",
			contactLabel: "Contact",
			contactHeading: "Hai să construim ceva durabil.",
			contactText:
				"Sunt deschis la feedback, colaborări și discuții despre arhitectură și spații viitoare.",
			getInTouch: "Ia legătura",
			skillsHeading: "Unelte și software",
		},
		projects: {
			eyebrow: "Lucrări selectate",
			heading: "Proiecte recente",
		},
		projectDetail: {
			back: "Înapoi la proiecte",
			yearLabel: "An",
			areaLabel: "Suprafață",
			locationLabel: "Locație",
			typeLabel: "Tip",
			galleryHeading: "Galerie",
			filterLabel: "Filtrează",
			filterAll: "Toate",
			closeLightbox: "Închide",
			pdfCtaTitle: "Broșura completă a proiectului",
			pdfCtaSubtitle: "Deschide prezentarea PDF completă",
			categories: {
				photo: "Foto",
				sketch: "Schiță",
				plan: "Plan",
			},
		},
		explorer: {
			all: "Toate",
			searchPlaceholder: "Caută după titlu sau locație…",
			sortLabel: "Sortează",
			sortOptions: {
				titleAsc: "Titlu, A–Z",
				titleDesc: "Titlu, Z–A",
				locationAsc: "Locație, A–Z",
			},
			resultsCount: (shown, total) => `${shown} din ${total} proiecte`,
			noResults: "Niciun proiect nu corespunde filtrelor tale.",
			clearFilters: "Șterge filtrele",
		},
		carousel: {
			previous: "Proiectul anterior",
			next: "Proiectul următor",
			goToSlide: (index) => `Mergi la slide-ul ${index}`,
		},
		about: {
			eyebrow: "Despre",
			heading: "Un student la arhitectură modelat de străzile Timișoarei.",
			intro:
				"Sunt student la Universitatea Politehnica Timișoara, Facultatea de Arhitectură și Urbanism, unde am petrecut ultimii ani învățând să transform contextul, lumina și materialul în spațiu.",
			body: "Proiectele mele se mișcă între atelierele de facultate și proiecte independente — de la locuințe unifamiliale până la intervenții la scară urbană — pornind mereu de la aceeași întrebare: cum aparține o clădire locului ei? În afara atelierului, mă atrage latura mai discretă a arhitecturii: proporția, reținerea, modul în care o fereastră bine plasată schimbă o cameră întreagă. Acest portofoliu adună o selecție de proiecte de atelier, concursuri de studenți și studii personale realizate pe parcursul facultății.",
			photoPlaceholder: "Portret în curând",
			educationLabel: "Educație",
			institution: "Universitatea Politehnica Timișoara",
			faculty: "Facultatea de Arhitectură și Urbanism",
			educationText:
				"Parcurs academic ce include ateliere de proiectare arhitecturală, urbanism, structuri, precum și istoria și teoria arhitecturii, cu un interes tot mai conturat pentru tipologiile rezidențiale și culturale.",
			focusLabel: "Domenii de interes",
			focusAreas: [
				"Rezidențial",
				"Urban",
				"Interior",
				"Cultural",
				"Peisagistică",
				"Concursuri",
			],
			approachLabel: "Abordare",
			approachHeading: "Claritate înainte de complexitate.",
			approachText:
				"Cred că o arhitectură bună începe cu reținere — înțelegerea unui amplasament, a unei teme și a unui buget înainte de a recurge la un gest. Fiecare proiect de aici este o încercare de a rezolva o problemă simplu, apoi de a împinge acea simplitate până când pare inevitabilă.",
			getInTouch: "Ia legătura",
		},
		contact: {
			heading: "Ia legătura",
			lead: "Ne-ar plăcea să aflăm despre proiectul tău. Trimite-ne un mesaj și îți vom răspunde cât mai curând posibil.",
			emailLabel: "Email",
			phoneLabel: "Telefon",
			locationLabel: "Locație",
			locationValue: ["Timișoara", "România"],
			hoursLabel: "Program",
			hoursValue: ["Luni - Vineri: 9:00 - 18:00", "Închis în weekend"],
		},
		contactForm: {
			nameLabel: "Nume",
			namePlaceholder: "Numele tău",
			emailLabel: "Email",
			emailPlaceholder: "emailul.tau@example.com",
			subjectLabel: "Subiect",
			subjectPlaceholder: "Solicitare proiect",
			messageLabel: "Mesaj",
			messagePlaceholder: "Spune-ne despre proiectul tău...",
			requiredNote: "Câmpuri obligatorii",
			submit: "Trimite mesajul",
			submitting: "Se trimite...",
			successMessage: "Îți mulțumim pentru mesaj. Îți vom răspunde în curând!",
			errorRequired: "Te rugăm să completezi toate câmpurile obligatorii",
			errorInvalidEmail: "Te rugăm să introduci o adresă de email validă",
			errorGeneric: "A apărut o eroare neașteptată.",
		},
		notFound: {
			eyebrow: "404",
			heading: "Această pagină nu a trecut de faza de concept.",
			message:
				"Pagina pe care o cauți nu există — poate a fost mutată, redenumită sau pur și simplu nu a fost construită niciodată.",
			backHome: "Înapoi la pagina principală",
		},
	},
};
