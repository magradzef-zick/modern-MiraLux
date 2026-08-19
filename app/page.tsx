import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { Destinations } from "./components/Destinations";
import { Signature } from "./components/Signature";
import { Services } from "./components/Services";
import { Packages } from "./components/Packages";
import { Reviews } from "./components/Reviews";
import { ContactCta } from "./components/ContactCta";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Destinations />
        <Signature />
        <Services />
        <Packages />
        <Reviews />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
