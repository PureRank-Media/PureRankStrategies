// src/components/FrameworkSection.jsx
import React from 'react';

function FrameworkSection() {
  return (
    <section className="bg-dark-primary py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-dark-text-primary">The PureRank Growth Framework: Your Roadmap to Automated Success</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand Definition */}
          <div className="p-6 bg-dark-secondary rounded-lg shadow-md hover:shadow-xl hover:animate-custom-toss transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-dark-accent-purple">1. Brand Definition</h3>
            <p className="text-dark-text-secondary">Craft a magnetic brand identity that resonates with your target audience and sets you apart.</p>
          </div>

          {/* Digital Establishment */}
          <div className="p-6 bg-dark-secondary rounded-lg shadow-md hover:shadow-xl hover:animate-custom-toss transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-dark-accent-blue">2. Digital Establishment</h3>
            <p className="text-dark-text-secondary">Build a powerful online presence to attract, engage, and convert your ideal customers.</p>
          </div>

          {/* Strategic Blueprint */}
          <div className="p-6 bg-dark-secondary rounded-lg shadow-md hover:shadow-xl hover:animate-custom-toss transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-green-400">3. Strategic Blueprint</h3>
            <p className="text-dark-text-secondary">Develop a data-driven marketing strategy with a core focus on automation.</p>
          </div>

          {/* Automation Implementation */}
          <div className="p-6 bg-dark-secondary rounded-lg shadow-md hover:shadow-xl hover:animate-custom-toss transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">4. Automation Implementation</h3>
            <p className="text-dark-text-secondary">Streamline your marketing efforts with intelligent automation tools and proven workflows.</p>
          </div>

          {/* Performance Elevation */}
          <div className="p-6 bg-dark-secondary rounded-lg shadow-md hover:shadow-xl hover:animate-custom-toss transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-red-400">5. Performance Elevation</h3>
            <p className="text-dark-text-secondary">Continuously optimize and refine your strategies to achieve peak performance and sustainable growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FrameworkSection;