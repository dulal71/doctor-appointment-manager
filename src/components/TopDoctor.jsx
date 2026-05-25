"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const TopDoctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://doc-appoint-server-bay.vercel.app/topDoctors");
        const data = await res.json();
        setDoctors(data);
      } catch (error) {
        console.log("Error fetching doctors:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto space-y-8 flex flex-col justify-center items-center ">
     <div className="flex justify-center items-center">
       <Image
         src="/assets/Tape Medical.svg"
         alt="doctor"
         width={400}
         height={200}
         className="w-[1000px] h-[300px]"
       />
     </div>
        <div className="text-center space-y-5">
         <h2 className="text-3xl font-bold md:text-5xl ">Meet Our Top Specialists</h2>  
         <p className="text-xl text-zinc-500">We bring you the most trusted healthcare professionals with excellent ratings and experience.</p> 
        </div>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {doctors.map((doctor, index) => (
          <motion.div
            key={doctor._id}
            initial={{ opacity: 0, x: 100 }}   
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <DoctorCard doctor={doctor} />
          </motion.div>
        ))}
      </div>
      <div>
        <Link href={'/all-appointment'} className="flex gap-2 items-center bg-linear-to-r from-blue-600 to-cyan-500 px-8  py-2 rounded-md text-white">See All <ArrowRight></ArrowRight></Link> 
      </div>
    </div>
  );
};

export default TopDoctor;