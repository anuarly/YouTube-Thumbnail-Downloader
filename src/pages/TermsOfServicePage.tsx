
import React from 'react';

const TermsOfServicePage: React.FC = () => {
    return (
        <div className="prose dark:prose-invert max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h1>Terms of Service for CreatorClick.com</h1>
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
                By accessing and using CreatorClick.com (the "Site"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Site.
            </p>

            <h2>2. Description of Service</h2>
            <p>
                The Site provides articles, guides, and resources (the "Content") related to YouTube content creation, specifically focusing on thumbnail design and strategy. All content is for informational purposes only.
            </p>

            <h2>3. User Conduct</h2>
            <p>
                You agree to use the Site only for lawful purposes. You are prohibited from posting on or transmitting through the Site any material that is infringing, threatening, defamatory, obscene, or otherwise objectionable. Our content is for informational use, and any application of the strategies discussed is at your own risk.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
                All content on this Site, including text, graphics, logos, and articles, is the property of CreatorClick.com and is protected by international copyright laws. You may not reproduce, distribute, or transmit any part of the Site or its Content without our prior written permission.
            </p>

            <h2>5. Disclaimer of Warranties</h2>
            <p>
                The Site and its Content are provided "as is". We make no warranties, expressed or implied, regarding the accuracy, reliability, or completeness of the Content. Your use of the Site is at your own risk. We do not warrant that the Site will be available at all times or that it will be free of errors or viruses. We are not affiliated with Google or YouTube, and results from using our advice are not guaranteed.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
                In no event shall CreatorClick.com or its owners be liable for any direct, indirect, incidental, or consequential damages arising out of the use or inability to use the Site or its Content.
            </p>

            <h2>7. Changes to Terms</h2>
            <p>
                We reserve the right to modify these terms at any time. We will do so by posting and drawing attention to the updated terms on the Site. Your decision to continue to visit and make use of the Site after such changes have been made constitutes your formal acceptance of the new Terms of Service.
            </p>

            <h2>8. Governing Law</h2>
            <p>
                Any claim relating to CreatorClick.com's website shall be governed by the laws of the website owner's jurisdiction without regard to its conflict of law provisions.
            </p>

             <h2>9. Contact Us</h2>
            <p>
                If you have any questions about these Terms, please <a href="#/contact">contact us</a>.
            </p>
        </div>
    );
};

export default TermsOfServicePage;
