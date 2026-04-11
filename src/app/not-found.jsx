import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <div className="text-center max-w-xl">
                <h1 className="text-7xl font-bold text-gray-800">404</h1>
                <h2 className="mt-4 text-2xl font-semibold text-gray-700">
                    Page Not Found
                </h2>
                <p className="mt-3 text-gray-500">
                    Sorry, the page you are looking for doesn’t exist or has been moved.
                </p>
                <div className="w-24 h-1 bg-gray-300 mx-auto my-6 rounded"></div>

                <Link
                    href="/"
                    className="inline-block px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-200"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;