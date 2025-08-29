import MarketplaceHero from "@/components/MarketplaceHero";
import FeaturesSection from "@/components/FeaturesSection";
import ProductShowcase from "@/components/ProductShowcase";

const Index = () => {
  return (
    <main className="min-h-screen">
      <MarketplaceHero />
      <ProductShowcase />
      <FeaturesSection />
    </main>
  );
};

export default Index;