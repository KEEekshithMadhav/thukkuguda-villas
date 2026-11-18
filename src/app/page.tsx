import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ProjectOverview from '@/components/sections/ProjectOverview';
import Highlights from '@/components/sections/Highlights';
import VillaConfigurations from '@/components/sections/VillaConfigurations';
import VillaExplorer from '@/components/sections/VillaExplorer';
import MasterPlan from '@/components/sections/MasterPlan';
import Amenities from '@/components/sections/Amenities';
import ArchitecturalGallery from '@/components/sections/ArchitecturalGallery';
import LocationSection from '@/components/sections/LocationSection';
import EnquirySection from '@/components/sections/EnquirySection';
import NexHouzWatermark from '@/components/ui/NexHouzWatermark';

export default function HomePage() {
  return (
    <>
      {/* 1. Cinematic Hero */}
      <HeroSection />

      {/* 2. Project Overview */}
      <ProjectOverview />

      {/* Subtle NexHouz watermark in natural whitespace */}
      <NexHouzWatermark />

      {/* 3. Project Highlights */}
      <Highlights />

      {/* 4. Villa Configurations */}
      <VillaConfigurations />

      {/* 5. Interactive Villa Exploration */}
      <VillaExplorer />

      {/* 6. Master Plan Viewer */}
      <MasterPlan />

      {/* Subtle NexHouz watermark in natural whitespace */}
      <NexHouzWatermark />

      {/* 7. Amenities */}
      <Amenities />

      {/* 8. Architectural Gallery */}
      <ArchitecturalGallery />

      {/* 9. Location & Connectivity */}
      <LocationSection />

      {/* 10. Enquiry Section */}
      <EnquirySection />
    </>
  );
}
