"use client";

import React from "react";
import classNames from "classnames";

interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
  price?: number | string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "custom";
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  price,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  icon,
  ariaLabel,
  loading,
}) => {
  const baseStyle =
    "flex items-center  justify-center cursor-pointer  text-sm  transition-colors duration-200";
  const variants: Record<string, string> = {
    primary: "bg-[#d7e2da] text-black hover:bg-[#c9d8ce] py-2.5 px-4 w-full",
    secondary: "bg-black text-white hover:bg-neutral-800 py-2.5 px-4 w-full",
    ghost:
      "bg-transparent text-black border border-black hover:bg-neutral-100 py-2.5 px-4 w-full",
    custom: "",
  };

  return (
    <button
      disabled={loading}
      type={type}
      onClick={!loading ? onClick : undefined}
      className={classNames(
        baseStyle,
        variants[variant],
        {
          "opacity-50 cursor-not-allowed": loading,
        },
        className,
      )}
      aria-label={ariaLabel || label}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <span className="animate-spin border-2 border-solid border-white border-r-transparent rounded-full w-4 h-4"></span>
          <span className="ml-2">Loading...</span>
        </div>
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {price && <span>{price}</span>}
          {price && <span>|</span>}
          <span>{label}</span>
        </>
      )}
    </button>
  );
};

export default Button;
