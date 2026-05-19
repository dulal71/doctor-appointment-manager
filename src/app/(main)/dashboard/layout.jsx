"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "My Appointment",
      path: "/dashboard",
    },
    {
      name: "Profile",
      path: "/dashboard/profile",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <div className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-20 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-8 h-16">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <Link key={link.path} href={link.path} className="relative">
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className={`text-sm md:text-base font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </motion.span>

                  {isActive && (
                    <motion.div
                      layoutId="active-tab"
                      className="absolute left-0 right-0 -bottom-2 h-[3px] rounded-full bg-blue-600"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto p-4">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;