import { Locale } from "@/lib/i18n/translations";

export type GalleryCategory = "photo" | "sketch" | "plan";

export type GalleryItem = {
	url: string;
	alt: Record<Locale, string>;
	category: GalleryCategory;
	groupKey?: string;
	groupLabel?: Record<Locale, string>;
	width?: number;
	height?: number;
};

export type Project = {
	slug: string;
	title: Record<Locale, string>;
	location: Record<Locale, string>;
	logo: string;
	type: string;
	image: string;
	imageAlt: Record<Locale, string>;
	imageWidth?: number;
	imageHeight?: number;
	year: number;
	area: Record<Locale, string>;
	description: Record<Locale, string[]>;
	pdfUrl?: string;
	gallery: GalleryItem[];
};

const CONSTRUCTION_PHOTO: GalleryItem = {
	url: "https://images.unsplash.com/photo-1760597307051-67946f9cf865?auto=format&fit=crop&w=1400&q=80",
	alt: {
		en: "Building under construction surrounded by scaffolding",
		ro: "Clădire în construcție, înconjurată de schele",
	},
	category: "photo",
};

const CONCEPT_SKETCH: GalleryItem = {
	url: "https://images.unsplash.com/photo-1643569941917-95185f728355?auto=format&fit=crop&w=1400&q=80",
	alt: {
		en: "Minimalist pen sketch of a house",
		ro: "Schiță minimalistă în peniță a unei case",
	},
	category: "sketch",
};

const FLOOR_PLAN: GalleryItem = {
	url: "https://images.unsplash.com/photo-1721244654210-a505a99661e9?auto=format&fit=crop&w=1400&q=80",
	alt: {
		en: "Architectural floor plan drawing of a house",
		ro: "Plan arhitectural al unei case",
	},
	category: "plan",
};

const SHARED_GALLERY = [CONSTRUCTION_PHOTO, CONCEPT_SKETCH, FLOOR_PLAN];

export const projects: Project[] = [
	{
		slug: "hub-cultural",
		title: {
			en: "CULTURAL LIBRARY HUB „EDUARD PAMFIL”",
			ro: "BIBILIOTECĂ-HUB CULTURAL „EDUARD PAMFIL",
		},
		location: { en: "Timișoara, Romania 2026", ro: "Timișoara, România 2026" },
		type: "hub",
		logo: "/projects/hub-cultural/logo/library-icon.svg",
		image: "/projects/hub-cultural/renders/arrival-plaza.jpg",
		imageAlt: {
			en: "Arrival plaza of the cultural hub with circular timber building on a rainy day",
			ro: "Piațeta de sosire a hub-ului cultural, cu clădirea circulară din lemn, într-o zi ploioasă",
		},
		imageWidth: 1600,
		imageHeight: 899,
		year: 2026,
		area: { en: "Third-Year Project", ro: "Proiect de an III" },
		description: {
			en: [
				"A human being is a universe in the making, without a fixed center, without a predetermined meaning. It is precisely this lack of permanence that sets them in motion: they seek direction and purpose, and through that search, they become.",
				"The library is not merely a container for this search, but an interlocutor—a universe in its own right, with its own logic and density. When these two universes collide, neither remains unchanged: the individual is reshaped through the encounter, while the library finds its meaning through the one who moves through it.",
			],
			ro: [
				"Omul e un Univers în deveniere, fără centru fix, fără sens prestabilit. Tocmai această lipsă de fixitate îl pune în mișcare: el caută direcția și sensul, iar în căutare devine",
				"Biblioteca nu este un recipient al acestei căutări, ci un interlocutor — un univers de sine stătător, cu propria logică și propria densitate. Când cele două universuri intră în coliziune, niciunul nu rămâne intact: omul se reconfigurează prin întâlnire, biblioteca capătă sens prin cel care o traversează.",
			],
		},
		pdfUrl: "/projects/hub-cultural/hub-cultural.pdf",
		gallery: [
			{
				url: "/projects/hub-cultural/renders/street-perspective.jpg",
				alt: {
					en: "Street-level perspective of the cultural hub highlighting the timber facade and surrounding urban streetscape",
					ro: "Perspectivă la nivelul străzii a hub-ului cultural, care evidențiază fațada din lemn și peisajul urban înconjurător",
				},
				category: "sketch",
				groupKey: "renders",
				groupLabel: { en: "Renders", ro: "Randări" },
				width: 1600,
				height: 900,
			},
			{
				url: "/projects/hub-cultural/renders/urban-boulevard.jpg",
				alt: {
					en: "View of the cultural hub from the main urban boulevard with pedestrian-friendly public space",
					ro: "Vedere a hub-ului cultural dinspre bulevardul urban principal, cu spațiu public pietonal",
				},
				category: "sketch",
				groupKey: "renders",
				groupLabel: { en: "Renders", ro: "Randări" },
				width: 1672,
				height: 941,
			},
			{
				url: "/projects/hub-cultural/renders/rooftop-terrace.jpg",
				alt: {
					en: "Rooftop terrace with landscaped seating areas overlooking the city skyline",
					ro: "Terasă pe acoperiș cu zone de relaxare amenajate peisagistic, cu vedere spre silueta orașului",
				},
				category: "sketch",
				groupKey: "renders",
				groupLabel: { en: "Renders", ro: "Randări" },
				width: 1672,
				height: 940,
			},
			{
				url: "/projects/hub-cultural/renders/library-interior.jpg",
				alt: {
					en: "Library interior featuring exposed timber structure, bookshelves and collaborative reading spaces",
					ro: "Interiorul bibliotecii, cu structura din lemn aparentă, rafturi de cărți și spații de lectură colaborativă",
				},
				category: "sketch",
				groupKey: "renders",
				groupLabel: { en: "Renders", ro: "Randări" },
				width: 1671,
				height: 941,
			},
			{
				url: "/projects/hub-cultural/plans/plan-de-incadrare.jpg",
				alt: {
					en: "Site location plan showing the cultural hub within its surrounding urban context and neighboring streets",
					ro: "Plan de încadrare care arată hub-ul cultural în contextul urban înconjurător și străzile învecinate",
				},
				category: "plan",
				groupKey: "plan-de-incadrare",
				groupLabel: {
					en: "Site Location Plan",
					ro: "Plan de Încadrare",
				},
				width: 900,
				height: 600,
			},
			{
				url: "/projects/hub-cultural/plans/plan-etaj-minus-1.jpg",
				alt: {
					en: "Basement floor architectural plan of the cultural hub",
					ro: "Plan arhitectural al etajului subsol al hub-ului cultural",
				},
				category: "plan",
				groupKey: "plan-etaj-minus-1",
				groupLabel: { en: "Minus 1 Floor Plan", ro: "Plan Etaj Minus 1" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/hub-cultural/plans/plan-parter.jpg",
				alt: {
					en: "Ground floor architectural plan showing public spaces and circulation",
					ro: "Plan arhitectural al parterului, cu spațiile publice și circulația",
				},
				category: "plan",
				groupKey: "plan-parter",
				groupLabel: { en: "Ground Floor Plan", ro: "Plan Parter" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/hub-cultural/plans/plan-etaj-1.jpg",
				alt: {
					en: "First floor architectural plan of the cultural hub",
					ro: "Plan arhitectural al etajului 1 al hub-ului cultural",
				},
				category: "plan",
				groupKey: "plan-etaj-1",
				groupLabel: { en: "Floor 1 Plan", ro: "Plan Etaj 1" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/hub-cultural/plans/plan-etaj-2.jpg",
				alt: {
					en: "Second floor architectural plan of the cultural hub",
					ro: "Plan arhitectural al etajului 2 al hub-ului cultural",
				},
				category: "plan",
				groupKey: "plan-etaj-2",
				groupLabel: { en: "Floor 2 Plan", ro: "Plan Etaj 2" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/hub-cultural/plans/plan-etaj-3.jpg",
				alt: {
					en: "Third floor architectural plan of the cultural hub",
					ro: "Plan arhitectural al etajului 3 al hub-ului cultural",
				},
				category: "plan",
				groupKey: "plan-etaj-3",
				groupLabel: { en: "Floor 3 Plan", ro: "Plan Etaj 3" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/hub-cultural/plans/plan-etaj-4.jpg",
				alt: {
					en: "Fourth floor architectural plan of the cultural hub",
					ro: "Plan arhitectural al etajului 4 al hub-ului cultural",
				},
				category: "plan",
				groupKey: "plan-etaj-4",
				groupLabel: { en: "Floor 4 Plan", ro: "Plan Etaj 4" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/hub-cultural/plans/sectiune-1.jpg",
				alt: {
					en: "Longitudinal building section illustrating the interior spatial organization",
					ro: "Secțiune longitudinală a clădirii, care ilustrează organizarea spațială interioară",
				},
				category: "plan",
				groupKey: "sectiune-1",
				groupLabel: { en: "Section 1", ro: "Secțiune 1" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/hub-cultural/plans/sectiune-2.jpg",
				alt: {
					en: "Cross section illustrating floor levels and interior spaces of the cultural hub",
					ro: "Secțiune transversală care ilustrează nivelurile și spațiile interioare ale hub-ului cultural",
				},
				category: "plan",
				groupKey: "sectiune-2",
				groupLabel: {
					en: "Section 2",
					ro: "Secțiune 2",
				},
				width: 900,
				height: 600,
			},
			{
				url: "/projects/hub-cultural/plans/fatada-vest.jpg",
				alt: {
					en: "West facade architectural elevation of the cultural hub",
					ro: "Fațada de vest a hub-ului cultural — desen de elevație",
				},
				category: "plan",
				groupKey: "fatada-vest",
				groupLabel: { en: "West Facade", ro: "Fata Vest" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/hub-cultural/plans/fatada-nord.jpg",
				alt: {
					en: "North facade architectural elevation of the cultural hub",
					ro: "Fațada de nord a hub-ului cultural — desen de elevație",
				},
				category: "plan",
				groupKey: "fatada-nord",
				groupLabel: { en: "North Facade", ro: "Fatada Nord" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/hub-cultural/plans/fatada-popa-sapca.jpg",
				alt: {
					en: "Popa Șapcă street facade architectural elevation of the cultural hub",
					ro: "Fațada spre strada Popa Șapca a hub-ului cultural — desen de elevație",
				},
				category: "plan",
				groupKey: "fatada-popa-sapca",
				groupLabel: { en: "Popa Sapca Facade", ro: "Fatada Popa Săpca" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/hub-cultural/plans/fatada-strada-oituz.jpg",
				alt: {
					en: "Oituz Street facade architectural elevation of the cultural hub",
					ro: "Fațada spre strada Oituz a hub-ului cultural — desen de elevație",
				},
				category: "plan",
				groupKey: "fatada-strada-oituz",
				groupLabel: { en: "Oituz Street Facade", ro: "Fatada Strada Oituz" },
				width: 900,
				height: 600,
			},
		],
	},
	{
		slug: "take-ionescu-hostel",
		title: { en: "HOSTEL", ro: "HOSTEL" },
		location: { en: "Timișoara, Romania 2026", ro: "Timișoara, România 2026" },
		type: "hostel",
		logo: "/projects/take-ionescu-hostel/logo/hostel-logo.svg",
		image: "/projects/take-ionescu-hostel/renders/facade-piateta.jpg",
		imageAlt: {
			en: "Elevated hostel volume on pilotis with a public plaza opening beneath it",
			ro: "Volumul hostelului ridicat pe piloți, cu o piațetă publică deschisă dedesubt",
		},
		imageWidth: 1280,
		imageHeight: 773,
		year: 2026,
		area: { en: "Third-Year Project", ro: "Proiect de an III" },
		description: {
			en: [
				"Hostel starts from a single premise: people are social beings, and a hostel — a form of dwelling defined by everything shared — can turn that idea into a lived experience. The site, where three circulation arteries meet at the end of a city block, suggested the answer: a public piațetă, freed from underneath the building, becomes the main generator of human interaction.",
				"The accommodation volume is lifted on pilotis, releasing the entire ground floor to people — a plaza that can be rented out for cultural events, compensating for the street-level commercial space that is lost. Reduced to cores and slabs, the structure lets the floors above be reorganized easily as the hostel evolves over time.",
			],
			ro: [
				"Hostel pornește de la o singură premisă: oamenii sunt ființe sociale, iar un hostel — o formă de locuire definită de tot ce este comun — poate transforma această idee într-o experiență trăită. Amplasamentul, unde se întâlnesc trei artere de circulație la capătul unui cvartal, a sugerat răspunsul: o piațetă publică, eliberată de sub clădire, devine principalul generator de interacțiune umană.",
				"Volumul de cazare este ridicat pe piloți, eliberând întregul parter pentru oameni — o piațetă ce poate fi închiriată pentru evenimente culturale, compensând astfel spațiile comerciale pierdute la stradă. Redusă la nuclee și planșee, structura permite reorganizarea facilă a etajelor pe măsură ce hostelul evoluează în timp.",
			],
		},
		pdfUrl: "/projects/take-ionescu-hostel/hostel-proiect.pdf",
		gallery: [
			{
				url: "/projects/take-ionescu-hostel/renders/ground-floor-plaza.jpg",
				alt: {
					en: "Covered ground-floor plaza beneath the elevated hostel volume",
					ro: "Piațetă acoperită la parter, sub volumul ridicat al hostelului",
				},
				category: "sketch",
				groupKey: "renders",
				groupLabel: { en: "Renders", ro: "Randări" },
				width: 1280,
				height: 905,
			},
			{
				url: "/projects/take-ionescu-hostel/renders/corner-view.jpg",
				alt: {
					en: "Corner view of the hostel massing addressing the street",
					ro: "Vedere de colț a volumetriei hostelului, orientată spre stradă",
				},
				category: "sketch",
				groupKey: "renders",
				groupLabel: { en: "Renders", ro: "Randări" },
				width: 1280,
				height: 853,
			},
			{
				url: "/projects/take-ionescu-hostel/renders/pedestrian-approach.jpg",
				alt: {
					en: "Pedestrian approach toward the hostel entrance",
					ro: "Traseu pietonal de acces spre intrarea în hostel",
				},
				category: "sketch",
				groupKey: "renders",
				groupLabel: { en: "Renders", ro: "Randări" },
				width: 1280,
				height: 905,
			},
			{
				url: "/projects/take-ionescu-hostel/renders/shared-workshop.png",
				alt: {
					en: "Shared workshop space inside the hostel under an exposed concrete ceiling",
					ro: "Spațiu comun de atelier în interiorul hostelului, sub un tavan din beton aparent",
				},
				category: "sketch",
				groupKey: "renders",
				groupLabel: { en: "Renders", ro: "Randări" },
				width: 1129,
				height: 745,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/plan-situatie.jpg",
				alt: {
					en: "Site plan showing the corner plot within the city block",
					ro: "Plan de situație care arată parcela de colț în cadrul cvartalului",
				},
				category: "plan",
				groupKey: "plan-situatie",
				groupLabel: { en: "Site Plan", ro: "Plan de Situație" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/plan-parcare.jpg",
				alt: {
					en: "Basement parking plan",
					ro: "Plan de parcare la subsol",
				},
				category: "plan",
				groupKey: "plan-parcare",
				groupLabel: { en: "Parking Plan", ro: "Plan Parcare" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/plan-parter.jpg",
				alt: {
					en: "Ground floor plan with the public plaza and bistro",
					ro: "Plan de parter, cu piațeta publică și bistroul",
				},
				category: "plan",
				groupKey: "plan-parter",
				groupLabel: { en: "Ground Floor Plan", ro: "Plan Parter" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/plan-etaj-1.jpg",
				alt: {
					en: "First floor plan with studio units",
					ro: "Plan etaj 1, cu unități tip studio",
				},
				category: "plan",
				groupKey: "plan-etaj-1",
				groupLabel: { en: "Floor 1 Plan", ro: "Plan Etaj 1" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/plan-etaj-2.jpg",
				alt: {
					en: "Second floor plan with shared dormitory rooms",
					ro: "Plan etaj 2, cu camere comune de tip dormitor",
				},
				category: "plan",
				groupKey: "plan-etaj-2",
				groupLabel: { en: "Floor 2 Plan", ro: "Plan Etaj 2" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/plan-etaj-3.jpg",
				alt: {
					en: "Third floor plan with shared dormitory rooms",
					ro: "Plan etaj 3, cu camere comune de tip dormitor",
				},
				category: "plan",
				groupKey: "plan-etaj-3",
				groupLabel: { en: "Floor 3 Plan", ro: "Plan Etaj 3" },
				width: 1522,
				height: 1013,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/plan-capac.jpg",
				alt: {
					en: "Attic-level plan with the common terrace and coffee spot",
					ro: "Plan la nivelul mansardei, cu terasa comună și colțul de cafea",
				},
				category: "plan",
				groupKey: "plan-capac",
				groupLabel: { en: "Attic Plan", ro: "Plan Capac" },
				width: 1540,
				height: 1021,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/plan-invelitoare.jpg",
				alt: {
					en: "Roof plan",
					ro: "Plan de învelitoare",
				},
				category: "plan",
				groupKey: "plan-invelitoare",
				groupLabel: { en: "Roof Plan", ro: "Plan Învelitoare" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/sectiuni.jpg",
				alt: {
					en: "Building sections showing the shared interior spaces",
					ro: "Secțiuni ale clădirii, care arată spațiile interioare comune",
				},
				category: "plan",
				groupKey: "sectiuni",
				groupLabel: { en: "Sections", ro: "Secțiuni" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/facade-take-ionescu.jpg",
				alt: {
					en: "Elevation drawing facing Take Ionescu Boulevard",
					ro: "Desen de fațadă spre Bulevardul Take Ionescu",
				},
				category: "plan",
				groupKey: "facade-take-ionescu",
				groupLabel: {
					en: "Facade — Take Ionescu Blvd.",
					ro: "Fațadă — Bd. Take Ionescu",
				},
				width: 1880,
				height: 660,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/facade-nicu-filipescu.jpg",
				alt: {
					en: "Elevation drawing facing Nicu Filipescu Street",
					ro: "Desen de fațadă spre strada Nicu Filipescu",
				},
				category: "plan",
				groupKey: "facade-nicu-filipescu",
				groupLabel: {
					en: "Facade — Nicu Filipescu St.",
					ro: "Fațadă — Str. Nicu Filipescu",
				},
				width: 1880,
				height: 660,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/facade-semenic.jpg",
				alt: {
					en: "Elevation drawing facing Semenic Street",
					ro: "Desen de fațadă spre strada Semenic",
				},
				category: "plan",
				groupKey: "facade-semenic",
				groupLabel: { en: "Facade — Semenic St.", ro: "Fațadă — Str. Semenic" },
				width: 1880,
				height: 660,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/facade-courtyard.jpg",
				alt: {
					en: "Elevation drawing facing the interior courtyard",
					ro: "Desen de fațadă spre curtea interioară",
				},
				category: "plan",
				groupKey: "facade-courtyard",
				groupLabel: {
					en: "Facade — Courtyard",
					ro: "Fațadă — Curte interioară",
				},
				width: 1880,
				height: 660,
			},
		],
	},
];
