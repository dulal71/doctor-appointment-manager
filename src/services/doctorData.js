'use server'

export const allDoctorData = async()=>{
    const res = await fetch(`${process.env.SERVER_URL}/doctors`)
    const data = await res.json()
    return data;
}
export const doctorDataById = async(id)=>{
    const res = await fetch(`${process.env.SERVER_URL}/doctors/${id}`)
    const data = await res.json()
    return data;
}
