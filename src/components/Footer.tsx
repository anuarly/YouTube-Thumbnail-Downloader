
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <div className="mb-2">
          <Link to="/about" className="hover:text-red-600 transition-colors mx-2">About Us</Link>
          <span className="mx-1">|</span>
          <Link to="/contact" className="hover:text-red-600 transition-colors mx-2">Contact Us</Link>
          <span className="mx-1">|</span>
          <Link to="/privacy" className="hover:text-red-600 transition-colors mx-2">Privacy Policy</Link>
           <span className="mx-1">|</span>
          <Link to="/terms" className="hover:text-red-600 transition-colors mx-2">Terms of Service</Link>
        </div>
        <p className="mb-2">&copy; {new Date().getFullYear()} CreatorClick.com. All Rights Reserved.</p>
        <p className="text-xs text-gray-500">This site is not affiliated with or endorsed by Google LLC or YouTube.</p>
      </div>
    </footer>
  );
};

export default Footer;
