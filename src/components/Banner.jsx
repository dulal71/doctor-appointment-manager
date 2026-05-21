"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Banner = () => {
    const slides = [
  {
    image: "/assets/banner-image-1.jpg",
    title: "Book Your Doctor Appointment Easily",
    desc: "Find trusted doctors and get fast medical care anytime, anywhere.",
  },
  {
    image: "/assets/banner-image-4.avif",
    title: "Trusted Healthcare Professionals",
    desc: "Connect with experienced doctors for better treatment and care.",
  },
  {
    image: "/assets/banner-image-3.avif",
    title: "Trusted Healthcare Professionals",
    desc: "Connect with experienced doctors for better treatment and care.",
  },
  
];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[450px] md:h-[550px] lg:h-[80vh] w-full overflow-hidden">

      {/* IMAGE (NO BLUR, ONLY SLIDE) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${slides[current].image})`,
          }}
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* TEXT CONTENT */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-16">

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="max-w-xl text-white"
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -150, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {slides[current].title}
            </h1>

            <p className="mt-3 text-sm md:text-base text-gray-200">
              {slides[current].desc}
            </p>

            <Link href={'/all-appointment'}>
            <button className="mt-5 bg-linear-to-r from-blue-600 to-cyan-500 px-5 py-2 rounded-md">
              Book Now
            </button>
            </Link>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
    );
};

export default Banner;