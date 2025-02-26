import React from 'react';

function ContactSection() {
  return (
    <section className="py-16 bg-purple-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Ready to Unlock Your Growth Potential?</h2>
        <p className="text-gray-700 mb-8">Contact us today for a free consultation and learn how the PureRank Growth Framework can help you achieve your marketing goals.</p>
        <a href="https://purerank.ac-page.com/schedule-audit" target="_blank" rel="noopener noreferrer">
            <button className="bg-purple-600 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-700">
          Schedule a Free Consultation
        </button>
        </a>
      </div>
    </section>
  );
}

export default ContactSection;