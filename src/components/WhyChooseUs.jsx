"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  Clock,
  UserCheck,
  ShieldCheck,
} from "lucide-react";

const features = [
  { icon: CalendarCheck, title: "Easy Appointment", desc: "Book doctor easily." },
  { icon: Clock, title: "No Waiting", desc: "Fast service." },
  { icon: UserCheck, title: "Expert Doctors", desc: "Verified doctors." },
  { icon: ShieldCheck, title: "Secure", desc: "Safe system." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto my-15">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold md:text-5xl ">Why Choose Us</h2>
        <p className="text-gray-500 mt-2">
          Simple, fast and trusted appointment system
        </p>
      </div>

      {/* Cards */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {features.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: 0.5,
        delay: i * 0.15,
        type: "spring",
        stiffness: 120,
      }}
      viewport={{ once: true }}
      className="group p-6 rounded-full hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      
      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-24 h-24 flex items-center justify-center rounded-full bg-blue-50 group-hover:bg-blue-900 transition-all duration-300 mb-4 mx-auto shadow-md"
      >
        <item.icon className="w-12 h-12 text-blue-600 group-hover:text-white transition duration-300" />
      </motion.div>

      {/* title */}
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 + i * 0.1 }}
        className="text-xl font-semibold text-center mb-2"
      >
        {item.title}
      </motion.h3>

      {/* description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 + i * 0.1 }}
        className="text-gray-500 text-sm text-center mb-4"
      >
        {item.desc}
      </motion.p>
    </motion.div>
  ))}
</div>
    </section>
  );
};

export default WhyChooseUs;