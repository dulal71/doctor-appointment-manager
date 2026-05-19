import DoctorCard from '@/components/DoctorCard';
import SearchBar from '@/components/SearchBar';
import { allDoctorData } from '@/services/doctorData';


const AllAppointment =async () => {
    const doctors= await allDoctorData()
//   console.log(doctors);
    return (
        <div >
<div className="relative w-full h-[550px] bg-[url('/assets/second-banner.avif')] bg-cover bg-center">
  
  {/* dark blur layer */}
  <div className="absolute inset-0 bg-black/50 "></div>

  {/* content */}
  <div className="relative z-10 text-white flex flex-col justify-center items-center h-full gap-4">
    <h1 className='text-4xl md:text-5xl text-center font-bold'>We Care About Your Health</h1>
    <p className='text-md text-center'>Find trusted doctors and book 
    appointment easily from anywhere</p>
   
  </div>

</div>
<div className='text-center my-10'>
<h2 className='text-5xl font-bold'>
 Our Best Doctors   
</h2>
<p>Trusted doctors with years of experience in patient care</p>
</div>
<div className='flex justify-center items-center'>
     <SearchBar></SearchBar>
</div>
            <div className='max-w-7xl mx-auto p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center my-10'>

           {
            doctors?.map(doctor => <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>)
           }     
            </div>
            
        </div>
    );
};

export default AllAppointment;