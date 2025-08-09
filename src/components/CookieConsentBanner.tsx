
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieConsentBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // A simple consent check. A real implementation would use a Google-certified CMP.
        const consent = localStorage.getItem('creator_click_cookie_consent');
        if (consent !== 'given') {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('creator_click_cookie_consent', 'given');
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg print:hidden">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-center sm:text-left">
                    We use cookies to enhance your experience and for advertising purposes. By continuing to visit this site you agree to our use of cookies.
                    <Link to="/privacy" className="font-semibold underline hover:text-red-400 ml-2">Learn More</Link>
                </p>
                <button
                    onClick={handleAccept}
                    className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition-colors flex-shrink-0"
                >
                    Accept
                </button>
            </div>
        </div>
    );
};

export default CookieConsentBanner;
