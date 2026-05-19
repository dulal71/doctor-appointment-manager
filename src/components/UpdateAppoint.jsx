"use client";
import { updateAppoint } from "@/services/appointmentData";
import {Envelope} from "@gravity-ui/icons";
import {Button, DateField, Description, Input, Label, Modal, Surface, TextField, TimeField} from "@heroui/react";
import { Edit } from "lucide-react";
import { useState } from "react";

const UpdateAppoint = ({doctor}) => {

    const {patientName,userEmail,doctorName,_id,appointmentTime}=doctor
   const [time,setTime]=useState(appointmentTime)
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
const res = await updateAppoint(_id,updateData)
console.log(res);
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
                 <DateField className="w-full" name="date" isRequired>
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField>  
       <TimeField value={time} onChange={setTime} className="w-full" name="time">
        <Label>Appointment time</Label>
        <TimeField.Group>
          <TimeField.Input >{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
        </TimeField.Group>
        
      </TimeField>
      <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit">Update</Button>
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