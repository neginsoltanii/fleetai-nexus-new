import { useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const DeltaFleetInfo = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center text-center px-4 py-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Delta Fleet AI – Redefining the Future of Human-Autonomy Collaboration
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Navigating the challenges of remote intervention in an autonomous world.
          </p>
          <Button
            variant="outline"
            onClick={() => scrollToSection("about")}
            className="group"
          >
            Learn More
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-secondary/50">
        <div className="container max-w-4xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Delta Fleet AI</h2>
          <div className="prose prose-invert max-w-none">
            <p className="mb-4">
              Delta Fleet AI is a speculative fictional company and part of the <strong>Autonomous Last Mile</strong> research project funded by Vinnova under the call <a href="https://www.vinnova.se/en/calls-for-proposals/future-prototypes-in-sustainable-mobility/shape-the-sustainable-solutions-of-the-2023-04105/" className="text-[#D6BCFA] hover:text-[#E5DEFF] hover:underline">Shape the Sustainable Solutions of the Future within the Mobility or Food System</a>.
            </p>
            <p className="mb-4">
              <strong>Autonomous Last Mile</strong> is a collaboration between <a href="https://www.ri.se/en/expertise-areas/projects/autonomous-last-mile" className="text-[#D6BCFA] hover:text-[#E5DEFF] hover:underline">RISE Research Institutes of Sweden</a> and the <a href="https://www.su.se/english/research/research-projects/autonomous-last-mile" className="text-[#D6BCFA] hover:text-[#E5DEFF] hover:underline">Department of Computer and Systems Sciences at Stockholm University</a>.
            </p>
            <p className="mb-8">
              This project gives an interactive vision of a future where current trends come together to create an unequal, unsafe, and unwanted vision of our future society. By exposing people today to possible future situation where they must quickly perform only the most stressful and complex of mobility tasks, in quick succession, under economic and social constraints that give them no other option we hope to encourage designers, developers and end users of these technologies to ensure that it does not come to pass.
            </p>
          </div>
        </div>
      </section>

      {/* Research Team Section */}
      <section className="py-16">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet the Research Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Asreen Rostami",
                role: "Senior Researcher (PI)",
                affiliation: "RISE Research Institutes of Sweden",
                email: "asreen.rostami@ri.se",
                image: "/placeholder.svg"
              },
              {
                name: "Dr. Donald McMillan",
                role: "Associate Professor (Co-PI)",
                affiliation: "Department of Computer and Systems Sciences, Stockholm University",
                email: "donald.mcmillan@dsv.su.se",
                image: "/placeholder.svg"
              },
              {
                name: "Dr. Kasper Karlgren",
                role: "Researcher",
                affiliation: "Department of Computer and Systems Sciences, Stockholm University",
                email: "kasper@dsv.su.se",
                image: "/placeholder.svg"
              },
              {
                name: "Negin Soltani",
                role: "Research Assistant",
                affiliation: "RISE Research Institutes of Sweden",
                email: "negin.soltani@ri.se",
                image: "/placeholder.svg"
              }
            ].map((member, index) => (
              <div key={index} className="glass-panel p-6 rounded-lg text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-400 mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-4">{member.affiliation}</p>
                <p className="text-sm">
                  <a href={`mailto:${member.email}`} className="text-primary hover:underline">
                    📧 {member.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Section */}
      <section id="funding" className="py-16 bg-secondary/50">
        <div className="container max-w-4xl px-4">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/3">
              <img
                src="/placeholder.svg"
                alt="Vinnova Logo"
                className="w-full max-w-[200px]"
              />
              <a
                href="mailto:vinnova@vinnova.se"
                className="text-primary hover:underline mt-4 block"
              >
                📧 vinnova@vinnova.se
              </a>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Funding Agency</h2>
              <p className="text-gray-300 mb-4">
                Vinnova offers project partners to design future prototypes. The aim is to stimulate the ability to imagine and understand different futures and to create dialogue to act more strategically and together shape the mobility or food system of the future for long-term sustainable development.
              </p>
              <p className="text-gray-300">
                This project is funded by Vinnova, supporting research on sustainable mobility solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeltaFleetInfo;
