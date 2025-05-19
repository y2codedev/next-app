import React from 'react';

const Loader = ({ message = 'Loading...' }: { message?: string }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex gap-4 items-center space-y-2">
        <div className="w-10 h-10 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-blue-600 text-sm">{message}</p>
      </div>
    </div>
  );
};

export default Loader;
