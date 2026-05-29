import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Explorer from "@/components/sections/explorer/Explorer";
import Hero from "@/components/sections/Hero";
import SkillsExpertise from "@/components/sections/SkillsExpertise";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="top">
        <Hero />
        <Explorer />
        <SkillsExpertise />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
