export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "villas" | "master-plan" | "location";
  title: string;
  description?: string;
  width: number;
  height: number;
}

export const galleryCategories = [
  { id: "all", label: "All Assets" },
  { id: "villas", label: "Villa Elevations" },
  { id: "master-plan", label: "Master Plan" },
  { id: "location", label: "Location & Aerial" },
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "v-400-ef-1",
    src: "/images/villas/villa-400-ef-01.jpg",
    alt: "Thukkuguda Villas — 400 Sq. Yds East Facing Villa Elevation",
    category: "villas",
    title: "400 Sq. Yds — East Facing Front Elevation",
    description: "6,000 Sq. Ft. built-up luxury villa featuring expansive glazing, cantilevered balconies, and double covered car porch.",
    width: 1452,
    height: 810,
  },
  {
    id: "v-400-nf-1",
    src: "/images/villas/villa-400-nf-01.jpg",
    alt: "Thukkuguda Villas — 400 Sq. Yds North Facing Elevation",
    category: "villas",
    title: "400 Sq. Yds — North Facing Architectural Elevation",
    description: "Striking contemporary facade with vertical louvers, warm stone cladding, and wide frontage setback.",
    width: 1452,
    height: 810,
  },
  {
    id: "v-350-ef-1",
    src: "/images/villas/villa-350-ef-01.jpg",
    alt: "Thukkuguda Villas — 350 Sq. Yds East Facing Elevation",
    category: "villas",
    title: "350 Sq. Yds — East Facing Villa Elevation",
    description: "5,555 Sq. Ft. built-up residence with grand three-tier architectural composition and manicured avenue frontage.",
    width: 1452,
    height: 810,
  },
  {
    id: "v-300-ef-1",
    src: "/images/villas/villa-300-ef-01.jpg",
    alt: "Thukkuguda Villas — 300 Sq. Yds East Facing Elevation",
    category: "villas",
    title: "300 Sq. Yds — East Facing Front Elevation",
    description: "4,777 Sq. Ft. built-up family villa offering generous terrace gardens and seamless indoor-outdoor transition.",
    width: 1452,
    height: 810,
  },
  {
    id: "v-300-wf-1",
    src: "/images/villas/villa-300-wf-01.jpg",
    alt: "Thukkuguda Villas — 300 Sq. Yds West Facing Elevation",
    category: "villas",
    title: "300 Sq. Yds — West Facing Architectural Elevation",
    description: "Thoughtfully shaded fenestrations with full-width overhangs and textured travertine stone accents.",
    width: 1452,
    height: 810,
  },
  {
    id: "v-267-ef-1",
    src: "/images/villas/villa-267-ef-01.jpg",
    alt: "Thukkuguda Villas — 267 Sq. Yds East Facing Elevation",
    category: "villas",
    title: "267 Sq. Yds — East Facing Front Elevation",
    description: "4,222 Sq. Ft. built-up villa designed for high spatial efficiency, large-format tiles, and branded sanitaryware.",
    width: 1452,
    height: 810,
  },
  {
    id: "v-267-wf-1",
    src: "/images/villas/villa-267-wf-01.jpg",
    alt: "Thukkuguda Villas — 267 Sq. Yds West Facing Elevation",
    category: "villas",
    title: "267 Sq. Yds — West Facing Front Elevation",
    description: "Crisp geometric geometry with warm wood-finish soffits, generous glass balconies, and private ground parking.",
    width: 1452,
    height: 810,
  },
  {
    id: "v-445-ef-1",
    src: "/images/villas/villa-445-ef-01.jpg",
    alt: "Thukkuguda Villas — 445 Sq. Yds East Facing Elevation",
    category: "villas",
    title: "445 Sq. Yds — Grand East Facing Residence",
    description: "Flagship executive estate typology featuring multi-vehicle parking bay and expansive rooftop leisure deck.",
    width: 1452,
    height: 810,
  },
  {
    id: "mp-1",
    src: "/images/master-plan/master-plan.jpg",
    alt: "Thukkuguda Villas — 23.26-Acre Master Layout Plan",
    category: "master-plan",
    title: "23.26-Acre Community Master Plan",
    description: "Master layout featuring 199 luxury villas across 23.26 acres. Villa sizes 267–445 Sq. Yds with 9M–16M wide roads, grand clubhouse (1,261 Sq.M / 13,565 Sq.Ft.) and three OSR green zones.",
    width: 1024,
    height: 599,
  },
  {
    id: "loc-route",
    src: "/images/location/connectivity-route.jpg",
    alt: "Thukkuguda Villas — Direct Connectivity Highway Route",
    category: "location",
    title: "Direct Connectivity Route to ORR & Airport",
    description: "Detailed aerial route showing 1.5 km to ORR, 5.4 km to Exit-14, and 9.7 km signal-free reach to RGIA Airport.",
    width: 1549,
    height: 859,
  },
  {
    id: "loc-context",
    src: "/images/location/aerial-context.jpg",
    alt: "Thukkuguda Villas — South Hyderabad Regional Context",
    category: "location",
    title: "Regional Positioning in South Hyderabad",
    description: "Strategic location proximate to Rajiv Gandhi International Airport, Srisailam Highway, and Nehru Outer Ring Road.",
    width: 1361,
    height: 766,
  },
  {
    id: "loc-site",
    src: "/images/location/site-aerial.jpg",
    alt: "Thukkuguda Villas — 24-Acre Contiguous Site Aerial",
    category: "location",
    title: "Aerial View of the Development Land Parcel",
    description: "Sprawling contiguous land parcel at Tukkuguda (Mankhal) framed by scenic green belts and viewpoint roads.",
    width: 1452,
    height: 1026,
  },
];
