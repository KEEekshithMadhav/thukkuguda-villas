export interface Amenity {
  id: string;
  title: string;
  category:
    | 'Recreation & Sports'
    | 'Wellness'
    | 'Convenience'
    | 'Community & Entertainment'
    | 'Premium Villa Features'
    | 'Outdoor Lifestyle';
  categoryKey:
    | 'recreation-sports'
    | 'wellness'
    | 'convenience'
    | 'community-entertainment'
    | 'villa-features'
    | 'outdoor-lifestyle';
  image: string;
  description: string;
  highlights: string[];
  featured?: boolean;
}

export const amenityCategories = [
  { key: 'all', label: 'All Curated Amenities' },
  { key: 'recreation-sports', label: 'Recreation & Sports' },
  { key: 'wellness', label: 'Wellness' },
  { key: 'convenience', label: 'Convenience' },
  { key: 'community-entertainment', label: 'Community & Entertainment' },
  { key: 'villa-features', label: 'Premium Villa Features' },
  { key: 'outdoor-lifestyle', label: 'Outdoor Lifestyle' },
] as const;

export const amenitiesList: Amenity[] = [
  // ─── Recreation & Sports ──────────────────────────────────────────────────
  {
    id: 'badminton-court',
    title: 'Badminton Court',
    category: 'Recreation & Sports',
    categoryKey: 'recreation-sports',
    image: '/images/interiors/imgi_31_badminton.jpg',
    description:
      'High-ceiling indoor badminton facility designed with tournament-standard wooden flooring and glare-free illumination for year-round active play.',
    highlights: ['Tournament Wooden Flooring', 'Glare-Free LED Lighting', 'High-Clearance Ceiling'],
    featured: false,
  },
  {
    id: 'sports-recreation-area',
    title: 'Sports and Recreation Area',
    category: 'Recreation & Sports',
    categoryKey: 'recreation-sports',
    image: '/images/interiors/imgi_44_z4-play-800w.jpg',
    description:
      'Dedicated multi-sport synthetic arena and outdoor fitness perimeter framed by landscaped corridors, ideal for morning sprint routines and athletic training.',
    highlights: ['All-Weather Synthetic Turf', 'Outdoor Fitness Circuit', 'Dedicated Sprint & Jog Lane'],
    featured: false,
  },
  {
    id: 'childrens-play-area',
    title: "Children's Play Area",
    category: 'Recreation & Sports',
    categoryKey: 'recreation-sports',
    image: '/images/interiors/imgi_73_play-1200w.jpg',
    description:
      'Thoughtfully planned outdoor activity park featuring shock-absorbing play zones, climbing structures, and shaded bench pergolas for parents.',
    highlights: ['Child-Safe Impact Turf', 'Creative Play Structures', 'Shaded Family Pavilion'],
    featured: true,
  },

  // ─── Wellness ─────────────────────────────────────────────────────────────
  {
    id: 'yoga-meditation-hall',
    title: 'Yoga and Meditation Hall',
    category: 'Wellness',
    categoryKey: 'wellness',
    image: '/images/interiors/imgi_28_yoga-hall-v2.jpg',
    description:
      'Serene, sun-drenched sanctuary with sound-insulated acoustic paneling, polished teakwood floors, and floor-to-ceiling glass framing tranquil outdoor gardens.',
    highlights: ['Natural Ambient Light', 'Acoustic Sound Insulation', 'Polished Timber Flooring'],
    featured: true,
  },

  // ─── Convenience ──────────────────────────────────────────────────────────
  {
    id: 'convenience-store',
    title: 'Convenience Store',
    category: 'Convenience',
    categoryKey: 'convenience',
    image: '/images/interiors/imgi_34_provisional-store.jpg',
    description:
      'On-site daily provisions and grocery boutique situated within the community clubhouse, offering residents seamless everyday essentials without leaving the gates.',
    highlights: ['Daily Essentials & Groceries', 'Clubhouse Concierge Access', 'Gated Community Exclusivity'],
    featured: false,
  },

  // ─── Community & Entertainment ────────────────────────────────────────────
  {
    id: 'banquet-hall',
    title: 'Banquet Hall',
    category: 'Community & Entertainment',
    categoryKey: 'community-entertainment',
    image: '/images/interiors/imgi_29_banquet-hall.jpg',
    description:
      'Grand celebration venue featuring bespoke crystal chandeliers, integrated audio-visual infrastructure, and an adjoining private pre-function catering deck.',
    highlights: ['Double-Height Volume', 'Dedicated Catering Pantry', 'Integrated Audio-Visual Setup'],
    featured: true,
  },

  // ─── Premium Villa Features ───────────────────────────────────────────────
  {
    id: 'elegant-living-spaces',
    title: 'Elegant Living Spaces',
    category: 'Premium Villa Features',
    categoryKey: 'villa-features',
    image: '/images/interiors/imgi_53_air-light-living-800w.jpg',
    description:
      'Grand formal living pavilions with soaring ceiling heights, Italian-format marble tiling, and full-height architectural fenestrations that welcome abundant natural cross-ventilation.',
    highlights: ['Double-Height Spatial Volume', 'Full-Height Glass Facades', 'Seamless Courtyard Views'],
    featured: true,
  },
  {
    id: 'private-puja-room',
    title: 'Private Puja Room',
    category: 'Premium Villa Features',
    categoryKey: 'villa-features',
    image: '/images/interiors/imgi_57_puja-room-v3-800w.jpg',
    description:
      'Sacred, traditionally oriented prayer sanctum detailed with handcrafted ornamental stone lattice backdrops, brass accents, and serene ambient warm-glow lighting.',
    highlights: ['Strict Vastu-Aligned Orientation', 'Artisan Carved Lattice Work', 'Tranquil Acoustic Setting'],
    featured: false,
  },
  {
    id: 'private-lift',
    title: 'Private Lift',
    category: 'Premium Villa Features',
    categoryKey: 'villa-features',
    image: '/images/interiors/imgi_23_private-lift.jpg',
    description:
      'Seamless multi-level internal elevator offering whisper-quiet vertical transit across all villa floors, framed by polished architectural metallic trims and safety sensors.',
    highlights: ['Whisper-Quiet Electric Drive', 'All-Floor Villa Connectivity', 'Modern Architectural Cabin'],
    featured: false,
  },

  // ─── Outdoor Lifestyle ────────────────────────────────────────────────────
  {
    id: 'landscaped-deck',
    title: 'Landscaped Deck',
    category: 'Outdoor Lifestyle',
    categoryKey: 'outdoor-lifestyle',
    image: '/images/interiors/imgi_74_deck-1200w.jpg',
    description:
      'Elevated open-air leisure deck framed by seamless glass railings and tropical greenery, creating an effortless al fresco transition for evening entertaining.',
    highlights: ['Weather-Shielded Timber Deck', 'Frameless Glass Balustrades', 'Al Fresco Lounge Seating'],
    featured: true,
  },
  {
    id: 'relaxing-outdoor-sit-outs',
    title: 'Relaxing Outdoor Sit-outs',
    category: 'Outdoor Lifestyle',
    categoryKey: 'outdoor-lifestyle',
    image: '/images/interiors/imgi_75_sitouts-1200w.jpg',
    description:
      'Deep architectural verandahs and cantilevered garden patios sheltered from the afternoon sun, overlooking manicured private lawn avenues and perimeter foliage.',
    highlights: ['Cantilevered Shade Canopies', 'Manicured Lawn Frontage', 'Private Garden Reticence'],
    featured: false,
  },
];
