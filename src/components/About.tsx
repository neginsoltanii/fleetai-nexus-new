const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About FleetAI</h2>
          <p className="text-lg text-gray-300 mb-8">
            We're pioneering the future of autonomous vehicle operations through a
            revolutionary blend of AI technology and human expertise. Our platform
            enables remote operators to seamlessly intervene when autonomous
            systems need human guidance, ensuring safe and efficient vehicle
            operations worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Research</h3>
              <p className="text-gray-400">
                Leading innovation in human-autonomy teaming
              </p>
            </div>
            <div className="glass-panel p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Technology</h3>
              <p className="text-gray-400">
                State-of-the-art remote operation platform
              </p>
            </div>
            <div className="glass-panel p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Training</h3>
              <p className="text-gray-400">
                Immersive XR-based operator training
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;