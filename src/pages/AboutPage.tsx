import React from 'react';
import { CreatorClickIcon } from '../components/icons/CreatorClickIcon';

const AboutPage: React.FC = () => {
    return (
        <div className="prose dark:prose-invert max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-6">
                <CreatorClickIcon className="h-16 w-16" />
                <h1 className="text-4xl font-bold !m-0">About Creator Click</h1>
            </div>
            
            <p className="lead">
                Welcome to Creator Click, your number one resource for mastering the art and science of YouTube thumbnails. We're dedicated to giving you the very best strategies and insights, with a focus on data-driven results, design excellence, and creator empowerment.
            </p>

            <h2>Our Mission</h2>
            <p>
                In the fast-paced world of digital content, a compelling thumbnail can make all the difference. Our mission is to empower content creators, marketers, and designers with the knowledge to create thumbnails that not only look good but drive meaningful clicks and channel growth. We believe that by demystifying the principles of effective thumbnail design, we can help creators of all sizes find the audience they deserve.
            </p>
            <p>
                We built this resource hub because we saw a need for high-quality, in-depth information. Instead of just tools, we wanted to provide a library of expert knowledge that helps creators build sustainable success on YouTube.
            </p>

            <h2>What We Offer</h2>
            <ul>
                <li><strong>Expert Guides:</strong> In-depth articles covering everything from color psychology and composition to A/B testing and trend analysis.</li>
                <li><strong>Actionable Strategies:</strong> Our content is focused on providing practical, actionable advice that you can implement immediately to improve your click-through rate (CTR).</li>
                <li><strong>Community Focused:</strong> We aim to be a central resource for the content creator community. Our <a href="#/blogs">blog</a> is the heart of our platform, filled with guides and tips to help you succeed.</li>
                <li><strong>Completely Free:</strong> This resource is 100% free to use. We support the service through non-intrusive ads, allowing us to keep creating valuable content for everyone.</li>
            </ul>

            <h2>Our Commitment to You</h2>
            <p>
                We are committed to maintaining and growing this library of content. We continuously research the latest trends and data to ensure our guides are up-to-date and effective. We are always open to feedback from our users. If you have any questions, suggestions, or topics you'd like us to cover, please don't hesitate to reach out via our <a href="#/contact">Contact Us</a> page.
            </p>
            <p>
                Thank you for visiting Creator Click. We hope you find our guides as valuable as we enjoy creating them for you.
            </p>
        </div>
    );
};

export default AboutPage;
