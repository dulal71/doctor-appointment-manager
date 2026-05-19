'use server'

export const getAppointmentData = async(id)=>{
 console.log(id);
  const res=await fetch(`${process.env.SERVER_URL}/appointmentDoctors/${id}`)
 const data = await res.json()
  return data
}



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