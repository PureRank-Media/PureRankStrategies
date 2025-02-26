// src/components/CaseStudies.jsx
import React from 'react';

function CaseStudies() {
  return (
    <section className="py-16 bg-dark-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-dark-text-primary text-center">Real Results, Real Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Case Study 1 */}
          <div className="bg-dark-secondary rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-dark-accent-blue">Increased Website Traffic by 150% for Local Cafe</h3>
            <p className="text-dark-text-secondary mb-4">We helped a local cafe increase website traffic by 150% through SEO optimization and content marketing.</p>
            <p className="text-green-400 font-semibold">Results: 150% Increase in Website Traffic, 50% Increase in Online Orders</p>
          </div>

          {/* Case Study 2 */}
          <div className="bg-dark-secondary rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-dark-accent-purple">Generated 100 Qualified Leads per Month for SaaS Company</h3>
            <p className="text-dark-text-secondary mb-4">We helped a SaaS company generate 100 qualified leads per month through targeted social media advertising and lead nurturing.</p>
            <p className="text-green-400 font-semibold">Results: 100 Qualified Leads per Month, 30% Increase in Sales Pipeline</p>
          </div>

           {/* Case Study 3 */}
           <div className="bg-dark-secondary rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-dark-accent-purple">Boost Conversion for Real Estate Company</h3>
            <p className="text-dark-text-secondary mb-4">Boosted conversion for real estate company through SEO optimization and lead magnet generation.</p>
            <p className="text-green-400 font-semibold">Results: Conversion increased by 15%, closing deals more effectively</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;