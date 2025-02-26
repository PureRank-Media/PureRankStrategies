// src/components/AboutUs.jsx
import React from 'react';

function AboutUs() {
  return (
    <section className="py-16 bg-dark-primary">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="md:order-1">
          <img src="https://images.squarespace-cdn.com/content/v1/675de757774c7c6f0b58b390/1734207888669-AUULGG9FKMDAOM1P8OO8/unsplash-image-oUbzU87d1Gc.jpg?format=2500w" alt="PureRank Strategies Team" className="rounded-lg shadow-md" />
        </div>

        {/* Text Content */}
        <div className="md:order-2">
          <h2 className="text-3xl font-bold mb-4 text-dark-text-primary">Why Choose PureRank Strategies?</h2>
          <p className="text-dark-text-secondary mb-4">We are a results-driven marketing agency dedicated to helping businesses achieve sustainable growth through strategic and innovative solutions. We pride ourselves on our client-centric approach, our commitment to data-driven decision-making, and our proven track record of success.</p>
          <ul className="list-disc list-inside text-dark-text-secondary">
            <li>Proven Framework: The PureRank Growth Framework provides a clear roadmap to success.</li>
            <li>Intelligent Automation: We leverage the power of automation to streamline your marketing efforts.</li>
            <li>Data-Driven Results: We track key metrics and make data-driven adjustments.</li>
            <li>Dedicated Support: We provide dedicated support to help you achieve your marketing goals.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;