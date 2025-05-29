"use client";

import React from "react";
import PaymentMethods from "./PaymentMethods";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 sm:bottom-4 left-0 w-full sm:rounded-md sm:w-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 z-30 bg-black/20 px-2 py-4 backdrop-blur-sm">
      <div className="mt-4">
        <PaymentMethods />
      </div>
    </nav>
  );
};

export default BottomNav;