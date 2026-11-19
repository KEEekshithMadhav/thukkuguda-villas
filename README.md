# Thukkuguda Villas — Premium Real Estate Website

> Official website for **Thukkuguda Villas**, a premier gated villa community spanning 24 acres in Tukkuguda (Mankhal), South Hyderabad, Telangana.

---

## Project Overview

| Detail | Value |
|--------|-------|
| **Project Name** | Thukkuguda Villas |
| **Location** | Tukkuguda (Mankhal), South Hyderabad |
| **Total Area** | 24 Acres |
| **Total Villas** | 202 |
| **Plot Sizes** | 267 – 400 Sq. Yds |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS with custom design system |
| **Animations** | Framer Motion + GSAP |
| **3D Visuals** | React Three Fiber + Drei |
| **Icons** | Lucide React |
| **Font** | Playfair Display (headings), Inter (body) |
| **Lead Capture** | Google Apps Script |

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `forest` | `#0B3D2E` | Primary brand color, backgrounds |
| `ivory` | `#FAF7EE` | Light backgrounds, text on dark |
| `gold` | `#D4AF7A` | Accents, dividers, highlights |
| `charcoal` | `#2B2B2B` | Body text |
| `beige` | `#E8DFD1` | Section backgrounds |

### Typography

- **Headings:** Playfair Display (serif) — elegant & authoritative
- **Body:** Inter (sans-serif) — clean & readable

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone or navigate to the project
cd thukkuguda-villas

# Install dependencies
npm install --legacy-peer-deps

# Copy the environment file
cp .env.example .env.local

# Edit .env.local with your values
# (see Environment Variables section below)
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
# Google Apps Script Web App URL for lead capture form submissions
GOOGLE_SCRIPT_URL=YOUR_GOOGLE_APPS_SCRIPT_URL_HERE
```

### Setting Up Google Apps Script

1. Create a Google Sheet to store leads.
2. Go to **Extensions → Apps Script**.
3. Paste the provided `google-script.gs` code.
4. Deploy as a **Web App** (access: Anyone).
5. Copy the deployment URL and paste it as `GOOGLE_SCRIPT_URL` in `.env.local`.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles & design tokens
│   ├── layout.tsx         # Root layout with fonts & metadata
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # Reusable UI components
│   ├── sections/          # Page sections (Hero, About, Villas, etc.)
│   └── layout/            # Header, Footer, Navigation
├── data/
│   ├── project.ts         # Core project data & amenities
│   ├── villas.ts          # Villa configurations (267–400 Sq.Yds)
│   ├── location.ts        # Location highlights
│   └── gallery.ts         # Gallery items & categories
└── lib/
    └── utils.ts           # Shared utilities

public/
├── images/
│   ├── hero/              # Hero section images
│   ├── villas/            # Villa type images
│   ├── interiors/         # Interior photography
│   ├── exteriors/         # Exterior photography
│   ├── landscaping/       # Landscaping & green areas
│   ├── gallery/           # Gallery images
│   ├── master-plan/       # Site master plan
│   └── placeholder.svg    # Placeholder for missing images
└── models/
    └── villas/            # 3D villa models (.glb/.gltf)
```

---

## Key Pages & Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen video/image with headline and CTA |
| **About** | Project overview, 24 acres, 202 villas |
| **Villa Types** | Interactive villa configurator (267–400 Sq.Yds) |
| **Amenities** | Clubhouse, roads, landscaping, security |
| **Gallery** | Filterable image gallery |
| **Location** | Map + proximity highlights |
| **Contact / Lead Form** | Inquiry form → Google Sheets |

---

## Contact Information

- **Phone 1:** +91 98858 58529
- **Phone 2:** +91 85858 54853
- **Email:** info@thukkugudavillas.com
- **Address:** Tukkuguda (Mankhal), South Hyderabad, Telangana – 501 359

---

## License

© 2024 Thukkuguda Villas. All rights reserved. Unauthorized reproduction or distribution of any content from this website is strictly prohibited.
