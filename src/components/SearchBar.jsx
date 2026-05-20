

"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";

const SearchBar = () => {
const [searchInput,setSearchInput]=useState("")

const searchParams = useSearchParams()
const pathname = usePathname()
const router = useRouter()

const handleSearch = ()=>{
const params = new URLSearchParams(searchParams)
console.log('params',params);
console.log('pathname',pathname);
console.log('router',router);
if(searchInput){
  params.set("search",searchInput)
}else{
  params.delete("search")
}
router.push(`${pathname}?${params.toString()}`)
}
  return (
    <div className="relative md:w-3xl  flex items-center bg-white/80 border border-slate-200 rounded-2xl shadow-sm focus-within:ring-4 focus-within:ring-blue-600/10 focus-within:border-white transition-all overflow-hidden">

      <div className="pl-2 text-slate-400">
        <Search className="w-5 h-5" />
      </div>

      <input
        type="text"
        value={searchInput}
     onChange={e=> setSearchInput(e.target.value)}
        placeholder="Search your doctor (e.g. Next.js, Web Design...)"
        className="flex-1 h-14 px-2 outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
      />

      <button
      onClick={handleSearch}
        className="h-10 px-6 mr-2 rounded-xl  bg-[var(--primary)] text-white font-semibold hover:bg-blue-700 transition-colors"

      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;