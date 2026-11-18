export interface LocationHighlight {
  id: string;
  title: string;
  duration: string;
  distance?: string;
  description: string;
  icon: "road" | "plane" | "train" | "school" | "building" | "briefcase";
}

export const locationHighlights: LocationHighlight[] = [
  {
    id: "orr",
    title: "Outer Ring Road (ORR Exit 14)",
    duration: "5 Minutes",
    distance: "1.5 km to ORR, 5.4 km to Exit-14",
    description: "Rapid, signal-free access to Hyderabad's 8-lane arterial ring road.",
    icon: "road",
  },
  {
    id: "rgia",
    title: "RGIA Airport",
    duration: "10 Minutes",
    distance: "9.7 km",
    description: "Effortless reach to Rajiv Gandhi International Airport via Airport Viewpoint Road.",
    icon: "plane",
  },
  {
    id: "wtc",
    title: "World Trade Center (WTC)",
    duration: "10 Minutes",
    distance: "6.5 km",
    description: "Prime proximity to South Hyderabad's global corporate and business center.",
    icon: "building",
  },
  {
    id: "metro",
    title: "Proposed Metro Station",
    duration: "5 Minutes",
    description: "Direct rapid transit connectivity into the central Hyderabad urban network.",
    icon: "train",
  },
  {
    id: "schools",
    title: "Premier International Schools",
    duration: "Under 15 Mins",
    distance: "4.1 km to 14.9 km",
    description: "Near Sloka (4.1 km), Velocity (5 km), Aga Khan Academy (11 km), Manchester Global (13 km), and DPS (14.9 km).",
    icon: "school",
  },
  {
    id: "financial-district",
    title: "Financial District / IT Hub",
    duration: "28 Minutes",
    description: "Smooth ORR commute to Nanakramguda, Gachibowli, and the financial corridor.",
    icon: "briefcase",
  },
];

export const nearbySchools = [
  { name: "Sloka International School", distance: "4.1 km" },
  { name: "Velocity International School", distance: "5 km" },
  { name: "Aga Khan Academy", distance: "11 km" },
  { name: "Manchester Global School", distance: "13 km" },
  { name: "Delhi Public School (DPS)", distance: "14.9 km" },
];
