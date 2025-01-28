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
        <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-white">
          <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap">
            {Array(20).fill('').map((_, i) => (
              <span key={i} className="inline-block w-20 h-full mx-4 bg-white"></span>
            ))}
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;