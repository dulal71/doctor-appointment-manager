'use client'
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { UserRoundSearch, Tablets, TestTubeDiagonal } from "lucide-react";

const Find = () => {
  const services = [
    {
      name: "Visit a Doctor",
      description:
        "We hire the best specialists to deliver top-notch diagnostic services for you.",
      icon: TestTubeDiagonal,
    },
    {
      name: "Find a pharmacy",
      description:
        "We provide a wide range of medical services so every person could have the opportunity.",
      icon: Tablets,
    },
    {
      name: "Find a Lab",
      description:
        "We hire the best specialists to deliver top-notch diagnostic services for you.",
      icon: UserRoundSearch,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto my-15">
        <div>
         <h2 className="text-5xl font-bold text-center my-3"> What are you <span className="text-blue-500">looking</span> for?  </h2>
        </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {services.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            className="relative overflow-hidden border py-12 px-8 shadow-sm"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            
            <motion.div
              className="absolute top-0 right-0 w-20 h-20 bg-blue-500 rounded-full origin-top-right"
              variants={{
                rest: { scale: 0 },
                hover: { scale: 6 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />

           
            <motion.div className="relative z-10">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full text-blue-600 mb-4">
                  <Icon className="w-12 h-12" />
                </div>

             
                <motion.h3
                  className="text-xl font-semibold mb-2"
                  variants={{
                    rest: { color: "#000" },
                    hover: { color: "#fff" },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item.name}
                </motion.h3>
              </div>

             
              <motion.p
                className="text-sm"
                variants={{
                  rest: { color: "#6b7280" }, // gray-600
                  hover: { color: "#fff" },
                }}
                transition={{ duration: 0.3 }}
              >
                {item.description}
              </motion.p>

            </motion.div>
          </motion.div>
        );
      })}
    </div>
    </div>
   
  );
};

export default Find;