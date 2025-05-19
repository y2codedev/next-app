"use client";

import { paymentMethod } from "@/data/navData";
import { OptimizedImage } from "@/components";
import React from "react";

const PaymentMethods: React.FC = () => (
  <div className="flex w-full items-center justify-center gap-4 mt-2">
    {paymentMethod?.map((item, index) => (
      <OptimizedImage
        key={index}
        src={item.src}
        alt={item.alt}
        width={40}
        height={40}
      />
    ))}
  </div>
);

export default PaymentMethods;
