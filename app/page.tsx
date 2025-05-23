import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { Services } from "@/components/home/services";
import { Testimonials } from "@/components/home/testimonials";
import { UpcomingEvents } from "@/components/home/upcoming-events";
import { CTA } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <UpcomingEvents />
      <CTA />
    </>
  );
}