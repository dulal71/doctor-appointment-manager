import Link from "next/link";


const NotFound = () => {
 
       
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold">404</h1>

      <p className="text-gray-500 mt-4">
        Page Not Found
      </p>

      <Link
        href="/"
        className="mt-6 px-5 py-2 bg-linear-to-r from-blue-600 to-cyan-500 text-white rounded-xl"
      >
        Go Home
      </Link>
    </div>
  );
}
    


export default NotFound;