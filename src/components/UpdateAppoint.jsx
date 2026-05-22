"use client";
import { authClient } from "@/app/lib/auth-client";
import { updateAppoint } from "@/services/appointmentData";
import {Envelope} from "@gravity-ui/icons";
import {Button, DateField, Description, Input, Label, Modal, Surface, TextField, TimeField} from "@heroui/react";
import { Edit } from "lucide-react";
import toast from "react-hot-toast";


const UpdateAppoint = ({doctor}) => {

    const {patientName,userEmail,doctorName,_id,appointmentTime}=doctor
 
    const update=async(e)=>{
e.preventDefault()
const formData = new FormData(e.currentTarget)
const data = Object.fromEntries(formData.entries())
const updateData={
  userEmail:userEmail,
      doctorName,
     appointmentDate:data.date,
     appointmentTime:data.time,
patientName:patientName,
}
 const {data:tokenData}=await authClient.token()
const res = await updateAppoint(_id,updateData,tokenData.token)
if(res.modifiedCount > 0 ){
  toast.success("Appointment updated successfully")
}else{
  toast.error('Something went to  wrong')
}
   }
    return (
         <Modal>
      <Button variant="secondary"><Edit></Edit> Update</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Edit className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Doctor Appointment</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Update appointment details such as date, time, and patient information. 
  Make sure all information is correct before saving changes.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={update} className="flex flex-col gap-4">
                 <TextField className="w-full" name="doctorName" type="text" >
                    <Label>Doctor Name</Label>
                    <Input value={doctorName} />
                  </TextField>
                 <TextField className="w-full" name="userEmail" type="email">
                    <Label>Email</Label>
                    <Input value={userEmail} />
                  </TextField>
                 <TextField className="w-full" name="patientName" type="text">
                    <Label>Patient Name</Label>
                    <Input value={patientName} />
                  </TextField>
           <div className="w-full">
  <Label>Date</Label>
  <input
    type="date"
    name="date"
    required
    defaultValue={doctor?.appointmentDate}
     className="w-full bg-white outline-none shadow  rounded-2xl px-3 py-2"
  />
</div>       
       <input
  type="time"
  name="time"
   className="w-full bg-white outline-none shadow  rounded-2xl px-3 py-2"
  defaultValue={appointmentTime?.slice(0,5)}
/>
      <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close"  type="submit">Update</Button>
            </Modal.Footer>              
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    );
};

export default UpdateAppoint;