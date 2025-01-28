import { Globe, Bot, User, Settings } from "lucide-react";

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Operations",
    description: "Control autonomous vehicles from anywhere in the world with our advanced remote operation platform.",
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "AI-Human Collaboration",
    description: "Seamlessly intervene when AI needs human expertise for complex navigation scenarios.",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "XR Training",
    description: "Learn to operate autonomous vehicles through immersive virtual reality simulations.",
  },
  {
    icon: <User className="w-8 h-8" />,
    title: "Flexible Work Model",
    description: "Join our network of remote operators and work on your own schedule.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-lg card-hover"
            >
              <div className="text-neon-purple mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;