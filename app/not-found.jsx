import Link from 'next/link';
import React from 'react'

const NotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6 py-12">
        <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
        <p className="mt-4 text-lg text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
        >
          Go back to Home
        </Link>
      </div>
    );
  };

  export default NotFound