
import React, { useState, useCallback } from 'react';
import { type ThumbnailImage } from '../types';
import { DownloadIcon } from '../components/icons/DownloadIcon';
import { YouTubeIcon } from '../components/icons/YouTubeIcon';

const HomePage: React.FC = () => {
    const [url, setUrl] = useState('');
    const [videoId, setVideoId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const extractVideoId = (inputUrl: string): string | null => {
        if (!inputUrl) return null;
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = inputUrl.match(regex);
        return match ? match[1] : null;
    };

    const handleFetchThumbnails = useCallback(() => {
        setError(null);
        setVideoId(null);
        setLoading(true);

        setTimeout(() => {
            const id = extractVideoId(url);
            if (id) {
                setVideoId(id);
            } else {
                setError('Invalid YouTube URL. Please enter a valid video URL.');
            }
            setLoading(false);
        }, 500);
    }, [url]);

    const handleDownload = async (imageUrl: string, quality: string) => {
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `thumbnail_${videoId}_${quality}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (err) {
            setError('Failed to download image. Please try again.');
        }
    };
    
    const thumbnails: ThumbnailImage[] = videoId ? [
        { quality: 'Max-Res', url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, resolution: '1920x1080' },
        { quality: 'HD', url: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`, resolution: '640x480' },
        { quality: 'HQ', url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`, resolution: '480x360' },
        { quality: 'MQ', url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`, resolution: '320x180' },
    ] : [];

    return (
        <div className="flex flex-col items-center">
            <div className="text-center max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">YouTube Thumbnail Downloader</h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    Enter any YouTube video URL below to download its thumbnail in all available resolutions for free. Fast, simple, and high-quality.
                </p>
            </div>

            <div className="mt-8 w-full max-w-2xl bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-grow">
                        <YouTubeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"/>
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Paste YouTube video URL here..."
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        />
                    </div>
                    <button
                        onClick={handleFetchThumbnails}
                        disabled={loading}
                        className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 disabled:bg-red-400 disabled:cursor-not-allowed transition-all flex items-center justify-center"
                    >
                        {loading ? (
                             <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                        ) : 'Get Thumbnails'}
                    </button>
                </div>
                {error && <p className="mt-4 text-red-500 text-sm text-center">{error}</p>}
            </div>

            {videoId && (
                <div className="mt-12 w-full">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Available Thumbnails</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {thumbnails.map((thumb) => (
                            <div key={thumb.quality} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 group transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="aspect-w-16 aspect-h-9">
                                  <img 
                                    src={thumb.url} 
                                    alt={`${thumb.quality} thumbnail`} 
                                    className="object-cover w-full h-full" 
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://picsum.photos/480/360?grayscale';
                                        (e.target as HTMLImageElement).parentElement?.nextElementSibling?.querySelector('p.text-red-500')?.classList.remove('hidden');
                                    }}/>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-lg text-gray-800 dark:text-white">{thumb.quality}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{thumb.resolution}</p>
                                    <p className="text-red-500 text-xs mt-1 hidden">Max resolution not available, showing fallback.</p>
                                    <button onClick={() => handleDownload(thumb.url, thumb.quality)} className="mt-4 w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 flex items-center justify-center gap-2 transition-colors">
                                        <DownloadIcon className="h-5 w-5" />
                                        Download
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;
