
import { BeatLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='bg-[#2C5EAD] w-full h-screen flex justify-center items-center'>
         <div>
         <BeatLoader size={20} color='white'></BeatLoader>   
            </div>   
        </div>
    );
};

export default Loading;