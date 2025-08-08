
import React from 'react';
import { YouTubeIcon } from '../components/icons/YouTubeIcon';

const AboutPage: React.FC = () => {
    return (
        <div className="prose dark:prose-invert max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-6">
                <YouTubeIcon className="h-16 w-16 text-red-600" />
                <h1 className="text-4xl font-bold !m-0">About Us</h1>
            </div>
            
            <p className="lead">
                Welcome to YouTubeThumbnailDownloader.com, your number one source for downloading high-quality YouTube video thumbnails. We're dedicated to giving you the very best tool, with a focus on speed, reliability, and ease of use.
            </p>

            <h2>Our Mission</h2>
            <p>
                In the fast-paced world of digital content, a compelling thumbnail can make all the difference. We understand that content creators, marketers, designers, and researchers often need quick access to high-resolution thumbnails for various projects—from creating reaction videos and social media posts to analyzing competitor strategies. Our mission is to provide a seamless, free, and efficient solution to this need.
            </p>
            <p>
                We built this tool because we saw a gap. While other downloaders exist, many are cluttered with ads, have slow servers, or don't provide all available image qualities. We wanted to create something better: a clean, professional, and powerful tool that respects the user's time and delivers results instantly.
            </p>

            <h2>What We Offer</h2>
            <ul>
                <li><strong>All Resolutions:</strong> We automatically fetch all available thumbnail sizes for any given YouTube video, from Maximum Resolution (1920x1080) and HD (640x480) down to smaller preview sizes.</li>
                <li><strong>Instant Downloads:</strong> No waiting, no captchas, no nonsense. Just paste the URL and get your images. Our download process is straightforward and fast.</li>
                <li><strong>Completely Free:</strong> This service is 100% free to use. We support the service through non-intrusive ads, allowing us to keep the tool available for everyone.</li>
                <li><strong>User-Friendly Interface:</strong> We believe in simplicity. Our website is designed to be intuitive and easy to navigate on any device, whether you're on a desktop computer or a mobile phone.</li>
            </ul>

            <h2>More Than a Tool</h2>
            <p>
                Beyond just providing a utility, we aim to be a resource for the content creator community. Our <a href="#/blogs">blog</a> is filled with articles, guides, and tips on how to create better thumbnails, optimize your YouTube channel for growth, understand video marketing trends, and much more. We believe that by sharing knowledge, we can help empower creators to succeed.
            </p>

            <h2>Our Commitment to You</h2>
            <p>
                We are committed to maintaining and improving this service. We continuously monitor our systems to ensure they are running smoothly and are always open to feedback from our users. If you have any questions, suggestions, or comments, please don't hesitate to reach out.
            </p>
            <p>
                Thank you for visiting YouTubeThumbnailDownloader.com. We hope you enjoy using our tool as much as we enjoy offering it to you.
            </p>
        </div>
    );
};

export default AboutPage;