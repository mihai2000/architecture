import { Locale } from "@/lib/i18n/translations";

export type GalleryCategory = "photo" | "sketch" | "plan";

export type GalleryItem = {
	url: string;
	alt: string;
	category: GalleryCategory;
	groupKey?: string;
	groupLabel?: Record<Locale, string>;
	width?: number;
	height?: number;
};

export type Project = {
	slug: string;
	title: string;
	location: string;
	logo: string;
	type: string;
	image: string;
	imageAlt: string;
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
	alt: "Building under construction surrounded by scaffolding",
	category: "photo",
};

const CONCEPT_SKETCH: GalleryItem = {
	url: "https://images.unsplash.com/photo-1643569941917-95185f728355?auto=format&fit=crop&w=1400&q=80",
	alt: "Minimalist pen sketch of a house",
	category: "sketch",
};

const FLOOR_PLAN: GalleryItem = {
	url: "https://images.unsplash.com/photo-1721244654210-a505a99661e9?auto=format&fit=crop&w=1400&q=80",
	alt: "Architectural floor plan drawing of a house",
	category: "plan",
};

const SHARED_GALLERY = [CONSTRUCTION_PHOTO, CONCEPT_SKETCH, FLOOR_PLAN];

export const projects: Project[] = [
	{
		slug: "hub-cultural",
		title: "BIBILIOTECĂ-HUB CULTURAL „EDUARD PAMFIL”",
		location: "Timișoara, Romania",
		type: "Hub",
		logo: "/projects/hub-cultural/logo/library-icon.svg",
		image: "/projects/hub-cultural/arrival-plaza.jpg",
		imageAlt:
			"Arrival plaza of the cultural hub with circular timber building on a rainy day",
		imageWidth: 1280,
		imageHeight: 773,
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
		pdfUrl: "/hub-cultural.pdf",
		gallery: [
			{
				url: "/projects/hub-cultural/street-perspective.jpg",
				alt: "Street-level perspective of the cultural hub highlighting the timber facade and surrounding urban streetscape",
				category: "sketch",
				groupKey: "renders",
				groupLabel: { en: "Renders", ro: "Randări" },
				width: 1280,
				height: 853,
			},
			{
				url: "/projects/hub-cultural/urban-boulevard.jpg",
				alt: "View of the cultural hub from the main urban boulevard with pedestrian-friendly public space",
				category: "sketch",
				groupKey: "renders",
				groupLabel: { en: "Renders", ro: "Randări" },
				width: 1280,
				height: 905,
			},
			{
				url: "/projects/hub-cultural/rooftop-terrace.jpg",
				alt: "Rooftop terrace with landscaped seating areas overlooking the city skyline",
				category: "sketch",
				groupKey: "renders",
				groupLabel: { en: "Renders", ro: "Randări" },
				width: 1129,
				height: 745,
			},
			{
				url: "/projects/hub-cultural/library-interior.jpg",
				alt: "Library interior featuring exposed timber structure, bookshelves and collaborative reading spaces",
				category: "sketch",
				groupKey: "renders",
				groupLabel: { en: "Renders", ro: "Randări" },
				width: 1129,
				height: 745,
			},

			{
				url: "/projects/hub-cultural/plans/plan-etaj-1.jpg",
				alt: "First floor architectural plan of the cultural hub",
				category: "plan",
				groupKey: "plan-etaj-1",
				groupLabel: { en: "Floor 1 Plan", ro: "Plan Etaj 1" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/hub-cultural/plans/plan-etaj-2.jpg",
				alt: "Second floor architectural plan of the cultural hub",
				category: "plan",
				groupKey: "plan-etaj-2",
				groupLabel: { en: "Floor 2 Plan", ro: "Plan Etaj 2" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/hub-cultural/plans/plan-etaj-3.jpg",
				alt: "Third floor architectural plan of the cultural hub",
				category: "plan",
				groupKey: "plan-etaj-3",
				groupLabel: { en: "Floor 3 Plan", ro: "Plan Etaj 3" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/hub-cultural/plans/plan-etaj-4.jpg",
				alt: "Fourth floor architectural plan of the cultural hub",
				category: "plan",
				groupKey: "plan-etaj-4",
				groupLabel: { en: "Floor 4 Plan", ro: "Plan Etaj 4" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/hub-cultural/plans/plan-etaj-minus-1.jpg",
				alt: "Basement floor architectural plan of the cultural hub",
				category: "plan",
				groupKey: "plan-etaj-minus-1",
				groupLabel: { en: "Minus 1 Floor Plan", ro: "Plan Etaj Minus 1" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/hub-cultural/plans/plan-parter.jpg",
				alt: "Ground floor architectural plan showing public spaces and circulation",
				category: "plan",
				groupKey: "plan-parter",
				groupLabel: { en: "Ground Floor Plan", ro: "Plan Parter" },
				width: 1790,
				height: 422,
			},
			{
				url: "/projects/hub-cultural/plans/plan-de-incadrare.jpg",
				alt: "Site location plan showing the cultural hub within its surrounding urban context and neighboring streets",
				category: "plan",
				groupKey: "plan-de-incadrare",
				groupLabel: {
					en: "Site Location Plan",
					ro: "Plan de Încadrare",
				},
				width: 1790,
				height: 422,
			},
			{
				url: "/projects/hub-cultural/plans/sectiune-1.jpg",
				alt: "Longitudinal building section illustrating the interior spatial organization",
				category: "plan",
				groupKey: "sectiune-1",
				groupLabel: { en: "Section 1", ro: "Secțiune 1" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/hub-cultural/plans/sectiune-2.jpg",
				alt: "Cross section illustrating floor levels and interior spaces of the cultural hub",
				category: "plan",
				groupKey: "sectiune-2",
				groupLabel: {
					en: "Section 2",
					ro: "Secțiune 2",
				},
				width: 1800,
				height: 539,
			},
			{
				url: "/projects/hub-cultural/plans/fatada-vest.jpg",
				alt: "West facade architectural elevation of the cultural hub",
				category: "plan",
				groupKey: "fatada-vest",
				groupLabel: { en: "West Facade", ro: "Fata Vest" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/hub-cultural/plans/fatada-nord.jpg",
				alt: "North facade architectural elevation of the cultural hub",
				category: "plan",
				groupKey: "fatada-nord",
				groupLabel: { en: "North Facade", ro: "Fatada Nord" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/hub-cultural/plans/fatada-popa-sapca.jpg",
				alt: "Popa Șapcă street facade architectural elevation of the cultural hub",
				category: "plan",
				groupKey: "fatada-popa-sapca",
				groupLabel: { en: "Popa Sapca Facade", ro: "Fatada Popa Săpca" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/hub-cultural/plans/fatada-strada-oituz.jpg",
				alt: "Oituz Street facade architectural elevation of the cultural hub",
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
		title: "Hostel",
		location: "Timișoara, Romania",
		type: "Hostel",
		logo: "/projects/take-ionescu-hostel/logo/hostel-logo.svg",
		image: "/projects/take-ionescu-hostel/facade-piateta.jpg",
		imageAlt:
			"Elevated hostel volume on pilotis with a public plaza opening beneath it",
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
		pdfUrl: "/hostel-proiect.pdf",
		gallery: [
			{
				url: "/projects/take-ionescu-hostel/ground-floor-plaza.jpg",
				alt: "Covered ground-floor plaza beneath the elevated hostel volume",
				category: "sketch",
				groupKey: "renders",
				groupLabel: { en: "Renders", ro: "Randări" },
				width: 1280,
				height: 905,
			},
			{
				url: "/projects/take-ionescu-hostel/corner-view.jpg",
				alt: "Corner view of the hostel massing addressing the street",
				category: "sketch",
				groupKey: "renders",
				groupLabel: { en: "Renders", ro: "Randări" },
				width: 1280,
				height: 853,
			},
			{
				url: "/projects/take-ionescu-hostel/pedestrian-approach.jpg",
				alt: "Pedestrian approach toward the hostel entrance",
				category: "sketch",
				groupKey: "renders",
				groupLabel: { en: "Renders", ro: "Randări" },
				width: 1280,
				height: 905,
			},
			{
				url: "/projects/take-ionescu-hostel/shared-workshop.png",
				alt: "Shared workshop space inside the hostel under an exposed concrete ceiling",
				category: "sketch",
				groupKey: "renders",
				groupLabel: { en: "Renders", ro: "Randări" },
				width: 1129,
				height: 745,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/plan-situatie.jpg",
				alt: "Site plan showing the corner plot within the city block",
				category: "plan",
				groupKey: "plan-situatie",
				groupLabel: { en: "Site Plan", ro: "Plan de Situație" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/plan-parcare.jpg",
				alt: "Basement parking plan",
				category: "plan",
				groupKey: "plan-parcare",
				groupLabel: { en: "Parking Plan", ro: "Plan Parcare" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/plan-parter.jpg",
				alt: "Ground floor plan with the public plaza and bistro",
				category: "plan",
				groupKey: "plan-parter",
				groupLabel: { en: "Ground Floor Plan", ro: "Plan Parter" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/plan-etaj-1.jpg",
				alt: "First floor plan with studio units",
				category: "plan",
				groupKey: "plan-etaj-1",
				groupLabel: { en: "Floor 1 Plan", ro: "Plan Etaj 1" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/plan-etaj-2.jpg",
				alt: "Second floor plan with shared dormitory rooms",
				category: "plan",
				groupKey: "plan-etaj-2",
				groupLabel: { en: "Floor 2 Plan", ro: "Plan Etaj 2" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/plan-etaj-3.jpg",
				alt: "Third floor plan with shared dormitory rooms",
				category: "plan",
				groupKey: "plan-etaj-3",
				groupLabel: { en: "Floor 3 Plan", ro: "Plan Etaj 3" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/plan-capac.jpg",
				alt: "Attic-level plan with the common terrace and coffee spot",
				category: "plan",
				groupKey: "plan-capac",
				groupLabel: { en: "Attic Plan", ro: "Plan Capac" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/plan-invelitoare.jpg",
				alt: "Roof plan",
				category: "plan",
				groupKey: "plan-invelitoare",
				groupLabel: { en: "Roof Plan", ro: "Plan Învelitoare" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/sectiuni.jpg",
				alt: "Building sections showing the shared interior spaces",
				category: "plan",
				groupKey: "sectiuni",
				groupLabel: { en: "Sections", ro: "Secțiuni" },
				width: 900,
				height: 600,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/facade-take-ionescu.jpg",
				alt: "Elevation drawing facing Take Ionescu Boulevard",
				category: "plan",
				groupKey: "facade-take-ionescu",
				groupLabel: {
					en: "Facade — Take Ionescu Blvd.",
					ro: "Fațadă — Bd. Take Ionescu",
				},
				width: 1800,
				height: 539,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/facade-nicu-filipescu.jpg",
				alt: "Elevation drawing facing Nicu Filipescu Street",
				category: "plan",
				groupKey: "facade-nicu-filipescu",
				groupLabel: {
					en: "Facade — Nicu Filipescu St.",
					ro: "Fațadă — Str. Nicu Filipescu",
				},
				width: 1790,
				height: 422,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/facade-semenic.jpg",
				alt: "Elevation drawing facing Semenic Street",
				category: "plan",
				groupKey: "facade-semenic",
				groupLabel: { en: "Facade — Semenic St.", ro: "Fațadă — Str. Semenic" },
				width: 1528,
				height: 465,
			},
			{
				url: "/projects/take-ionescu-hostel/plans/facade-courtyard.jpg",
				alt: "Elevation drawing facing the interior courtyard",
				category: "plan",
				groupKey: "facade-courtyard",
				groupLabel: {
					en: "Facade — Courtyard",
					ro: "Fațadă — Curte interioară",
				},
				width: 1800,
				height: 575,
			},
		],
	},
];
