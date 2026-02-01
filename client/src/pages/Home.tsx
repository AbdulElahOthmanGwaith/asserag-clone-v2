import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import Services from '@/components/Services';
import PrinciplesSection from '@/components/PrinciplesSection';
import StatsSection from '@/components/StatsSection';
import ClientsSection from '@/components/ClientsSection';
import ProblemSolversSection from '@/components/ProblemSolversSection';
import ProjectsGallery from '@/components/ProjectsGallery';
import AsenwareShowcase from '@/components/AsenwareShowcase';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

/**
 * Home Page - Asserag Company
 * 
 * Design Philosophy: Professional Industrial Aesthetic
 * - Color Scheme: Deep Blue (#003d82) + Bright Red (#ff4444)
 * - Typography: Bold, hierarchical, modern sans-serif
 * - Layout: Full-width sections with generous whitespace
 * - Imagery: Professional medical factory environments
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <Services />
        <AsenwareShowcase />
        <ProjectsGallery />
        <PrinciplesSection />
        <StatsSection />
        <ClientsSection />
        <ProblemSolversSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
