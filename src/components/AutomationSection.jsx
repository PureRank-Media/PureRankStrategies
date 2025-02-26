// src/components/AutomationSection.jsx
import React from 'react';

function AutomationSection() {
  return (
    <section className="bg-dark-primary py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-dark-text-primary text-center">Experience the Power of Automated Marketing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Benefit 1: Lead Nurturing */}
          <div className="p-6 bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-dark-accent-blue">Automated Lead Nurturing</h3>
            <p className="text-dark-text-secondary mb-4">Automatically engage leads with personalized email sequences, moving them through the sales funnel and increasing conversion rates.</p>
            <p className="text-green-600 font-semibold">Result: Increased Lead Conversion by 40%</p>
          </div>

          {/* Benefit 2: Social Media Scheduling */}
          <div className="p-6 bg-dark-secondary rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-dark-accent-purple">Automated Social Media Scheduling</h3>
            <p className="text-dark-text-secondary mb-4">Schedule social media posts in advance, ensuring consistent engagement and freeing up your time to focus on other tasks.</p>
            <p className="text-green-600 font-semibold">Result: Saved 10 Hours Per Week</p>
          </div>
        </div>
        <div className="text-center mt-8">
        <a href="https://purerank.ac-page.com/schedule-audit" target="_blank" rel="noopener noreferrer">
            <button className="bg-dark-accent-purple text-dark-text-primary font-bold py-3 px-6 rounded-full hover:bg-purple-700">
              Schedule a Free Consultation to Discuss Your Automation Potential
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AutomationSection;