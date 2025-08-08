
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="text-center py-20">
                <h1 className="text-4xl font-bold">Post not found</h1>
                <p className="mt-4">Sorry, we couldn't find the blog post you're looking for.</p>
                <Link to="/blogs" className="mt-6 inline-block bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                    &larr; Back to Blogs
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <article className="prose dark:prose-invert lg:prose-xl bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-12 rounded-lg shadow-lg">
                <div className="mb-8">
                    <Link to="/blogs" className="text-red-600 hover:underline no-underline">&larr; Back to all articles</Link>
                </div>
                <h1>{post.title}</h1>
                <p className="lead">{post.headline}</p>
                <div>{post.content}</div>
                <div className="mt-12 border-t pt-4 border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold">Keywords:</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {post.keywords.map(keyword => (
                             <span key={keyword} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogPostPage;