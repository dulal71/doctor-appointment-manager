import { topDoctors } from "@/services/doctorData";


const TopDoctor =async () => {
    const doctors= await topDoctors()
    console.log(doctors);
    return (
        <div>
            
        </div>
    );
};

export default TopDoctor;