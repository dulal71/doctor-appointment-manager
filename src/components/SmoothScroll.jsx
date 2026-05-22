"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        orientation:"vertical",
        gestureOrientation:"vertical",
        wheelMultiplier:1,
        touchMultiplier:2,
        smoothWheel: true,
        smoothTouch: false,
        lerp: 0.1,
      }}
    >
      {children}
    </ReactLenis>
  );
}