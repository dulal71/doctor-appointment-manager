"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Stethoscope, LockOpen, UserCog, LogOutIcon } from "lucide-react";
import { Avatar, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { authClient, useSession } from "@/app/lib/auth-client";

const Navbar = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const pathname = usePathname();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Doctors", path: "/all-appointment" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  const signOut = async () => {
    await authClient.signOut({});
     router.refresh();
    router.replace("/login");
   
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-md shadow-sm py-2" : "bg-slate-50 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500">
            <Stethoscope className="text-white" />
          </div>
          <span className="text-2xl font-semibold">DocAppoint</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-14 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link key={link.path} href={link.path} className="relative">
                <motion.span
                  whileHover={{ y: -2 }}
                  className={`font-medium text-xl ${
                    isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </motion.span>

                {isActive && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute left-0 right-0 -bottom-2 h-[3px] bg-blue-600 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* USER */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Avatar>
                <Avatar.Image src={user.image} />
                <Avatar.Fallback>{user.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button
                onClick={signOut}
                className="bg-black text-white flex items-center gap-1"
              >
                <LogOutIcon /> Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button className="bg-blue-600 flex items-center gap-1">
                  <LockOpen /> Login
                </Button>
              </Link>

              <Link href="/register">
                <Button className="bg-black flex items-center gap-1">
                  <UserCog /> Register
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 border rounded"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
   {isMenuOpen && (
  <div className="md:hidden bg-white border-t px-4 py-3 space-y-2 animate-in fade-in slide-in-from-top-2">
    
    {/* NAV LINKS */}
    {navLinks.map((link) => (
      <Link
        key={link.path}
        href={link.path}
        onClick={() => setIsMenuOpen(false)}
        className={`block py-2 rounded-md px-2 transition ${
          pathname === link.path
            ? "text-blue-600 bg-blue-50 font-medium"
            : "text-gray-700"
        }`}
      >
        {link.name}
      </Link>
    ))}

    {/* AUTH SECTION */}
    <div className="pt-3 border-t mt-2 flex flex-col gap-2">
      {user ? ( <div className="flex justify-between items-center"> 
        
         <div className="flex gap-2 items-center">
          <Avatar>
                <Avatar.Image src={user.image} />
                <Avatar.Fallback>{user.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <h3>{user?.name}</h3>
         </div>
        
        
         <Button
          onClick={signOut}
          className=" bg-black text-white flex items-center justify-center gap-2"
        >
          <LogOutIcon size={18} />
          Logout
        </Button>
         </div>
       
      ) : (
        <>
          <Link href="/login" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full bg-blue-600 flex items-center justify-center gap-2">
              <LockOpen size={18} />
              Login
            </Button>
          </Link>

          <Link href="/register" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full bg-black flex items-center justify-center gap-2">
              <UserCog size={18} />
              Register
            </Button>
          </Link>
        </>
      )}
    </div>
  </div>
)}
     
    </nav>
  );
};

export default Navbar;