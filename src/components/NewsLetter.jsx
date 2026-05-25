"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

export default function MyLottie() {
  return (
   <div className="flex justify-center items-center">
  <Image
    src="/assets/Tape Medical.svg"
    alt="doctor"
    width={400}
    height={200}
    className="w-[1000px] h-[600px]"
  />
</div>
  );
}