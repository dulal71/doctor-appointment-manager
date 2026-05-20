'use server'

export const allDoctorData = async(search="",specialty="")=>{
    const res = await fetch(`${process.env.SERVER_URL}/doctors?search=${search}&specialty=${specialty}`)
    const data = await res.json()
    return data;
}
export const topDoctors = async()=>{
    const res = await fetch(`${process.env.SERVER_URL}/topDoctors`)
    const data = await res.json()
    return data;
}
export const doctorDataById = async(id)=>{
    const res = await fetch(`${process.env.SERVER_URL}/doctors/${id}`)
    const data = await res.json()
    return data;
}
