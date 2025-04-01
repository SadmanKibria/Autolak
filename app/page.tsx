import Hero from "@/components/hero";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/why-choose-us";
import ContactCta from "@/components/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <ContactCta />
    </>
  );
}
