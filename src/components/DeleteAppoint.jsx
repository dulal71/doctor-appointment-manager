'use client'
import { authClient } from "@/app/lib/auth-client";
import { deleteAppoint } from "@/services/appointmentData";
import { AlertDialog, Button } from "@heroui/react";
import { Delete } from "lucide-react";
import toast from "react-hot-toast";


const DeleteAppoint = ({doctor}) => {
   
    const handleDelete=async()=>{
       const {data:tokenData}=await authClient.token()
const res = await deleteAppoint(doctor._id,tokenData.token)
if(res.deletedCount >0){
    toast.success("Delete Appointment Successfully")
}else{
    toast.error("something went to wrong")
}
    }
    return (
         <AlertDialog>
      <Button  variant="danger" ><Delete></Delete>Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete appointment permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong className="font-bold underline"></strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button  onClick={handleDelete} slot="close" variant="danger">
                Delete 
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    );
};

export default DeleteAppoint;