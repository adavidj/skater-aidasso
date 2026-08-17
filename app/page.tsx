import { Hero } from "@/components/sections/hero";
import { Benefits } from "@/components/sections/benefits";
import { FeaturedProgram } from "@/components/sections/featuredPrograms";
import { ActivityTracking } from "@/components/sections/activityTracking";
import { CurrentEvents } from "@/components/sections/currentEvents";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCTA } from "@/components/sections/finalCTA";
import { Footer } from "@/components/shared/layout/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <FeaturedProgram />
      <ActivityTracking />
      <CurrentEvents  />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
    
  );
}