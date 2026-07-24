export type Locale = "en" | "ro";

export const locales: Locale[] = ["en", "ro"];
type PhilosophyItem = {
	title: string;
	description: string;
};

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
		subLead: string;
		featuredLabel: string;
		viewProject: string;
		selectedWork: string;
		recentProjects: string;
		viewProjects: string;
		aboutLabel: string;
		languagesTitle: string;
		language1: string;
		language2: string;
		language3: string;
		interestsTitle: string;
		interest1: string;
		interest2: string;
		interest3: string;
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
		badge1: string;
		badge2: string;
		badge3: string;
		photoPlaceholder: string;
		currentStatusLabel: string;
		currentStatus: string;
		educationLabel: string;
		university: string;
		faculty: string;
		specialization: string;
		universityPeriod: string;
		universityDescription: string;
		highSchool: string;
		highSchoolProfile: string;
		highSchoolPeriod: string;
		academicFocusLabel: string;
		academicFocus: string[];
		primaryInterestLabel: string;

		primaryInterest: string;
		interestsLabel: string;
		interestsHeading: string;
		interests: string[];
		interestsDescription: string;

		currentInterestsLabel: string;
		currentInterests: string;

		philosophyLabel: string;

		philosophyHeading: string;

		philosophyItems: PhilosophyItem[];

		goalsLabel: string;
		goalLabel: string;
		goal: string;

		goalsHeading: string;

		goals: string[];

		cvTitle: string;

		cvSubtitle: string;
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
			heading: "Functional, clear, and thoughtfully planned spaces.",
			lead: "Architecture student at the Faculty of Architecture and Urban Planning in Timișoara, interested in architectural design, graphic representation, and the development of projects from concept to implementation.",
			subLead:
				"Eager to gain practical experience in a professional environment while developing my technical and creative skills.",
			featuredLabel: "Featured project",
			viewProject: "View project",
			selectedWork: "Selected work",
			recentProjects: "Recent projects",
			viewProjects: "View Projects",
			aboutLabel: "About",
			languagesTitle: "Languages",
			language1: "Romanian - Native",
			language2: "Russian - Advanced",
			language3: "English - (A2)",
			interestsTitle: "Activities & Interests",
			interest1: "Contemporary Architecture",
			interest2: "Architectural Photography",
			interest3: "Sketching & Drawing",
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
			heading: "Learning to turn ideas into thoughtful spaces.",
			intro:
				"I am a third-year Architecture student at the Faculty of Architecture and Urbanism, Politehnica University of Timișoara, with a strong interest in architectural design, visual representation, and developing projects from concept to implementation.",
			body: "This portfolio brings together academic and personal work completed throughout my studies, reflecting my design process and my interest in residential, cultural, and urban architecture.",
			badge1: "Architecture",
			badge2: "Urban Design",
			badge3: "Architectural Representation",
			photoPlaceholder: "Portrait coming soon",
			currentStatusLabel: "Current Status",
			currentStatus: "3rd Year Architecture Student",
			educationLabel: "Education",
			university: "Politehnica University of Timișoara",

			faculty: "Faculty of Architecture and Urbanism",

			specialization: "Bachelor's Degree in Architecture",

			universityPeriod: "2023 — Present",

			universityDescription:
				"Academic training focused on architectural design, urban planning, building structures, architectural history and graphic representation, developing projects from concept to technical documentation.",

			highSchool: "Petru Rareș Theoretical High School",

			highSchoolProfile: "Science Profile",

			highSchoolPeriod: "Graduated 2023",

			academicFocusLabel: "Academic Focus",

			academicFocus: [
				"Architectural Design",
				"Urban Design",
				"Housing",
				"Public Buildings",
				"Graphic Representation",
				"3D Modeling",
				"Rendering",
				"Technical Drawings",
			],
			interestsLabel: "INTERESTS",

			interestsHeading: "Areas of Interest",

			interests: [
				"Residential Architecture",
				"Public Buildings",
				"Cultural Spaces",
				"Urban Design",
				"Architectural Visualization",
				"3D Modeling",
			],

			primaryInterestLabel: "AREA OF INTEREST",

			primaryInterest: "Residential architecture and cultural projects",
			interestsDescription:
				"These areas reflect the direction in which I want to grow professionally, combining architectural design, visual representation, and a strong focus on user experience.",
			currentInterestsLabel: "Current Interests",

			currentInterests:
				"My current interests include contemporary architecture, public buildings, and integrating visual representation throughout the architectural design process.",
			philosophyLabel: "Approach",

			philosophyHeading: "Design Principles",

			philosophyItems: [
				{
					title: "Context before form",
					description:
						"Every project begins with understanding the site, its users, and the relationship between architecture and its surroundings.",
				},
				{
					title: "Clarity before complexity",
					description:
						"I value clear and well-reasoned solutions over unnecessary formal complexity.",
				},
				{
					title: "Function shapes space",
					description:
						"Spatial organization and user experience are the foundation of every design decision.",
				},
				{
					title: "Attention to detail",
					description:
						"I believe materials, proportions, and representation are what transform a good project into a memorable one.",
				},
			],
			goalsLabel: "Current Goals",
			goalLabel: "Current Goal",
			goal: "I am eager to gain professional experience and contribute to architectural projects through an internship at an architecture firm.",

			goalsHeading: "What I'm working towards",

			goals: [
				"Architecture internship",
				"Participating in architectural competitions",
				"Improving BIM and Archicad workflows",
				"Advancing rendering and visualization skills",
				"Contributing to real-world architectural projects",
			],

			cvTitle: "Download Full CV",

			cvSubtitle: "Education, skills and academic experience.",
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
			heading: "Proiectez spații funcționale, clare și atent gândite.",
			lead: "Student la Facultatea de Arhitectură și Urbanism din Timișoara, interesat de proiectarea arhitecturală, reprezentarea grafică și procesul de dezvoltare a proiectelor de la concept până la implementare.",
			subLead:
				"Dornic să acumulez experiență practică într- un mediu profesional și să îmi dezvolt competențele tehnice și creative.",
			featuredLabel: "Proiect reprezentativ",
			viewProject: "Vezi proiectul",
			selectedWork: "Lucrări selectate",
			recentProjects: "Proiecte recente",
			viewProjects: "Vezi proiectele",
			aboutLabel: "Despre",
			languagesTitle: "Limbi străine",
			language1: "Română - nativ",
			language2: "Rusă - avansat",
			language3: "Engleză - (A2)",
			interestsTitle: "Activități și interese",
			interest1: "Arhitectură contemporană",
			interest2: "Fotografie de arhitectură",
			interest3: "Schiță și desen",
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
			heading: "Învăț să transform ideile în spații bine gândite.",
			intro:
				"Sunt student la Facultatea de Arhitectură și Urbanism din cadrul Universității Politehnica Timișoara, interesat de proiectarea arhitecturală, reprezentarea grafică și dezvoltarea proiectelor de la concept până la implementare.",
			body: "Acest portofoliu reunește proiecte academice și personale dezvoltate pe parcursul studiilor, reflectând procesul meu de proiectare și interesul pentru arhitectura rezidențială, culturală și urbană.",

			badge1: "Arhitectură",
			badge2: "Urbanism",
			badge3: "Reprezentare grafică",
			photoPlaceholder: "Portret în curând",
			currentStatusLabel: "Statut",
			currentStatus: "Student anul III · Facultatea de Arhitectură și Urbanism",
			educationLabel: "Educație",
			university: "Universitatea Politehnica Timișoara",

			faculty: "Facultatea de Arhitectură și Urbanism",

			specialization: "Specializarea Arhitectură",

			universityPeriod: "2023 — prezent",

			universityDescription:
				"Parcurs academic axat pe proiectare arhitecturală, urbanism, structuri, istoria arhitecturii și reprezentare grafică, dezvoltând proiecte de la concept până la documentația tehnică.",

			highSchool: "Liceul Teoretic „Petru Rareș”",

			highSchoolProfile: "Profil Real",

			highSchoolPeriod: "Absolvent 2023",

			academicFocusLabel: "Direcții academice",

			academicFocus: [
				"Proiectare Arhitecturală",
				"Urbanism",
				"Locuințe",
				"Clădiri Publice",
				"Reprezentare Grafică",
				"Modelare 3D",
				"Randare",
				"Planșe Tehnice",
			],
			interestsLabel: "INTERESE",
			primaryInterestLabel: "SPECIALIZARE DE INTERES",

			primaryInterest: "Arhitectură rezidențială și proiecte culturale",
			interestsHeading: "Domenii care mă inspiră",

			interests: [
				"Arhitectură rezidențială",
				"Clădiri publice",
				"Spații culturale",
				"Urbanism",
				"Vizualizare arhitecturală",
				"Modelare 3D",
			],

			interestsDescription:
				"Aceste domenii reflectă direcția în care îmi doresc să mă dezvolt profesional, combinând proiectarea arhitecturală, reprezentarea vizuală și atenția pentru experiența utilizatorului.",
			currentInterestsLabel: "Interese actuale",

			currentInterests:
				"Îmi dezvolt proiectele pornind de la context, funcționalitate și claritatea soluțiilor, folosind reprezentarea vizuală ca instrument de explorare și comunicare.",
			philosophyLabel: "Abordare",

			philosophyHeading: "Principii de proiectare",

			philosophyItems: [
				{
					title: "Context înainte de formă",
					description:
						"Fiecare proiect începe prin înțelegerea locului, a oamenilor și a relației dintre arhitectură și mediul construit.",
				},
				{
					title: "Claritate înainte de complexitate",
					description:
						"Prefer soluțiile simple, bine argumentate și coerente, înaintea gesturilor arhitecturale spectaculoase.",
				},
				{
					title: "Funcția modelează spațiul",
					description:
						"Organizarea spațiului și experiența utilizatorului reprezintă baza fiecărui proiect.",
				},
				{
					title: "Atenție la detalii",
					description:
						"Cred că materialele, proporțiile și reprezentarea sunt cele care transformă un proiect bun într-unul memorabil.",
				},
			],

			goal: "Îmi doresc să acumulez experiență profesională și să contribui la proiecte de arhitectură printr-un internship într-un birou de profil.",
			goalsLabel: "Obiective",
			goalLabel: "Obiectiv",

			goalsHeading: "În prezent îmi propun",

			goals: [
				"Obținerea unui internship într-un birou de arhitectură",
				"Participarea la concursuri de arhitectură",
				"Perfecționarea fluxurilor BIM și Archicad",
				"Dezvoltarea abilităților de randare și reprezentare",
				"Implicarea în proiecte reale",
			],

			cvTitle: "Descarcă CV-ul complet",

			cvSubtitle: "Educație, competențe și experiență academică.",
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
