import Image from "next/image";
import Link from "next/link";


const DoctorCard = ({doctor}) => {
   
    const {image,name,specialty,_id}=doctor
    return (
     <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden w-[300px]">
  
  {/* Image */}
  <div className="relative w-full h-[300px]">
    <Image
      src={image}
      alt={name}
      fill
      className="object-cover"
    />
  </div>

  {/* Content */}
  <div className="p-4 space-y-1">
    <h4 className="text-lg font-semibold text-slate-800">
      {name}
    </h4>

    <p className="text-md text-[var(--warning)]">
      {specialty}
    </p>

    {/* Optional button */}
    <Link href={`/all-appointment/${_id}`}>
    <button className="mt-3 w-full bg-[var(--primary)] text-white py-2 rounded-lg hover:bg-blue-700 transition">
      View Profile
    </button>
    </Link>
  </div>
</div>
    );
};

export default DoctorCard;