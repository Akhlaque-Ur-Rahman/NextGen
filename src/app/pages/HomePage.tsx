import { Hero } from '../components/Hero';
import { Awards } from '../components/Awards';
import { TrustIndicators } from '../components/TrustIndicators';
import { Features } from '../components/Features';
import { HomeProducts } from '../components/HomeProducts';
import { ClientShowcase } from '../components/ClientShowcase';
import { Process } from '../components/Process';
import { Testimonials } from '../components/Testimonials';
import { CTASection } from '../components/CTASection';
import { FAQ } from '../components/FAQ';

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <Awards />
      <Features />
      <HomeProducts />
      <Process />
      <Testimonials />
      <ClientShowcase />
      <CTASection />
      <FAQ />
    </>
  );
}
