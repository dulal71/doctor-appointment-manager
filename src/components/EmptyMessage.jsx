

import Link from "next/link";

const EmptyMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      {/* <img
        src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
        alt="No Appointment"
        className="w-32 h-32 mb-4 opacity-80"
      /> */}

      <h2 className="text-2xl font-bold text-gray-700">
        No Appointments Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-sm">
        You don’t have any doctor appointments yet.
      </p>

      <Link
        href="/all-appointment"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
      >
        Book Appointment
      </Link>
    </div>
  );
};

export default EmptyMessage;