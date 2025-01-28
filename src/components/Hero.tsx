import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-float">
            Join the Future of Mobility
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Become a Remote AV Operator Today!
          </p>
          <button className="neon-border px-8 py-3 rounded-full font-medium flex items-center space-x-2 mx-auto hover:bg-neon-purple/10 transition-colors">
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;