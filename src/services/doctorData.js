'use server'

export const allDoctorData = async(search="",specialty="",token)=>{
    const res = await fetch(`${process.env.SERVER_URL}/doctors?search=${search}&specialty=${specialty}`,{
          headers:{
        authorization:`Bearer ${token}`
      }      
    })
    const data = await res.json()
    return data;
}

export const doctorDataById = async(id,token)=>{
   
    const res = await fetch(`${process.env.SERVER_URL}/doctors/${id}`,{
      headers:{
        authorization:`Bearer ${token}`
      }  
    })
    const data = await res.json()
    return data;
}
