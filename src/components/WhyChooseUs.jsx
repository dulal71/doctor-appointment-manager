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
    <section className="py-16 px-4 max-w-6xl mx-auto mt-15">
      
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            
           
            className="group p-6  rounded-full  hover:shadow-md transition"
          >
            
         
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-blue-50 group-hover:bg-blue-900 transition mb-4 mx-auto">
              <item.icon className="w-12 h-12 text-blue-600 group-hover:text-white transition" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-center mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm text-center mb-4">
              {item.desc}
            </p>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;