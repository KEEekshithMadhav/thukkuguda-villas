export interface Amenity {
  id: string;
  title: string;
  category:
    | 'Recreation & Sports'
    | 'Wellness'
    | 'Community & Entertainment'
    | 'Premium Villa Features'
    | 'Outdoor Lifestyle';
  categoryKey:
    | 'recreation-sports'
    | 'wellness'
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
  { key: 'community-entertainment', label: 'Community & Entertainment' },
  { key: 'villa-features', label: 'Premium Villa Features' },
  { key: 'outdoor-lifestyle', label: 'Outdoor Lifestyle' },
] as const;

export const amenitiesList: Amenity[] = [
  // ─── Recreation & Sports ──────────────────────────────────────────────────
  {
    id: 'snooker-games-lounge',
    title: 'Billiards & Indoor Games Lounge',
    category: 'Recreation & Sports',
    categoryKey: 'recreation-sports',
    image: '/images/interiors/indoor-games-snooker.jpg',
    description:
      'An exclusive club-level indoor games suite featuring a tournament-grade snooker table, pendant illumination, leather lounge seating, and an integrated refreshment bar.',
    highlights: ['Tournament-Grade Snooker Table', 'Executive Leather Lounge', 'Clubhouse Refreshment Bar'],
    featured: true,
  },
  {
    id: 'sports-recreation-circuit',
    title: 'Sports & Recreation Circuit',
    category: 'Recreation & Sports',
    categoryKey: 'recreation-sports',
    image: '/images/interiors/sports-circuit.jpg',
    description:
      'Dedicated multi-sport synthetic arena and outdoor fitness perimeter framed by landscaped corridors, ideal for morning sprint routines and athletic training.',
    highlights: ['All-Weather Synthetic Track', 'Outdoor Fitness Circuit', 'Dedicated Sprint & Jog Lane'],
    featured: false,
  },

  // ─── Wellness ─────────────────────────────────────────────────────────────
  {
    id: 'yoga-meditation-sanctuary',
    title: 'Yoga and Meditation Sanctuary',
    category: 'Wellness',
    categoryKey: 'wellness',
    image: '/images/interiors/yoga-studio.jpg',
    description:
      'A sun-drenched architectural wellness pavilion with full-height garden glazing, recessed ambient halo illumination, natural timber flooring, and sound-insulating acoustic finishes.',
    highlights: ['Backlit Zen Feature Wall', 'Full-Height Garden Glazing', 'Natural Hardwood Flooring'],
    featured: true,
  },

  // ─── Community & Entertainment ────────────────────────────────────────────
  {
    id: 'banquet-hall',
    title: 'Grand Banquet Hall',
    category: 'Community & Entertainment',
    categoryKey: 'community-entertainment',
    image: '/images/interiors/banquet-hall.png',
    description:
      'A majestic celebratory venue featuring golden architectural accents, geometric coffered ceiling lighting, crystal chandeliers, and an adjoining private pre-function catering deck.',
    highlights: ['Double-Height Volume', 'Bespoke Golden Detailing', 'Pre-Function Catering Area'],
    featured: true,
  },

  // ─── Premium Villa Features ───────────────────────────────────────────────
  {
    id: 'private-mandir-puja-room',
    title: 'Private Mandir & Puja Room',
    category: 'Premium Villa Features',
    categoryKey: 'villa-features',
    image: '/images/interiors/puja-room.jpg',
    description:
      'A serene prayer sanctum detailed with a backlit carved jaali arch, polished marble pedestal, hanging brass bells, and bespoke handcrafted teakwood niches for daily devotion.',
    highlights: ['Strict Vastu-Aligned Orientation', 'Backlit Carved Jaali Arch', 'Handcrafted Teakwood Niches'],
    featured: true,
  },
  {
    id: 'master-bedroom-suite',
    title: 'Master Bedroom Suite',
    category: 'Premium Villa Features',
    categoryKey: 'villa-features',
    image: '/images/interiors/master-bedroom.jpg',
    description:
      'A calming sanctuary featuring concealed headboard cove lighting, warm natural oak wood accents, plush finishes, and floor-to-ceiling glass framing private balcony views.',
    highlights: ['Concealed Architectural Cove Lighting', 'Warm Natural Oak Paneling', 'Expansive Balcony Glazing'],
    featured: true,
  },
  {
    id: 'elegant-living-spaces',
    title: 'Elegant Living Spaces',
    category: 'Premium Villa Features',
    categoryKey: 'villa-features',
    image: '/images/interiors/living-spaces.jpg',
    description:
      'Grand formal living pavilions with soaring ceiling heights, Italian-format marble tiling, and full-height architectural fenestrations that welcome abundant natural cross-ventilation.',
    highlights: ['Double-Height Spatial Volume', 'Full-Height Glass Facades', 'Seamless Courtyard Views'],
    featured: false,
  },
  {
    id: 'formal-dining-lounge',
    title: 'Formal Dining & Family Lounge',
    category: 'Premium Villa Features',
    categoryKey: 'villa-features',
    image: '/images/interiors/dining-lounge.jpg',
    description:
      'Spacious open-concept dining hall with polished marble floors and designer chandelier, connecting seamlessly to internal living zones and outdoor garden terraces.',
    highlights: ['Italian Marble Flooring', 'Full-Size 8-Seater Dining Space', 'Seamless Garden Terrace Access'],
    featured: false,
  },

  // ─── Outdoor Lifestyle ────────────────────────────────────────────────────
  {
    id: 'central-community-park',
    title: 'Central Community Park & Lawn',
    category: 'Outdoor Lifestyle',
    categoryKey: 'outdoor-lifestyle',
    image: '/images/interiors/community-lawn.jpg',
    description:
      'An expansive, manicured central community lawn and green park surrounded by villa avenues, featuring sculptural viewing pavilions and paved walking promenades.',
    highlights: ['Manicured Central Green Lawn', 'Sculptural Viewing Pavilions', 'Paved Walking Promenades'],
    featured: true,
  },

  // ─── Premium Villa Features (Continued) ───────────────────────────────────
  {
    id: 'private-lift',
    title: 'Private Internal Lift',
    category: 'Premium Villa Features',
    categoryKey: 'villa-features',
    image: '/images/interiors/private-lift.jpg',
    description:
      'Seamless multi-level internal elevator offering whisper-quiet vertical transit across all villa floors, framed by polished architectural metallic trims and safety sensors.',
    highlights: ['Whisper-Quiet Electric Drive', 'All-Floor Villa Connectivity', 'Modern Architectural Cabin'],
    featured: false,
  },
  {
    id: 'open-plan-living-verandah',
    title: 'Living & Verandah Lounge',
    category: 'Premium Villa Features',
    categoryKey: 'villa-features',
    image: '/images/interiors/living-verandah.jpg',
    description:
      'Naturally illuminated family entertainment lounge featuring dual sliding glass doors that open directly onto private green lawns and landscaped perimeters.',
    highlights: ['Dual Sliding Garden Doors', 'Sunlit Living Layout', 'Direct Verandah Transition'],
    featured: false,
  },

  // ─── Outdoor Lifestyle (Continued) ────────────────────────────────────────
  {
    id: 'relaxing-outdoor-sit-outs',
    title: 'Relaxing Outdoor Sit-outs',
    category: 'Outdoor Lifestyle',
    categoryKey: 'outdoor-lifestyle',
    image: '/images/interiors/outdoor-sitouts.jpg',
    description:
      'Deep architectural verandahs and cantilevered garden patios sheltered from the afternoon sun, overlooking manicured private lawn avenues and perimeter foliage.',
    highlights: ['Cantilevered Shade Canopies', 'Manicured Lawn Frontage', 'Private Garden Reticence'],
    featured: false,
  },
];
