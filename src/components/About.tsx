const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Fleet AI</h2>
          <p className="text-lg text-gray-300 mb-8">
          We are redefining the boundaries of automation by integrating human oversight into autonomous vehicle operations. Our system ensures seamless intervention when AI-driven vehicles encounter uncertainty, maintaining the illusion of perfect autonomy for passengers and the public. Through an advanced remote interface, our operators provide split-second decision-making in complex scenarios where full automation is not yet viable.

By leveraging cutting-edge virtual reality environments, biometric performance tracking, and real-time data analysis, we optimize human-AI collaboration to bridge the gaps in fully autonomous navigation. Our approach prioritizes efficiency, compliance, and the continuous evolution of self-driving technology, paving the way for a future where automation appears effortless, even when it isn't.
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