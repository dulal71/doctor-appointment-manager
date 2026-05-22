
"use client";
import { authClient } from "@/app/lib/auth-client";
import { addAppointmentData } from "@/services/appointmentData";
import {Envelope} from "@gravity-ui/icons";
import {Button,Select, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, TimeField, DatePicker, DateField, Calendar, InputGroup} from "@heroui/react";
import { date } from "better-auth";
import toast from "react-hot-toast";

const BookingCard = ({doctor}) => {
 
  const {data:session}=authClient.useSession()
  console.log(session);
  const user=session?.user
console.log(user);
if(!user){
  return null
}
const {name:userName,email,id}=user

  const {name:doctorName,_id,image,specialty,fee,location}=doctor

  const bookingData =async(e)=>{
   e.preventDefault()
        const formData = new FormData(e.currentTarget)
    const newAppointment= Object.fromEntries(formData.entries())
  
    const appointmentData={
      userEmail:email,
      userName:userName,
      userId:id,
      doctorName,
      gender:newAppointment.gender,
      phone:newAppointment.phone,
      appointmentDate:newAppointment.date,
     appointmentTime: newAppointment.time,
patientName:newAppointment.patientName,
doctorImage:image,
specialty,
fee,
location
 }

  const {data:tokenData}=await authClient.token()

const res= await addAppointmentData(appointmentData,tokenData.token)
console.log(res);
if(res.insertedId){
  toast.success("Appointment booked successfully!")
}else{
  toast.error('something went to wrong')
}
  }
    return (
         <Modal className="">
<Button className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold py-4 rounded-2xl shadow-md cursor-pointer">
              Book Appointment
            </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="max-w-4xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Appointment Form</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
      <form onSubmit={bookingData} className="max-w-6xl mx-auto flex flex-col gap-6">

  {/* Row 1 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    <TextField name="patientName" type="text" className="w-full">
      <Label>Patient Name</Label>
      <InputGroup className="h-12 bg-gray-100 rounded-md px-3 flex items-center">
        <InputGroup.Input
          className="w-full h-full bg-transparent outline-none"
          placeholder="Enter patient name"
        />
      </InputGroup>
    </TextField>

    <TextField name="userEmail" type="email" className="w-full">
      <Label>User Email</Label>
      <InputGroup className="h-12 bg-gray-100 rounded-md px-3 flex items-center">
        <InputGroup.Prefix>
          <Envelope className="size-4 text-muted" />
        </InputGroup.Prefix>

        <InputGroup.Input
          className="w-full h-full bg-transparent outline-none"
          value={user?.email}
        />
      </InputGroup>
    </TextField>

  </div>

  {/* Row 2 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    <TextField name="phone" type="number" className="w-full">
      <Label>Phone</Label>
      <InputGroup className="h-12 bg-gray-100 rounded-md px-3 flex items-center">
        <InputGroup.Input
          className="w-full h-full bg-transparent outline-none"
          placeholder="phone number"
        />
      </InputGroup>
    </TextField>

    <div className="w-full">
      <Select className="w-full"
      name="gender"
      
      isRequired>
        <Label>Gender</Label>

        <Select.Trigger className="h-12 w-full bg-gray-100 rounded-md px-3 flex items-center">
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>

        <Select.Popover>
          <ListBox>
            <ListBox.Item id="Male">Male</ListBox.Item>
            <ListBox.Item id="Female">Female</ListBox.Item>
            <ListBox.Item id="Other">Other</ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
    </div>

  </div>
<TextField name="doctorName" type="text" className="w-full">
  <Label>Doctor Name</Label>

  <InputGroup className="h-12 bg-gray-100 rounded-md px-3 flex items-center max-w-[365px]">
    <InputGroup.Input
      className="w-full h-full bg-transparent outline-none"
      value={doctorName}
    />
  </InputGroup>
</TextField>
  {/* Date + Time */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    <DatePicker name="date" className="w-full" isRequired>
      <Label>Date</Label>

      <DateField.Group className="h-12 bg-gray-100 rounded-md px-3 flex items-center">
        <DateField.Input className="w-full h-full">
          {(segment) => <DateField.Segment segment={segment} />}
        </DateField.Input>
      </DateField.Group>
    </DatePicker>

    <TimeField name="time" className="w-full" isRequired>
      <Label>Time</Label>

      <TimeField.Group className="h-12 bg-gray-100 rounded-md px-3 flex items-center">
        <TimeField.Input className="w-full h-full">
          {(segment) => <TimeField.Segment segment={segment} />}
        </TimeField.Input>
      </TimeField.Group>
    </TimeField>

  </div>

  {/* Description */}
  <TextField name="description">
    <Label>Description</Label>
    <TextArea className="h-28 w-full bg-gray-100 rounded-md px-3 py-3" />
  </TextField>

  {/* Button */}
  <Button type="submit" slot="close" className="h-12 w-full bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-md">
    Confirm
  </Button>

</form>
              </Surface>
            </Modal.Body>
           
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    );
};

export default BookingCard;