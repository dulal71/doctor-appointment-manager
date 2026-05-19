'use client'
import { authClient } from "@/app/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { Edit } from "lucide-react";


const Profile = () => {
    const {data:session}=authClient.useSession()
        const user=session?.user
        console.log(user);
    return (
        <div className="flex items-center justify-center">
            <div className="bg-white py-8 px-10 flex flex-col items-center md:flex-row md:items-start gap-10 rounded-xl shadow">
                 <div className="rounded-2xl border-b-4  md:border-r-4 p-4 [border-image:linear-gradient(to_right,#2563eb,#06b6d4)_1]">
                    <Avatar className="w-40 h-40 rounded-full">
        <Avatar.Image alt={user?.name} src={user?.image} />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
                 </div>
                 <div className="space-y-4 flex flex-col gap-10">
                    <div className="space-y-2">
 <h3 className=" font-medium"><span className="text-md">Name</span> : <span className="text-2xl">{user?.name}</span></h3>
                    <p>Email : {user?.email}</p>
                    <p>Bangledesh , Moulvi bazar</p>
                    </div>
                   <div className="flex items-center justify-center">
                    <Button><Edit></Edit>Edit Profile</Button>
                   </div>
                
                 </div>
                 
            </div>
            
        </div>
    );
};

export default Profile;