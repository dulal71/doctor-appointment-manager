"use client";
import { authClient } from "@/lib/auth-client";
import {Check, EyeSlash} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, InputGroup, Label, TextField} from "@heroui/react";
import { Eye, Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
     const [isVisible, setIsVisible] = useState(false);
     const handleLogin=async(e)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries())
        const {data,error}=await authClient.signIn.email({
          email:user.email, // required
          password:user.password, // required   
        })
console.log(data);
if(data){
   toast.success("Login successfully") 
   redirect('/')
}else{
    toast.error("Login failed")
}
     }
    return (
        <div className="flex items-center justify-center py-14">
       <div className="bg-white shadow py-6 px-8 space-y-4 rounded-md">
             <div className="flex flex-col items-center justify-center gap-3">
    <div className="w-12 p-2  bg-linear-to-r from-blue-600 to-cyan-500 rounded-xl group-hover:rotate-12 transition-transform">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>             
<div>
    <p className="text-center text-3xl font-medium mb-2">Welcome Back</p>
<p className="text-center text-md font-semibold text-zinc-600">Login to manage your appointments and <br /> connect with trusted doctors.</p>
</div>

            </div>

         <div>
             <Form onSubmit={handleLogin} className="flex w-80 flex-col gap-6" >
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input className="rounded-md py-3" placeholder="E-mail Address" />
        <FieldError />
      </TextField>
      <TextField className="w-full" name="password">
      <Label>Password</Label>
      <InputGroup>
        <InputGroup.Input
          className="w-full rounded-md py-3"
          type={isVisible ? "text" : "password"}
          
        />
        <InputGroup.Suffix className="pr-0">
          <Button
            isIconOnly
            aria-label={isVisible ? "Hide password" : "Show password"}
            size="sm"
            variant="ghost"
            onPress={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>
      <div className="flex  justify-between items-center">
        <Button type="submit" className="rounded-md px-8  bg-linear-to-r from-blue-600 to-cyan-500">
          <Check />
          Login
        </Button>
        <Button className='bg-white text-black' >
         Forget Password?
        </Button>
      </div>
    </Form>
    </div> 
    <p className="text-center">Or login with</p>
    <div className="flex justify-evenly items-center">
{/* google */}
<div className="cursor-pointer flex items-center gap-2">
<Image src="/assets/google-logo.webp" width={30} height={30} alt="google-logo" />
Google
</div>
{/* github */}
<div className="cursor-pointer flex items-center gap-2">
<Image src="/assets/github-logo.png" width={25} height={25} alt="google-logo" />
Github
</div>
 </div>
<Link href={'/register'}>
<p  className="text-center text-red-600">Register new account</p>
</Link>    
    
     </div>
        </div>
    );
};

export default Login;
