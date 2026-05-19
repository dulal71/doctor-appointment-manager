import { CalendarDays, Clock, UserRound, Phone, CreditCard } from "lucide-react";

const AppointmentCard = ({ doctor }) => {
  console.log("CARD DATA:", doctor);

  return (
   <div className="bg-white rounded-xl border border-gray-200 p-3 shadow-sm hover:shadow-md transition-all my-4 max-w-md">

  {/* Header */}
  <div className="flex justify-between items-start">
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {doctor?.doctorName}
      </h2>

      <p className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full">
        {doctor?.specialty}
      </p>

      <p className="text-xs text-gray-400 mt-1">
        {doctor?.location}
      </p>
    </div>

    <span className="px-2 py-1 text-[10px] rounded-full bg-green-100 text-green-700">
      Confirmed
    </span>
  </div>

  {/* Info */}
  <div className="mt-4 space-y-2 text-sm text-gray-600">

    <p className="flex items-center gap-2">
      <UserRound className="w-4 h-4 text-blue-600" />
      Patient:
      <span className="font-semibold text-gray-800">
        {doctor?.patientName}
      </span>
    </p>

    <p className="flex items-center gap-2">
      <CalendarDays className="w-4 h-4 text-blue-600" />
      Date:
      <span className="font-semibold text-gray-800">
        {doctor?.appointmentDate}
      </span>
    </p>

    <p className="flex items-center gap-2">
      <Clock className="w-4 h-4 text-blue-600" />
      Time:
      <span className="font-semibold text-gray-800">
        {new Date(`1970-01-01T${doctor?.appointmentTime}`)
  .toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })}
      </span>
    </p>

    <p className="flex items-center gap-2">
      <Phone className="w-4 h-4 text-blue-600" />
      Phone:
      <span className="font-semibold text-gray-800">
        {doctor?.phone}
      </span>
    </p>

    <p className="flex items-center gap-2">
      <CreditCard className="w-4 h-4 text-blue-600" />
      Fee:
      <span className="font-semibold text-gray-800">
        {doctor?.fee} BDT
      </span>
    </p>
  </div>

  {/* Buttons */}
  <div className="mt-4 flex gap-2">

    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-lg transition">
      Update
    </button>

    <button className="flex-1 bg-red-700 hover:bg-red-900 text-white text-sm py-2 rounded-lg transition">
      Delete
    </button>

  </div>
</div> 
  );
};

export default AppointmentCard;