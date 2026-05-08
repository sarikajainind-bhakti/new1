import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Trending } from "./components/Trending";
import { WorldCuisine } from "./components/WorldCuisine";
import { Recipes } from "./components/Recipes";
import { DietHealthy } from "./components/DietHealthy";
import { Categories } from "./components/Categories";
import { Latest } from "./components/Latest";
import { WhyChoose } from "./components/WhyChoose";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Trending />
      <WorldCuisine />
      <Recipes />
      <DietHealthy />
      <Categories />
      <Latest />
      <WhyChoose />
      <Footer />
    </div>
  );
}

export default App;
