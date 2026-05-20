'use client'
import {Label, ListBox, Select} from "@heroui/react";
import { div } from "framer-motion/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


const SelectOptions = () => {

 const searchParams = useSearchParams()
 const pathname=usePathname()
 const router = useRouter()
 const handleFilter=(value)=>{
const params=new URLSearchParams(searchParams)
if(value){
  params.set("specialty",value)
}else{
  params.delete("specialty")
}
router.push(`${pathname}?${params.toString()}`)
 }
    return (
      <div className="w-[256px]">
 <select
    onChange={e=> handleFilter(e.target.value)}
        className="w-full py-[15px]  bg-white/80 border border-slate-200 rounded-2xl shadow-sm focus-within:ring-4 focus-within:ring-blue-600/10 focus-within:border-white transition-all overflow-hidden"
      >
        <option value='' className="text-zinc-300 ">select one</option>
        <option>Dermatologist</option>
        <option>Urologist</option>
        <option>Urologist</option>
        <option>ENT Specialist</option>
        <option>Gynecologist</option>
        <option>Pediatrician</option>
        <option>Cardiologist</option>
      </select>
      </div>
       
    );
};

export default SelectOptions;