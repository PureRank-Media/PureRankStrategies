// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: Copyright */}
        <div className="text-sm text-gray-400 mb-2 md:mb-0">
          © {new Date().getFullYear()} PureRank Strategies. All rights reserved.
        </div>

        {/* Right Side: Links */}
        <div className="flex space-x-4">
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Privacy Policy</a>
          <a href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;