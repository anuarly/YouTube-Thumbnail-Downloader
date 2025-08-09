import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieConsentBanner: React.FC = () => {
    // IMPORTANT FOR ADSENSE APPROVAL:
    // This is a placeholder banner. For serving ads in the EEA/UK/CH, you MUST
    // integrate a Google-certified Consent Management Platform (CMP) that
    // implements the IAB TCF framework and supports Consent Mode v2.
    // Examples: Quantcast Choice, OneTrust, Cookiebot.
    // Failure to do so will result in AdSense rejection or revenue loss.

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
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
                    We and our advertising partners use cookies and other technologies to collect data for ad personalization and measurement. By clicking "Accept", you agree to this.
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
