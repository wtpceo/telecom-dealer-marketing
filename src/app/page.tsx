import Hero from '@/components/Hero';
import MarketOpportunity from '@/components/MarketOpportunity';
import CustomerJourney from '@/components/CustomerJourney';
import PainPoints from '@/components/PainPoints';
import OfflineStrategy from '@/components/OfflineStrategy';
import OnlineStrategy from '@/components/OnlineStrategy';
import CaseStudies from '@/components/CaseStudies';
import Services from '@/components/Services';
import CTAFooter from '@/components/CTAFooter';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <MarketOpportunity />
      <CustomerJourney />
      <PainPoints />
      <OfflineStrategy />
      <OnlineStrategy />
      <CaseStudies />
      <Services />
      <CTAFooter />
      <FloatingCTA />
    </main>
  );
}
