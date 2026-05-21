"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AppointmentSection = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="py-16 px-4 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Image */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
            alt="Doctor Appointment"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">
            Doctor Appointment
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Easy & Fast Healthcare Appointment System
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our doctor appointment platform helps patients quickly find trusted
            doctors, book appointments online, and manage healthcare services
            from anywhere.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentSection;