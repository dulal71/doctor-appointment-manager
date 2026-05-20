
import { div } from "framer-motion/client";
import Marquee from "react-fast-marquee";
const MarqueeTitle = () => {
    const items = [
  { id: 1, title: "Lab Testing" },
  { id: 2, title: "Home Care Services" },
  { id: 3, title: "Talk to Doctors" },
  { id: 4, title: "Video Call Doctor" },
  { id: 5, title: "Emergency Support" },
  { id: 6, title: "24/7 Health Service" },
];
    return (
        <div className="bg-blue-500">
        <Marquee>
         {
            items.map(item=> <p key={item.id} className="px-6 py-3">
  {item.title}
  </p>)
         }   
        </Marquee>
        </div>
    );
};

export default MarqueeTitle;