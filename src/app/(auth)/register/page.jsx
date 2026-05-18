'use client'

import { authClient } from "@/app/lib/auth-client";
import {Check, Envelope, Eye, EyeSlash, FloppyDisk} from "@gravity-ui/icons";
import { Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
const Register = () => {
      const [isVisible, setIsVisible] = useState(false);
   const signUp=async(e)=>{
    e.preventDefault()
       const formData = new FormData(e.currentTarget);
    const newUser =Object.fromEntries(formData.entries())
 
    const { data, error } = await authClient.signUp.email({
    name:newUser.name, // required
    email:newUser.email, // required
    password: newUser.password, // required
    image: newUser.imageUrl,

});
console.log(data);
if(data){
    toast.success('Sign up successfully')
     redirect('/')
}else{
    toast.error("sign up failed")
}
}

const googleSignIn=async()=>{
  const data = await authClient.signIn.social({
    provider: "google",
  });
 if(data){
    toast.success('Sign up successfully')
     redirect('/')
}else{
    toast.error("sign up failed")
} 
} 
      return (
        <div className="flex items-center justify-center py-14">
       <div className="bg-white  w-full max-w-xl  shadow py-6 px-8 space-y-4 rounded-md">
             <div className="flex flex-col items-center justify-center gap-3">
    <div className="w-12 p-2  bg-linear-to-r from-blue-600 to-cyan-500 rounded-xl group-hover:rotate-12 transition-transform">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>             
<div>
    <p className="text-center text-3xl font-medium mb-2">Welcome To DocAppoint</p>
<p className="text-center text-md font-semibold text-zinc-600">Register to manage your appointments and <br /> connect with trusted doctors.</p>
</div>

            </div>

         <div className="relative">
         <Form onSubmit={signUp} className=" w-full mx-auto mt-10">
      <Fieldset>
        
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label className="text-xl">Name</Label>
            <Input  className="rounded-md py-3 text-md" placeholder="John Doe" />
            <FieldError />
          </TextField>
     <TextField isRequired className="w-full " name="email">
        <Label className="text-xl">Email address</Label>
        <InputGroup>
          <InputGroup.Prefix>
            <Envelope className="size-4 text-muted" />
          </InputGroup.Prefix>
          <InputGroup.Input className="w-full rounded-md py-3" placeholder="name@email.com" />
        </InputGroup>
      </TextField>
      
       <TextField fullWidth name="imageUrl">
        <Label className="text-xl">Image URL</Label>
        <InputGroup fullWidth>
          <InputGroup.Input  className="rounded-md py-3 text-md"  placeholder="Enter password" type="url" />
          </InputGroup>
      </TextField>  

     <TextField
  isRequired
  minLength={8}
  name="password"
  type={isVisible ? "text" : "password"}
  validate={(value) => {
    if (value.length < 8) {
      return "Password must be at least 8 characters";
    }
    if (!/[A-Z]/.test(value)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[0-9]/.test(value)) {
      return "Password must contain at least one number";
    }
    return null;
  }}
>
  <Label className="text-xl">Password</Label>

  <Input className="rounded-md py-3 text-md" placeholder="Enter your password" />

 <span className="absolute right-2 top-[71%]">
    
  {isVisible ? <EyeSlash onClick={()=>setIsVisible(!isVisible)} className="size-4" /> : <Eye className="size-4" onClick={()=>setIsVisible(!isVisible)} />}       
    
 </span>
 

  <Description>
    Must be at least 8 characters with 1 uppercase and 1 number
  </Description>

  <FieldError />
</TextField>
          
        </FieldGroup>
        <Fieldset.Actions>
          <Button className="w-full bg-linear-to-r from-blue-600 to-cyan-500" type="submit">
            <FloppyDisk />
            Create Account
          </Button>
          
        </Fieldset.Actions>
      </Fieldset>
    </Form>      
    </div> 
    <p className="text-center">Or login with</p>
    <div className="flex justify-evenly items-center">
{/* google */}
<div onClick={googleSignIn} className="cursor-pointer flex items-center gap-2 ">
<Image src="/assets/google-logo.webp" width={30} height={30} alt="google-logo" />
Google
</div>
{/* github */}
<div className="cursor-pointer flex items-center gap-2 ">
<Image src="/assets/github-logo.png" width={25} height={25} alt="google-logo" />
Github
</div>
 </div>
<Link href={'/login'}>
<p  className="text-center text-red-600">Already have an account? Login</p>
</Link>    
    
     </div>
        </div>
    );
};

export default Register;