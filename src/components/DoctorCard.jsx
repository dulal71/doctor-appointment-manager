import { Button } from "@heroui/react";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const DoctorCard = ({doctor}) => {
   
    const {image,name,specialty,_id,rating,fee}=doctor
    return (
     <div className="bg-white rounded-2xl hover:scale-110 duration-500 hover:shadow-xl transition overflow-hidden w-[300px] p-5">
  
  {/* Image */}
  <div className="relative w-full h-[250px] rounded-full">
    <Image
      src={image}
      alt={name}
      fill
      className="object-cover rounded-full"
    />
  </div>

  {/* content */}
  <div className="p-4 space-y-1">
    <div className="text-center">
 <h4 className="text-lg font-semibold text-slate-800 text-center">
      {name}
    </h4>

    <p className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full text-center">
                  {specialty}
                </p>
    </div>
   <div>
    <p className="flex gap-2"><Star color="gold"></Star> {rating}</p>
   
   </div>

    {/* Optional button */}
    <Link href={`/all-appointment/${_id}`}>
    <button className="mt-3 w-full bg-linear-to-r from-blue-600 to-cyan-500 text-white py-2 rounded-lg hover:bg-blue-900 transition">
      View Profile
    </button>
    </Link>
  </div>
</div>
    );
};

export default DoctorCard;