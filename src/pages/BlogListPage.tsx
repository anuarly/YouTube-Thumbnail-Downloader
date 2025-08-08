
import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogListPage: React.FC = () => {
    return (
        <div>
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Our Blog</h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Tips, tricks, and insights for YouTube creators. Level up your content strategy with our expert guides.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <Link
                        key={post.id}
                        to={`/blogs/${post.slug}`}
                        className="block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 group transform hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors">
                                {post.title}
                            </h2>
                            <p className="mt-3 text-gray-600 dark:text-gray-400">
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
    );
};

export default BlogListPage;