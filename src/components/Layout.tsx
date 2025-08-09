
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CookieConsentBanner from './CookieConsentBanner';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800 dark:text-gray-200">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <Outlet />
      </main>
      <Footer />
      <CookieConsentBanner />
    </div>
  );
};

export default Layout;
