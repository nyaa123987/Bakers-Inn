import Hero from "./components/Hero";
import About from "./components/About";
import Range from "./components/Range";
import Section from "./components/Section";
import Section2 from "./components/Section2";
import KidsCorner from "./components/KidsCorner";
import RecipesSection from "./components/RecipesSection";
import Promotions from "./components/Promotions";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Range />
        <Section />
        <Section2 />
        <KidsCorner />
        <RecipesSection />
        <Promotions />
      </main>
    </>
  );
}
