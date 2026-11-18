export interface VillaConfig {
  id: string;
  plotSize: string;
  plotSqYds: number;
  builtUpArea: string;
  builtUpSqFt: number;
  facingOptions: string[];
  features: string[];
  image: string;
  galleryImages: string[];
}

export const villaConfigurations: VillaConfig[] = [
  {
    id: "villa-267",
    plotSize: "267 Sq. Yds",
    plotSqYds: 267,
    builtUpArea: "4,222 Sq. Ft.",
    builtUpSqFt: 4222,
    facingOptions: ["East Facing", "West Facing"],
    features: [
      "Large-format Tiles",
      "Branded Fittings",
      "Smart, Functional Layout",
      "Wide 40-ft Road Access",
      "Landscaped Avenues",
      "Grand Clubhouse Access",
    ],
    image: "/images/villas/villa-267.jpg",
    galleryImages: [
      "/images/villas/villa-267-ef-01.jpg",
      "/images/villas/villa-267-ef-02.jpg",
      "/images/villas/villa-267-ef-03.jpg",
      "/images/villas/villa-267-wf-01.jpg",
      "/images/villas/villa-267-wf-02.jpg",
      "/images/villas/villa-267-wf-03.jpg",
    ],
  },
  {
    id: "villa-300",
    plotSize: "300 Sq. Yds",
    plotSqYds: 300,
    builtUpArea: "4,777 Sq. Ft.",
    builtUpSqFt: 4777,
    facingOptions: ["East Facing", "West Facing"],
    features: [
      "Large-format Tiles",
      "Branded Fittings",
      "Smart, Functional Layout",
      "Wide 40-ft & 60-ft Road Access",
      "Landscaped Avenues",
      "Grand Clubhouse Access",
    ],
    image: "/images/villas/villa-300.jpg",
    galleryImages: [
      "/images/villas/villa-300-ef-01.jpg",
      "/images/villas/villa-300-ef-02.jpg",
      "/images/villas/villa-300-ef-03.jpg",
      "/images/villas/villa-300-wf-01.jpg",
      "/images/villas/villa-300-wf-02.jpg",
      "/images/villas/villa-300-wf-03.jpg",
    ],
  },
  {
    id: "villa-350",
    plotSize: "350 Sq. Yds",
    plotSqYds: 350,
    builtUpArea: "5,555 Sq. Ft.",
    builtUpSqFt: 5555,
    facingOptions: ["East Facing"],
    features: [
      "Large-format Tiles",
      "Branded Fittings",
      "Smart, Functional Layout",
      "Wide 40-ft Road Access",
      "Landscaped Avenues",
      "Grand Clubhouse Access",
    ],
    image: "/images/villas/villa-350.jpg",
    galleryImages: [
      "/images/villas/villa-350-ef-01.jpg",
      "/images/villas/villa-350-ef-02.jpg",
      "/images/villas/villa-350-ef-03.jpg",
    ],
  },
  {
    id: "villa-400",
    plotSize: "400 Sq. Yds",
    plotSqYds: 400,
    builtUpArea: "6,000 Sq. Ft.",
    builtUpSqFt: 6000,
    facingOptions: ["East Facing", "West Facing", "North Facing"],
    features: [
      "Large-format Tiles",
      "Branded Fittings",
      "Smart, Functional Layout",
      "Wide 40-ft & 60-ft Road Access",
      "Landscaped Avenues",
      "Grand Clubhouse Access",
    ],
    image: "/images/villas/villa-400.jpg",
    galleryImages: [
      "/images/villas/villa-400-ef-01.jpg",
      "/images/villas/villa-400-ef-02.jpg",
      "/images/villas/villa-400-ef-03.jpg",
      "/images/villas/villa-400-wf-01.jpg",
      "/images/villas/villa-400-wf-02.jpg",
      "/images/villas/villa-400-wf-03.jpg",
      "/images/villas/villa-400-nf-01.jpg",
      "/images/villas/villa-400-nf-02.jpg",
      "/images/villas/villa-400-nf-03.jpg",
      "/images/villas/villa-400-nf-04.jpg",
    ],
  },
];

export const villasData = villaConfigurations;
