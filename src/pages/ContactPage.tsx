
import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="prose dark:prose-invert max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            
            <p className="lead">
                We value your feedback and are here to help with any questions or topics you'd like us to cover.
            </p>

            <h2>Get in Touch</h2>
            <p>
                The best way to reach us is by email. Whether you have a suggestion for a new article, a question about our guides, or a business inquiry, please feel free to send us a message.
            </p>
            <p>
                <strong>Email:</strong> <a href="mailto:contact@creatorclick.com">contact@creatorclick.com</a>
            </p>
            <p>
                We do our best to respond to all inquiries within 48 business hours.
            </p>

            <h2>Feedback</h2>
            <p>
                Your feedback is invaluable to us as we continue to improve Creator Click. If you've found our guides helpful or have an idea for what we can do better, please don't hesitate to let us know.
            </p>
            
            <p>
                Thank you for being a part of our community!
            </p>
        </div>
    );
};

export default ContactPage;
