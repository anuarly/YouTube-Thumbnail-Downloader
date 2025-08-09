
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} YouTubeThumbnailsDownloader.com. All Rights Reserved.</p>
        <div className="mt-2">
          <Link to="/about" className="hover:text-red-600 transition-colors mx-2">About Us</Link>
          <span className="mx-1">|</span>
          <Link to="/privacy" className="hover:text-red-600 transition-colors mx-2">Privacy Policy</Link>
          <span className="mx-1">|</span>
          <Link to="/contact" className="hover:text-red-600 transition-colors mx-2">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;