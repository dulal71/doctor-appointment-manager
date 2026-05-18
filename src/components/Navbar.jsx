
"use client";

import { useState, useEffect } from "react";

import { Menu, X, User, LogOut, LayoutDashboard, Cross, Stethoscope, LockOpen, UserCog, LogOutIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image"
import { redirect, usePathname } from "next/navigation";
import { authClient, useSession } from "@/app/lib/auth-client";




const Navbar = () => {
    const { data: session, isPending } =useSession();
const user = session?.user


  const pathname = usePathname()
     const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
   const handleScroll = () => setScrolled(window.scrollY > 10);
   window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  },[])

  const signOut=async()=>{
    await authClient.signOut({
 })
  redirect("/login")
  }
    return (
          <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-md shadow-sm py-2" : "bg-slate-50 py-4"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-xl group-hover:rotate-12 bg-linear-to-r from-blue-600 to-cyan-500 transition-transform">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <span className=" text-3xl font-semibold tracking-tight text-slate-900">
                DocAppoint
              </span>
            </Link>
          </div>

          <div className="hidden md:flex gap-6 items-center">
          <Link
  href="/"
  className={`px-4 py-1 rounded-lg font-medium text-lg transition-all duration-300
  ${
    pathname === "/"
      ? "bg-blue-600 text-white shadow-md"
      : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
  }`}
>
  Home
</Link>

<Link
  href="/all-appointment"
  className={`px-4 py-1 rounded-lg font-medium text-lg transition-all duration-300
  ${
    pathname === "/all-appointment"
      ? "bg-blue-600 text-white shadow-md"
      : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
  }`}
>
  Doctor
</Link>

<Link
  href="/dashboard"
  className={`px-4 py-1 rounded-lg font-medium text-lg transition-all duration-300
  ${
    pathname === "/dashboard"
      ? "bg-blue-600 text-white shadow-md"
      : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
  }`}
>
  Dashboard
</Link>

          </div>

          <div className="hidden md:flex items-center gap-4">

{
  user? <> <Avatar className="w-12 h-12">
        <Avatar.Image alt="John Doe" referrerPolicy="no-referrer" src={user?.image} />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>  
      <Button onClick={signOut} className="flex items-center gap-1 bg-black hover:bg-red-700 transition-all duration-300">  <LogOutIcon /> Logout</Button>
       </>   
      :<>
          <Link href="/login" className=" font-medium text-slate-700 hover:text-blue-600 transition-colors">
            <Button className="flex items-center gap-1 bg-linear-to-r from-blue-600 to-cyan-500"><LockOpen /> Login</Button>
           </Link>
        
           <Link href="/register">
 <Button className="font-medium bg-black flex items-center gap-1">
          <UserCog /> Register
</Button>
   </Link>
            </>
}
 </div>
 {/* mobile menu */}
          <div className="md:hidden flex items-center border border-gray-400 rounded-lg">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-lg hover:bg-muted transition-colors">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
       <div className="md:hidden bg-white border-b border-slate-200 shadow-sm animate-in slide-in-from-top duration-900">
  
  {/* NAV LINKS */}
  <div className="flex flex-col px-4 py-3 gap-1">
    
    <Link
    onClick={() => setIsMenuOpen(false)}
      href="/"
      className={`px-3 py-2 rounded-lg font-medium text-base transition
      ${pathname === "/" 
        ? "bg-blue-50 text-blue-600 font-semibold" 
        : "text-slate-700 hover:bg-slate-100"
      }`}
    >
      Home
    </Link>

    <Link
    onClick={() => setIsMenuOpen(false)}
      href="/all-appointment"
      className={`px-3 py-2 rounded-lg font-medium text-base transition
      ${pathname === "/all-appointment" 
        ? "bg-blue-50 text-blue-600 font-semibold" 
        : "text-slate-700 hover:bg-slate-100"
      }`}
    >
      Doctors
    </Link>

    <Link
    onClick={() => setIsMenuOpen(false)}
      href="/dashboard"
      className={`px-3 py-2 rounded-lg font-medium text-base transition
      ${pathname === "/dashboard" 
        ? "bg-blue-50 text-blue-600 font-semibold" 
        : "text-slate-700 hover:bg-slate-100"
      }`}
    >
      Dashboard
    </Link>
  </div>

  {/* USER SECTION */}
  <div className="border-t border-slate-100 px-4 py-3 flex items-center justify-between">
    
    {user ? (
      <div className="flex items-center gap-3">
        <Avatar className="w-10 h-10">
          <Avatar.Image
            src={user?.image}
            alt="user"
            className="object-cover"
          />
          <Avatar.Fallback>
            {user?.name?.charAt(0)}
          </Avatar.Fallback>
        </Avatar>

        <div className="flex flex-col">
          <p className="text-sm font-medium text-slate-800">
            {user?.name}
          </p>
          <p className="text-xs text-slate-500">
            Logged in
          </p>
        </div>
      </div>
    ) : (
      <div className="flex gap-2 w-full">
        <Link href="/login" className="w-full">
          <Button className="flex w-full items-center gap-1 bg-linear-to-r from-blue-600 to-cyan-500"><LockOpen /> Login</Button>
        </Link>

        <Link href="/register" className="w-full">
         
         <Button className=" w-full font-medium bg-black flex items-center gap-1">
          <UserCog /> Register
</Button>
        </Link>
      </div>
    )}

    {user && (
       <Button onClick={signOut} className="flex items-center gap-1 bg-red-700 ">  <LogOutIcon /> Logout</Button>
    )}
  </div>
</div>
      )}
    </nav>
    );
};

export default Navbar;