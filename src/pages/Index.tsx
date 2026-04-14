import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import LocalesSection from "@/components/LocalesSection";
import MenuSection from "@/components/MenuSection";
import EventsSection from "@/components/EventsSection";
import ExperienceSection from "@/components/ExperienceSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import SocialSection from "@/components/SocialSection";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => (
  <div id="top" className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <StatsSection />
    <LocalesSection />
    <MenuSection />
    <EventsSection />
    <ExperienceSection />
    <GallerySection />
    <ReviewsSection />
    <SocialSection />
    <LocationSection />
    <FAQSection />
    <CTASection />
    <Footer />
    <WhatsAppButton />
    <ScrollToTop />
  </div>
);

export default Index;
