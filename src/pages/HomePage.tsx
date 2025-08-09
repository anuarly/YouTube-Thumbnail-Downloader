
import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { YouTubeIcon } from '../components/icons/YouTubeIcon';

const HomePage: React.FC = () => {
    // Featuring the first 3 blog posts on the home page
    const featuredPosts = blogPosts.slice(0, 3);

    return (
        <div className="flex flex-col items-center">
            <div className="text-center max-w-3xl">
                 <YouTubeIcon className="h-20 w-20 text-red-600 mx-auto mb-4" />
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    Stop Guessing. Start Growing.
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
                   Welcome to Creator Click, the ultimate resource hub for YouTube creators. We provide expert guides, data-driven strategies, and design principles to help you create thumbnails that get clicked.
                </p>
                <Link 
                    to="/blogs" 
                    className="mt-8 inline-block bg-red-600 text-white font-bold text-lg py-3 px-8 rounded-full hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 transition-all transform hover:scale-105"
                >
                    Explore Our Guides
                </Link>
            </div>

            <div className="mt-20 w-full">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredPosts.map((post) => (
                         <Link
                            key={post.id}
                            to={`/blogs/${post.slug}`}
                            className="block bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 group transform hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                                    {post.headline}
                                </p>
                                <div className="mt-4">
                                    <span className="text-red-600 font-semibold group-hover:underline">Read More &rarr;</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
