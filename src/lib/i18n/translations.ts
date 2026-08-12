export type Locale = "en" | "ro";

export const locales: Locale[] = ["en", "ro"];
type PhilosophyItem = {
	title: string;
	description: string;
};

export type Dictionary = {
	brand: {
		name: string;
	};
	nav: {
		projects: string;
		about: string;
		contact: string;
		menu: string;
		languageLabel: string;
	};
	footer: {
		rights: string;
		social: {
			facebook: string;
			instagram: string;
			linkedin: string;
			whatsapp: string;
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
		skillLevelAdvanced: string;
		skillLevelIntermediate: string;
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
		conceptHeading: string;
		nextProject: string;
		previousProject: string;
	};
	explorer: {
		all: string;
		types: Record<string, string>;
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
	comingSoon: {
		title: string;
		subtitle: string;
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
		subjectLabel: string;
		subjectPlaceholder: string;
		subjectInternship: string;
		subjectCollaboration: string;
		subjectCompetition: string;
		subjectGeneral: string;
		availableHeading: string;
		availableLabel: string;
		availableItems: string[];
		responseNote: string;
	};
	contactForm: {
		nameLabel: string;
		namePlaceholder: string;
		emailLabel: string;
		emailPlaceholder: string;
		messageLabel: string;
		messagePlaceholder: string;
		requiredNote: string;
		submit: string;
		submitting: string;
		successMessage: string;
		errorRequired: string;
		errorInvalidName: string;
		errorInvalidEmail: string;
		errorInvalidSubject: string;
		errorInvalidMessage: string;
		errorTooFast: string;
		errorRecaptcha: string;
		errorGeneric: string;
		honeypotLabel: string;
	};
	notFound: {
		eyebrow: string;
		title: string;
		description: string;
		backHome: string;
		studio: string;
		project: string;
		drawing: string;
		scale: string;
		revision: string;
		projectValue: string;
		drawingValue: string;
		scaleValue: string;
		revisionValue: string;
		undefinedSpace: string;
		exploringSpace: string;
		drawingCode: string;
		planTitle: string;
		planDescription: string;
		dimensionPrimary: string;
		dimensionSecondary: string;
	};
};

export const dictionaries: Record<Locale, Dictionary> = {
	en: {
		brand: {
			name: "Catalin Carp Studio",
		},
		nav: {
			projects: "Projects",
			about: "About",
			contact: "Contact",
			menu: "Menu",
			languageLabel: "Language",
		},
		footer: {
			rights: "All rights reserved.",
			social: {
				facebook: "Facebook",
				instagram: "Instagram",
				linkedin: "LinkedIn",
				whatsapp: "Chat on WhatsApp",
			},
		},
		home: {
			eyebrow: "Architecture / Interior / Urban",
			heading: "Exploring Form and Space.",
			lead: "Architecture student at the Faculty of Architecture and Urban Planning in Timișoara, interested in architectural design, graphic representation, and the development of projects from concept to implementation.",
			subLead:
				"Eager to gain practical experience in a professional environment while developing my technical and creative skills.",
			featuredLabel: "Featured project",
			viewProject: "View project",
			selectedWork: "Selected work",
			recentProjects: "Recent projects",
			viewProjects: "View Projects",
			aboutLabel: "At a glance",
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
			contactLabel: "Let's connect",
			contactHeading: "Every project begins with a conversation.",
			contactText:
				"Open to feedback, collaborations, and conversations about architecture and future spaces.",
			getInTouch: "Get in touch",
			skillsHeading: "Tools & software",
			skillLevelAdvanced: "Advanced",
			skillLevelIntermediate: "Intermediate",
		},
		projects: {
			eyebrow: "Portfolio",
			heading: "All projects",
		},
		projectDetail: {
			back: "Back to projects",
			yearLabel: "Year",
			areaLabel: "Area",
			locationLabel: "Location",
			typeLabel: "Type",
			galleryHeading: "Gallery",
			filterLabel: "Filter",
			filterAll: "All categories",
			closeLightbox: "Close",
			pdfCtaTitle: "Full project booklet",
			pdfCtaSubtitle: "Open the complete PDF presentation",
			conceptHeading: "Concept",
			nextProject: "Next Project",
			previousProject: "Previous Project",
			categories: {
				photo: "Photo",
				sketch: "Sketch",
				plan: "Plan",
			},
		},
		explorer: {
			all: "All",
			types: {
				hub: "Hub",
				hostel: "Hostel",
			},
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
		comingSoon: {
			title: "New project incoming",
			subtitle: "Currently in the works",
		},
		about: {
			eyebrow: "Profile",
			heading: "Learning to turn ideas into thoughtful spaces.",
			intro:
				"I am a fourth-year Architecture student at the Faculty of Architecture and Urbanism, Politehnica University of Timișoara, with a strong interest in architectural design, visual representation, and developing projects from concept to implementation.",
			body: "This portfolio brings together academic and personal work completed throughout my studies, reflecting my design process and my interest in residential, cultural, and urban architecture.",
			badge1: "Architecture",
			badge2: "Urban Design",
			badge3: "Architectural Representation",
			photoPlaceholder: "Portrait coming soon",
			currentStatusLabel: "Current Status",
			currentStatus: "4th Year Architecture Student",
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
			heading: "Let's create meaningful spaces together.",
			lead: "If you have a question, a collaboration proposal, or would like to discuss a project, feel free to send me a message. I'll get back to you as soon as possible..",
			emailLabel: "Email",
			phoneLabel: "WhatsApp",
			locationLabel: "Based in",
			locationValue: ["Timișoara", "Romania"],

			subjectLabel: "Subject",

			subjectPlaceholder: "Select a subject",

			subjectInternship: "Internship Opportunity",

			subjectCollaboration: "Collaboration Proposal",

			subjectCompetition: "Architecture Competition",

			subjectGeneral: "General Inquiry",
			availableLabel: "AVAILABLE",

			availableHeading: "I'm currently available for",

			availableItems: [
				"Internships",
				"Collaborations",
				"Architecture Competitions",
			],
			responseNote: "I usually reply to all messages within 24–48 hours.",
		},
		contactForm: {
			nameLabel: "Name",
			namePlaceholder: "Your name",
			emailLabel: "Your email",
			emailPlaceholder: "your@email.com",
			messageLabel: "Message",
			messagePlaceholder: "Tell me a bit about your inquiry...",
			requiredNote: "Required fields",
			submit: "Send Message",
			submitting: "Sending...",
			successMessage: "Thank you for your message. We'll get back to you soon!",
			errorRequired: "Please fill in all required fields",
			errorInvalidName:
				"Please enter a valid name (letters only, 2-100 characters)",
			errorInvalidEmail: "Please enter a valid email address",
			errorInvalidSubject: "Please select a valid subject",
			errorInvalidMessage: "Message must be between 10 and 5000 characters",
			errorTooFast: "Please wait a moment before sending another message",
			errorRecaptcha: "Please complete the CAPTCHA verification",
			errorGeneric: "An unexpected error occurred.",
			honeypotLabel: "Company",
		},
		notFound: {
			eyebrow: "ERROR / 404",
			title: "SPACE NOT FOUND.",
			description:
				"It seems you've stepped into a space that doesn't exist in the current project.",
			backHome: "BACK TO HOME",
			studio: "STUDIO",
			project: "PROJECT",
			drawing: "DRAWING",
			scale: "SCALE",
			revision: "REVISION",
			projectValue: "ARCHITECTURE PORTFOLIO",
			drawingValue: "SHEET 404",
			scaleValue: "NTS",
			revisionValue: "01 / 2026",
			undefinedSpace: "UNDEFINED SPACE",
			exploringSpace: "EXPLORING SPACE",
			drawingCode: "6R07 / 14.40A",
			planTitle: "Architectural floor plan",
			planDescription:
				"Architectural floor plan with technical construction grid, wall geometry, staircase, elevator core, dimensions and drafting annotations.",
			dimensionPrimary: "12.60",
			dimensionSecondary: "8.40",
		},
	},
	ro: {
		brand: {
			name: "Catalin Carp Studio",
		},
		nav: {
			projects: "Proiecte",
			about: "Despre",
			contact: "Contact",
			menu: "Meniu",
			languageLabel: "Limbă",
		},
		footer: {
			rights: "Toate drepturile rezervate.",
			social: {
				facebook: "Facebook",
				instagram: "Instagram",
				linkedin: "LinkedIn",
				whatsapp: "Discută pe WhatsApp",
			},
		},
		home: {
			eyebrow: "Arhitectură / Interior / Urban",
			heading: "Între formă și spațiu.",
			lead: "Student la Facultatea de Arhitectură și Urbanism din Timișoara, interesat de proiectarea arhitecturală, reprezentarea grafică și procesul de dezvoltare a proiectelor de la concept până la implementare.",
			subLead:
				"Dornic să acumulez experiență practică într- un mediu profesional și să îmi dezvolt competențele tehnice și creative.",
			featuredLabel: "Proiect reprezentativ",
			viewProject: "Vezi proiectul",
			selectedWork: "Lucrări selectate",
			recentProjects: "Proiecte recente",
			viewProjects: "Vezi proiectele",
			aboutLabel: "Dintr-o privire",
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
			contactLabel: "Să discutăm",
			contactHeading: "Fiecare proiect începe cu o conversație.",
			contactText:
				"Sunt deschis la feedback, colaborări și discuții despre arhitectură și spații viitoare.",
			getInTouch: "Ia legătura",
			skillsHeading: "Unelte și software",
			skillLevelAdvanced: "Avansat",
			skillLevelIntermediate: "Intermediar",
		},
		projects: {
			eyebrow: "Portofoliu",
			heading: "Toate proiectele",
		},
		projectDetail: {
			back: "Înapoi la proiecte",
			yearLabel: "An",
			areaLabel: "Suprafață",
			locationLabel: "Locație",
			typeLabel: "Tip",
			galleryHeading: "Galerie",
			filterLabel: "Filtrează",
			filterAll: "Toate categoriile",
			closeLightbox: "Închide",
			pdfCtaTitle: "Broșura completă a proiectului",
			pdfCtaSubtitle: "Deschide prezentarea PDF completă",
			conceptHeading: "Concept",
			nextProject: "Proiectul Următor",
			previousProject: "Proiectul Anterior",
			categories: {
				photo: "Foto",
				sketch: "Schiță",
				plan: "Plan",
			},
		},
		explorer: {
			all: "Toate",
			types: {
				hub: "Hub",
				hostel: "Hostel",
			},
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
		comingSoon: {
			title: "Proiect nou în curând",
			subtitle: "În lucru momentan",
		},
		about: {
			eyebrow: "Profil",
			heading: "Învăț să transform ideile în spații.",
			intro:
				"Sunt student la Facultatea de Arhitectură și Urbanism din cadrul Universității Politehnica Timișoara, interesat de proiectarea arhitecturală, reprezentarea grafică și dezvoltarea proiectelor de la concept până la implementare.",
			body: "Acest portofoliu reunește proiecte academice și personale dezvoltate pe parcursul studiilor, reflectând procesul meu de proiectare și interesul pentru arhitectura rezidențială, culturală și urbană.",

			badge1: "Arhitectură",
			badge2: "Urbanism",
			badge3: "Reprezentare grafică",
			photoPlaceholder: "Portret în curând",
			currentStatusLabel: "Statut",
			currentStatus: "Student anul IV · Facultatea de Arhitectură și Urbanism",
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
				"Clădiri Publice",
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
			heading: "Hai să discutăm despre următorul proiect.",
			lead: "Dacă ai o întrebare, o propunere de colaborare sau dorești să discutăm despre un proiect, trimite-mi un mesaj și îți voi răspunde cât mai curând.",
			emailLabel: "Email",
			phoneLabel: "WhatsApp",
			locationLabel: "Locuiesc în",
			locationValue: ["Timișoara", "România"],
			subjectLabel: "Subiect",

			subjectPlaceholder: "Selectează un subiect",

			subjectInternship: "Oportunitate de internship",

			subjectCollaboration: "Propunere de colaborare",

			subjectCompetition: "Concurs de arhitectură",

			subjectGeneral: "Întrebare generală",
			availableLabel: "DISPONIBIL",

			availableHeading: "În prezent sunt disponibil pentru",

			availableItems: ["Internship", "Colaborări", "Concursuri de arhitectură"],
			responseNote:
				"Încerc să răspund tuturor mesajelor în maximum 24-48 de ore.",
		},
		contactForm: {
			nameLabel: "Nume",
			namePlaceholder: "Numele tău",
			emailLabel: "Emailul tău",
			emailPlaceholder: "emailul.tau@example.com",
			messageLabel: "Mesaj",
			messagePlaceholder:
				"Scrie câteva detalii despre motivul pentru care mă contactezi...",
			requiredNote: "Câmpuri obligatorii",
			submit: "Trimite solicitarea",
			submitting: "Se trimite...",
			successMessage: "Îți mulțumim pentru mesaj. Îți vom răspunde în curând!",
			errorRequired: "Te rugăm să completezi toate câmpurile obligatorii",
			errorInvalidName:
				"Te rugăm să introduci un nume valid (doar litere, 2-100 caractere)",
			errorInvalidEmail: "Te rugăm să introduci o adresă de email validă",
			errorInvalidSubject: "Te rugăm să selectezi un subiect valid",
			errorInvalidMessage:
				"Mesajul trebuie să aibă între 10 și 5000 de caractere",
			errorTooFast:
				"Te rugăm să aștepți un moment înainte de a trimite alt mesaj",
			errorRecaptcha: "Te rugăm să completezi verificarea CAPTCHA",
			errorGeneric: "A apărut o eroare neașteptată.",
			honeypotLabel: "Companie",
		},
		notFound: {
			eyebrow: "EROARE / 404",
			title: "SPAȚIU INEXISTENT.",
			description:
				"Se pare că ai ajuns într-un spațiu care nu există în proiectul curent.",
			backHome: "ÎNAPOI ACASĂ",
			studio: "STUDIO",
			project: "PROIECT",
			drawing: "PLANȘĂ",
			scale: "SCARĂ",
			revision: "REVIZIE",
			projectValue: "PORTOFOLIU DE ARHITECTURĂ",
			drawingValue: "PLANȘA 404",
			scaleValue: "NTS",
			revisionValue: "01 / 2026",
			undefinedSpace: "SPAȚIU INDEFINIT",
			exploringSpace: "SPAȚIU DE EXPLORAT",
			drawingCode: "6R07 / 14.40A",
			planTitle: "Plan arhitectural de etaj",
			planDescription:
				"Plan arhitectural de etaj cu grilă tehnică de construcție, geometria pereților, scară, nucleu de lift, cote și adnotări de proiectare.",
			dimensionPrimary: "12,60",
			dimensionSecondary: "8,40",
		},
	},
};
