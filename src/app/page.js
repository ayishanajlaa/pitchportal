"use client";
import CoreFeatures from "@/components/CoreFeatures";
import PitchPortalFeatures from "@/components/PitchPortalFeatures";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
       <Services />
       <PitchPortalFeatures />
       <Work />
       <Pricing />
       <Testimonials />
       <CoreFeatures />
       <Team />
       <Subscribe />


       {/* <PitchPortalLanding /> */}

       </div>
  );
}
