import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <div className="relative h-8 bg-[#E5354E] overflow-hidden">
        <div className="absolute top-1/2 left-0 right-0 flex justify-around">
          {Array(20).fill('').map((_, i) => (
            <div 
              key={i} 
              className="w-12 h-[3px] bg-white"
            />
          ))}
        </div>
      </div>
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;