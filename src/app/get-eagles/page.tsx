"use client"
import React, { useEffect } from 'react';

const GetEaglesPage = () => {
  useEffect(() => {
    // Redirect to the specified URL when the component mounts
    window.location.href = 'https://t.me/eaglesportal';
  }, []);

  return (
    <div className="flex flex-col font-sans items-center justify-center h-screen bg-black text-white">
      <h1 className="text-4xl font-bold">Redirecting...</h1>
      <p className="mt-4">If you are not redirected automatically, click</p>
      <a href="https://t.me/eaglesportal" className="text-white underline bg-[#ea580c] px-10 py-3 my-4 rounded-lg">here</a>
    </div>
  );
}

export default GetEaglesPage;
