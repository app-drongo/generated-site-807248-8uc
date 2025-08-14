import CenteredHero from '../components/CenteredHero';
import CardsFeatures from '../components/CardsFeatures';
import LinksFooter from '../components/LinksFooter';
import PricingTable from '../components/PricingTable';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section id="hero" className="scroll-mt-16">
        <CenteredHero />
      </section>
      <section id="features" className="scroll-mt-16">
        <CardsFeatures />
      </section>
      <section id="cards" className="scroll-mt-16">
        <PricingTable />
      </section>
      <section id="footer" className="scroll-mt-16">
        <LinksFooter />
      </section>
    </main>
  );
}