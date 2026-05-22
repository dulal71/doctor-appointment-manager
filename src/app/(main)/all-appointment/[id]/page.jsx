import { doctorDataById } from "@/services/doctorData";
import Image from "next/image";
import {
  Clock3,
  MapPinCheckInside,
  Star,
  CalendarDays,
  Hospital,
  BadgeDollarSign,
} from "lucide-react";
import BookingCard from "@/components/BookingCard";
import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
// metaData
export const generateMetadata = async({params})=>{
  const { id } = await params;
  const doctor = await doctorDataById(id)
 
  return{
    title:doctor.name,
     description: doctor.description
  }
}
const DoctorDetails = async ({ params }) => {

  const {token}=await auth.api.getToken({
    headers:await headers()
  })
 
  const { id } = await params;
  const doctor = await doctorDataById(id,token);

  const {
    image,
    name,
    specialty,
    description,
    experience,
    location,
    availability,
    hospital,
    fee,
    rating
  } = doctor;

  return (
    <div className="max-w-7xl mx-auto px-2 py-9">
      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 lg:p-10">
          
          {/* Left Side */}
          <div className="lg:col-span-2 flex flex-col md:flex-row gap-8">
            
            {/* Doctor Image */}
            <div className="relative w-full md:w-[320px] h-[350px] rounded-3xl overflow-hidden">
              <Image
                src={image}
                fill
                alt={name}
                className="object-cover"
              />
            </div>

            {/* Doctor Info */}
            <div className="flex-1">
              <div className="space-y-4">
                
                <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full">
                  {specialty}
                </span>

                <h1 className="text-4xl font-bold text-slate-800">
                  {name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 text-yellow-500">
                  <Star className="fill-yellow-400" size={20} />
                  <Star className="fill-yellow-400" size={20} />
                  <Star className="fill-yellow-400" size={20} />
                  <Star className="fill-yellow-400" size={20} />
                  <Star className="fill-yellow-400" size={20} />

                  <span className="text-slate-600 text-sm ml-2">
                   {rating}
                  </span>
                </div>

                <p className="text-slate-600 leading-7">
                  {description}
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                
                {/* Experience */}
                <div className="border border-slate-200 rounded-2xl p-4 flex items-center gap-4 bg-slate-50">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                    <Clock3 />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Experience</p>
                    <h4 className="font-semibold text-slate-800">
                      {experience} Years
                    </h4>
                  </div>
                </div>

                {/* Location */}
                <div className="border border-slate-200 rounded-2xl p-4 flex items-center gap-4 bg-slate-50">
                  <div className="bg-green-100 p-3 rounded-xl text-green-600">
                    <MapPinCheckInside />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <h4 className="font-semibold text-slate-800">
                      {location}
                    </h4>
                  </div>
                </div>

                {/* Hospital */}
                <div className="border border-slate-200 rounded-2xl p-4 flex items-center gap-4 bg-slate-50">
                  <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                    <Hospital />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Hospital</p>
                    <h4 className="font-semibold text-slate-800">
                      {hospital}
                    </h4>
                  </div>
                </div>

                {/* Availability */}
                <div className="border border-slate-200 rounded-2xl p-4 flex items-center gap-4 bg-slate-50">
                  <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                    <CalendarDays />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Availability</p>
                    <h4 className="font-semibold text-slate-800">
                      {availability}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 h-fit sticky top-10">
            
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Book Appointment
            </h2>

            {/* Fee */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl">
                  <BadgeDollarSign />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Consultation Fee
                  </p>
                  <h3 className="font-bold text-xl text-slate-800">
                    ৳ {fee}
                  </h3>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 text-slate-600 text-sm mb-8">
              <p>✔ Instant appointment confirmation</p>
              <p>✔ Video consultation available</p>
              <p>✔ Secure payment system</p>
              <p>✔ Trusted medical service</p>
            </div>

            {/* Button */}
            <BookingCard doctor={doctor}></BookingCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;