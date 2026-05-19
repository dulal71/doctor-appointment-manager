

import { auth } from "@/app/lib/auth";
import AppointmentCard from "@/components/AppointmentCard";
import EmptyMessage from "@/components/EmptyMessage";
import { getAppointmentData } from "@/services/appointmentData";
import { p } from "framer-motion/client";
import { headers } from "next/headers";


const Dashboard =async () => {
    const session = await auth.api.getSession({
    headers: await headers() 
 })
 const user=session?.user
 console.log(user);
    const doctors=await getAppointmentData(user.id)
    

    return (
        <div className="">
            <div className="max-w-6xl mx-auto px-4 pt-6 pb-4">
  <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
    Dashboard
  </h1>

  <p className="text-sm md:text-base text-gray-500 mt-1">
    Manage your appointments and profile settings easily
  </p>
</div>
         {
            doctors.length===0?(<EmptyMessage></EmptyMessage>):
            (doctors.map(doctor=> <AppointmentCard key={doctor._id} doctor={doctor}></AppointmentCard>))
         }
          
        </div>
    );
};

export default Dashboard;