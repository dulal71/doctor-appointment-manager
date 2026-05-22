import { div } from "framer-motion/client";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
const reviews = [
  {
    id: 1,
    title: "Excellent Service",
    comment: "Doctor was very friendly and professional. Highly recommended!",
    name: "Rahim Uddin",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    rating: 5,
  },
  {
    id: 2,
    title: "Good Experience",
    comment: "Appointment process was smooth and easy.",
    name: "Ayesha Khan",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    rating: 4,
  },
  {
    id: 3,
    title: "Nice Treatment",
    comment: "Overall good but waiting time was a bit long.",
    name: "Karim Ahmed",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    rating: 4,
  },
  {
    id: 4,
    title: "Very Helpful",
    comment: "Staff behavior was very polite and helpful.",
    name: "Nusrat Jahan",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
    rating: 5,
  },
  {
    id: 5,
    title: "Satisfied",
    comment: "Overall good experience. Will visit again.",
    name: "Sabbir Hossain",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    rating: 4,
  },
];
const ReviewCard = () => {
    const reviews = [
  {
    id: 1,
    title: "Excellent Service",
    comment: "Doctor was very friendly and professional. Highly recommended!",
    name: "Rahim Uddin",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    rating: 5,
  },
  {
    id: 2,
    title: "Good Experience",
    comment: "Appointment process was smooth and easy.",
    name: "Ayesha Khan",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    rating: 4,
  },
  {
    id: 3,
    title: "Nice Treatment",
    comment: "Overall good but waiting time was a bit long.",
    name: "Karim Ahmed",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    rating: 4,
  },
  
  
];
  return (
    <div className="my-15 space-y-5 px-2">
<div className="flex flex-col justify-center items-center  ">
    <p className="bg-linear-to-r from-blue-500 to-sky-500 px-3  rounded-2xl text-white text-2xl flex items-center gap-2"><Star size={10}></Star> Testimonials <Star size={10}></Star></p>
    <p className="text-4xl text-center font-bold mt-5">15K User Trust DocAppoint Website</p>
</div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 md:p-2">
     {
        reviews.map(review=><div key={review.id} className="w-full max-w-md bg-white rounded-2xl p-3 md:p-6 shadow-md border hover:shadow-lg transition relative">

      {/* Quote Icon */}
      <Quote className="absolute right-5 top-5 text-orange-500 w-8 h-8 opacity-80" />

      {/* Stars */}
      <div className="flex gap-1 text-yellow-400">
        {Array.from({ length: review.rating || 5 }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      {/* Title */}
      <h2 className="mt-3 text-lg font-semibold text-gray-800">
        {review.title}
      </h2>

      {/* Comment */}
      <p className="mt-2 text-gray-600 text-sm leading-relaxed">
        {review.comment}
      </p>

      {/* User Info */}
      <div className="flex items-center gap-3 mt-5">
        <Image
          src={review.image}
          width={44}
          height={44}
          alt={review.name}
          className="w-11 h-11 rounded-full object-cover border"
        />

        <h4 className="font-medium text-blue-700">
          {review.name}
        </h4>
      </div>
    </div> )
     }   
        
        </div>   
    </div>
  );
};

export default ReviewCard;