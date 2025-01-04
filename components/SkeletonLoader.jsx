import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse w-full h-screen bg-tertiary">
      {/* Navbar skeleton */}
      <div className="h-20 bg-black-100/50 flex items-center justify-between px-8">
        <div className="w-40 h-8 bg-gray-600 rounded"></div>
        <div className="flex gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-20 h-8 bg-gray-600 rounded"></div>
          ))}
        </div>
      </div>

      {/* Hero section skeleton */}
      <div className="flex flex-col md:flex-row justify-between items-center p-8 gap-8">
        <div className="w-full md:w-1/2 space-y-4">
          <div className="h-12 bg-gray-600 rounded w-3/4"></div>
          <div className="h-8 bg-gray-600 rounded w-1/2"></div>
          <div className="h-24 bg-gray-600 rounded w-full"></div>
        </div>
        <div className="w-full md:w-1/2 h-[400px] bg-gray-600 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
