"use client";

import React from "react";
import { Button } from "@/components";
import { useCartStore } from "@/store/cartStore";

const AddToCart = ({ price }: { price: string }) => {
  const { setCartOpen } = useCartStore();
  return (
    <>
      <Button
        label={"Add to Cart"}
        price={price}
        variant="primary"
        className=" rounded-md text-sm  font-semibold gap-2  hover:bg-[#c9d8ce] transition duration-300"
        onClick={() => setCartOpen(true)}
      />
    </>
  );
};

export default AddToCart;
