"use client";

import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12  border-b-2 border-indigo-600"></div>
    </div>
  );
};

export default Loader;
