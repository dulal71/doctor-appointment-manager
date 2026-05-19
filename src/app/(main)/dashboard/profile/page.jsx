import { authClient } from "@/app/lib/auth-client";


const Profile = () => {
    const {data:session}=authClient.useSession()
        const user=session?.user
        console.log(user);
    return (
        <div>
            
        </div>
    );
};

export default Profile;