import { Background }  from "@/components/background";
import { Navbar }      from "@/components/navbar";
import { Hero }        from "@/components/hero";
import { Features }    from "@/components/features";
import { HowItWorks }  from "@/components/how-it-works";
import { CtaSection }  from "@/components/cta-section";
import { Footer }      from "@/components/footer";

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
