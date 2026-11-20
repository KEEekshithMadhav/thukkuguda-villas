import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ProjectOverview from '@/components/sections/ProjectOverview';
import Highlights from '@/components/sections/Highlights';
import VillaExplorer from '@/components/sections/VillaExplorer';
import MasterPlan from '@/components/sections/MasterPlan';
import Amenities from '@/components/sections/Amenities';
import LocationSection from '@/components/sections/LocationSection';
import EnquirySection from '@/components/sections/EnquirySection';

export default function HomePage() {
  return (
    <>
      {/* 1. Cinematic Hero */}
      <HeroSection />

      {/* 2. Project Overview */}
      <ProjectOverview />

      {/* 3. Project Highlights */}
      <Highlights />

      {/* 4. Interactive Villa Exploration */}
      <VillaExplorer />

      {/* 5. Master Plan Viewer */}
      <MasterPlan />

      {/* 6. Amenities */}
      <Amenities />

      {/* 7. Location & Connectivity */}
      <LocationSection />

      {/* 8. Enquiry Section */}
      <EnquirySection />
    </>
  );
}
