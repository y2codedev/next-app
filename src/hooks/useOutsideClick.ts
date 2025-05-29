"use client";

import { useEffect, useRef } from "react";

type UseOutsideClickProps = {
  handler: () => void;
  enabled?: boolean;
};

export const useOutsideClick = <T extends HTMLElement = HTMLElement>({
  handler,
  enabled = true,
}: UseOutsideClickProps) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler, enabled]);

  return ref;
};
