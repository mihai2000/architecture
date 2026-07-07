import { Locale } from "@/lib/i18n/translations";

export type GalleryCategory = "photo" | "sketch" | "plan";

export type GalleryItem = {
	url: string;
	alt: string;
	category: GalleryCategory;
};

export type Project = {
	slug: string;
	title: string;
	location: string;
	type: string;
	image: string;
	imageAlt: string;
	year: number;
	area: string;
	description: Record<Locale, string[]>;
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
		slug: "m-house",
		title: "M House",
		location: "Timișoara, Romania",
		type: "Residential",
		image:
			"https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Minimalist white concrete house exterior surrounded by greenery",
		year: 2023,
		area: "180 m²",
		description: {
			en: [
				"M House is a single-family residence built around a simple idea: let the site's mature trees frame every major view. The plan wraps a compact volume around a private courtyard, keeping the street façade quiet and reserving the openness for the garden side.",
				"White render, exposed concrete lintels, and full-height glazing keep the material palette deliberately restrained, letting daylight and landscape do most of the work.",
			],
			ro: [
				"M House este o locuință unifamilială construită în jurul unei idei simple: lăsăm arborii maturi ai terenului să încadreze fiecare vedere importantă. Planul înfășoară un volum compact în jurul unei curți private, păstrând fațada spre stradă discretă și rezervând deschiderea către grădină.",
				"Tencuiala albă, buiandrugii din beton expus și vitrajele pe toată înălțimea mențin paleta de materiale deliberat restrânsă, lăsând lumina naturală și peisajul să facă cea mai mare parte a muncii.",
			],
		},
		gallery: SHARED_GALLERY,
	},
	{
		slug: "nord-one",
		title: "Nord One",
		location: "Timișoara, Romania",
		type: "Housing",
		image:
			"https://images.unsplash.com/photo-1768638687896-35bde623d532?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Modern apartment building facade with rows of balconies",
		year: 2022,
		area: "3,200 m²",
		description: {
			en: [
				"Nord One is a mid-rise housing block organized around generous balconies that double as climate buffers. Each unit gets a corner orientation, maximizing cross-ventilation and daylight across the floor plan.",
				"The facade rhythm — regular window bays broken by recessed loggias — was designed to read calmly at both pedestrian and street scale.",
			],
			ro: [
				"Nord One este un bloc de locuințe de înălțime medie, organizat în jurul unor balcoane generoase care funcționează și ca tampoane climatice. Fiecare unitate beneficiază de o orientare la colț, maximizând ventilația încrucișată și lumina naturală.",
				"Ritmul fațadei — travei regulate de ferestre întrerupte de logii retrase — a fost conceput să se citească calm, atât la scara pietonului, cât și a străzii.",
			],
		},
		gallery: SHARED_GALLERY,
	},
	{
		slug: "viennese-quarter",
		title: "Viennese Quarter",
		location: "Timișoara, Romania",
		type: "Urban",
		image:
			"https://images.unsplash.com/photo-1756361140899-54fe459a4086?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Sunny European plaza framed by historic street architecture",
		year: 2024,
		area: "1.2 ha",
		description: {
			en: [
				"Viennese Quarter is an urban infill study for a block shaped by its 19th-century neighbors. The proposal reintroduces a continuous street wall while carving a semi-public courtyard at its center for shared use.",
				"Massing and cornice lines borrow directly from the surrounding fabric, so the new buildings extend the block's rhythm rather than interrupt it.",
			],
			ro: [
				"Viennese Quarter este un studiu de completare urbană pentru un cvartal modelat de vecinii săi din secolul al XIX-lea. Propunerea reintroduce un front stradal continuu, decupând în același timp o curte semi-publică în centru, pentru uz comun.",
				"Volumetria și liniile de cornișă împrumută direct din țesutul urban existent, astfel încât noile clădiri prelungesc ritmul cvartalului, fără să îl întrerupă.",
			],
		},
		gallery: SHARED_GALLERY,
	},
	{
		slug: "red-housing",
		title: "Red Housing",
		location: "Dumbrăvița, Romania",
		type: "Residential",
		image:
			"https://images.unsplash.com/photo-1709993606747-f60e277fa130?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Building facade with a striking red exterior and large windows",
		year: 2023,
		area: "220 m²",
		description: {
			en: [
				"Red Housing takes its name from the single material gesture that defines it: a brick-red metal cladding wrapping two attached units. The color was chosen deliberately to stand out against the site's otherwise neutral surroundings.",
				"Inside, the plan is split into a public ground floor and a private upper level, with a shared double-height stair hall connecting the two households.",
			],
			ro: [
				"Red Housing își ia numele de la singurul gest de material care o definește: un placaj metalic roșu-cărămiziu care înfășoară două unități cuplate. Culoarea a fost aleasă deliberat pentru a se remarca în raport cu împrejurimile, altfel neutre, ale amplasamentului.",
				"În interior, planul este împărțit între un parter public și un nivel superior privat, cu o casă de scări comună, cu dublă înălțime, care conectează cele două locuințe.",
			],
		},
		gallery: SHARED_GALLERY,
	},
	{
		slug: "event-house",
		title: "Event House",
		location: "Cluj-Napoca, Romania",
		type: "Cultural",
		image:
			"https://images.unsplash.com/photo-1756486055411-1e41b45ecd83?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Modern building entrance with glass panels and metal framework",
		year: 2024,
		area: "950 m²",
		description: {
			en: [
				"Event House is a flexible venue designed to host exhibitions, small conferences, and private events under one roof. A column-free main hall allows the space to be reconfigured for each use, while a glazed entrance sequence signals the building's public role from the street.",
				"Acoustic and lighting infrastructure is left exposed and legible, treated as part of the building's architectural language rather than hidden above a suspended ceiling.",
			],
			ro: [
				"Event House este un spațiu flexibil, conceput pentru a găzdui expoziții, conferințe mici și evenimente private sub același acoperiș. O sală principală fără stâlpi permite reconfigurarea spațiului pentru fiecare utilizare, în timp ce o secvență de intrare vitrată semnalează, din stradă, rolul public al clădirii.",
				"Infrastructura acustică și de iluminat este lăsată vizibilă și lizibilă, tratată ca parte a limbajului arhitectural al clădirii, nu ascunsă sub un plafon fals.",
			],
		},
		gallery: SHARED_GALLERY,
	},
	{
		slug: "sibiu-library",
		title: "Sibiu Library",
		location: "Sibiu, Romania",
		type: "Institutional",
		image:
			"https://images.unsplash.com/photo-1760166699654-5d0e10f51994?auto=format&fit=crop&w=1200&q=80",
		imageAlt:
			"Contemporary library interior with floor-to-ceiling wooden bookshelves",
		year: 2022,
		area: "1,600 m²",
		description: {
			en: [
				"Sibiu Library reorganizes a public reading room around a full-height timber shelving wall that doubles as the building's primary structure. Reading nooks are carved directly into its depth, borrowing light from a continuous clerestory above.",
				"The result is a single generous volume rather than a sequence of separate rooms, keeping the whole collection visible — and inviting — from the entrance.",
			],
			ro: [
				"Sibiu Library reorganizează o sală de lectură publică în jurul unui perete de rafturi din lemn, pe toată înălțimea, care funcționează și ca structură principală a clădirii. Colțuri de lectură sunt decupate direct în grosimea acestuia, primind lumină dintr-o fâșie continuă de luminatoare de sus.",
				"Rezultatul este un singur volum generos, nu o succesiune de camere separate, astfel încât întreaga colecție rămâne vizibilă — și invită la lectură — chiar din intrare.",
			],
		},
		gallery: SHARED_GALLERY,
	},
	{
		slug: "terra-park-pavilion",
		title: "Terra Park Pavilion",
		location: "Arad, Romania",
		type: "Landscape",
		image:
			"https://images.unsplash.com/photo-1754956043037-0454b8a7d72e?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Wooden boardwalk winding through an open natural landscape",
		year: 2025,
		area: "0.8 ha",
		description: {
			en: [
				"Terra Park Pavilion is a landscape intervention built around a single elevated boardwalk that lets visitors cross a wetland site without disturbing it. A small timber pavilion at its midpoint offers the only enclosed space in the entire project.",
				"Every material was chosen for how it ages outdoors — untreated timber, weathering steel, and gravel — rather than how it looks on day one.",
			],
			ro: [
				"Terra Park Pavilion este o intervenție de peisagistică construită în jurul unui singur pasaj pietonal supraînălțat, care permite traversarea unei zone umede fără a o perturba. Un mic pavilion din lemn, amplasat la mijlocul traseului, oferă singurul spațiu închis din întregul proiect.",
				"Fiecare material a fost ales în funcție de modul în care îmbătrânește în exterior — lemn netratat, oțel autopatinabil și pietriș — nu de aspectul din prima zi.",
			],
		},
		gallery: SHARED_GALLERY,
	},
	{
		slug: "loft-interior",
		title: "Loft Interior",
		location: "Timișoara, Romania",
		type: "Interior",
		image:
			"https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Minimalist Nordic-style living room with clean lines",
		year: 2024,
		area: "95 m²",
		description: {
			en: [
				"This loft interior reworks a former industrial floor plate into a single open living space, held together by one long joinery unit that runs from the kitchen to the study. Structural columns are left exposed and painted to match the walls, absorbed into the plan rather than disguised.",
				"A restrained material palette — white walls, oak flooring, black steel — keeps the focus on proportion and daylight rather than decoration.",
			],
			ro: [
				"Acest interior de tip loft transformă un fost planșeu industrial într-un spațiu de locuit unic, deschis, ținut laolaltă de un singur corp de mobilier continuu, care se întinde de la bucătărie până la birou. Stâlpii structurali sunt lăsați vizibili și vopsiți în tonul pereților, integrați în plan, nu ascunși.",
				"O paletă de materiale restrânsă — pereți albi, pardoseală din stejar, oțel negru — păstrează atenția pe proporție și lumină naturală, nu pe decor.",
			],
		},
		gallery: SHARED_GALLERY,
	},
	{
		slug: "skyline-tower",
		title: "Skyline Tower",
		location: "Brașov, Romania",
		type: "Competition",
		image:
			"https://images.unsplash.com/photo-1764866557879-059e1db80a50?auto=format&fit=crop&w=1200&q=80",
		imageAlt: "Illuminated modern skyscraper against the evening skyline",
		year: 2025,
		area: "18,000 m²",
		description: {
			en: [
				"Skyline Tower is a competition entry for a mixed-use high-rise, exploring how a single tapering form can house offices below and housing above without a visible seam between the two. A public terrace at the transition floor marks that shift from the street.",
				"The proposal prioritizes a slender, efficient floor plate over height for its own sake, treating the skyline silhouette as a consequence of the plan rather than its starting point.",
			],
			ro: [
				"Skyline Tower este o propunere de concurs pentru un turn mixt, care explorează modul în care o singură formă conică poate găzdui birouri la bază și locuințe la partea superioară, fără o cusătură vizibilă între cele două. O terasă publică la etajul de tranziție marchează, din stradă, această schimbare de funcțiune.",
				"Propunerea prioritizează un planșeu zvelt și eficient în locul înălțimii de dragul înălțimii, tratând silueta din linia orizontului ca o consecință a planului, nu ca punct de plecare.",
			],
		},
		gallery: SHARED_GALLERY,
	},
];
