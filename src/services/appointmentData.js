'use server'

import { revalidatePath } from "next/cache";

export const getAppointmentData = async(id)=>{

  const res=await fetch(`${process.env.SERVER_URL}/appointmentDoctors/${id}`)
 const data = await res.json()
  return data
}


//add appointment data
export const addAppointmentData=async(appointmentData)=>{
  const res = await fetch(`${process.env.SERVER_URL}/appointmentDoctors`,{
    method:"POST",
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify(appointmentData)
  })  
  const data = await res.json()
  return data
}

// add appointment data
export const deleteAppoint = async(id)=>{

  const res=await fetch(`${process.env.SERVER_URL}/appointmentDoctors/${id}`,{
    method:"DELETE",
    headers:{
        
      "Content-type":"application/json"
     
    }
  })
 const data = await res.json()
 if(data.deletedCount > 0){
revalidatePath('/dashboard')
 }
 
  return data
}
// add update data 
export const updateAppoint= async(_id,updateData)=>{
 const res=await fetch(`${process.env.SERVER_URL}/appointmentDoctors/${_id}`,{
    method:"PATCH",
    headers:{
         "Content-type":"application/json"
},
body:JSON.stringify(updateData)
  })
 const data = await res.json()
 if(data.modifiedCount > 0){
revalidatePath('/dashboard')
 }
 
  return data 
}