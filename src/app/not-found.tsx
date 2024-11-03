"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NotFound: React.FC = () => {
  const currentPath = usePathname();

  return (
    <div className="w-full h-screen bg-black flex font-sans flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4 text-red-600">404</h1>
      <p className="text-lg mb-4 text-white">This page <span className="text-gray-300 bg-gray-700 px-2 py-1 rounded-lg">{currentPath}</span> is not  available.</p>
      {/* Developer Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2 text-white">Developer Section</h2>
        <p className="text-base text-gray-400 mb-4 px-4 mt-3">
          This Website was crafted by <span className='text-gray-100 font-semibold'>Sourav Chhimpa</span> under the <span className='text-gray-100 font-semibold'>YELLOW LABS</span>
        </p>
        <div className="flex space-x-4 justify-center">
          <a
            href="https://github.com/souravhere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:bg-blue-300 px-2 rounded-lg hover:text-black duration-500"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sourav-chhimpa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:bg-blue-300 px-2 rounded-lg hover:text-black duration-500"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/souravchhimpa1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:bg-blue-300 px-2 rounded-lg hover:text-black duration-500"
          >
            Twitter
          </a>
        </div>
      </div>
      <Link
      href='/'
      className='mt-12 dark:bg-white bg-black rounded-lg dark:text-black text-white px-3 py-2 font-semibold'
      >Back to Home</Link>
    </div>
  );
};

export default NotFound;
