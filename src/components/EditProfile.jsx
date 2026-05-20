"use client";

import { useEffect, useState } from "react";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Edit } from "lucide-react";
import { authClient } from "@/app/lib/auth-client";
import toast from "react-hot-toast";

const EditProfile = ({ user }) => {
  const [name,setName]=useState("")
  const [imageUrl,setImageUrl]=useState("")

  useEffect(() => {
    if (user) {
      setName(user?.name || "")
      setImageUrl(user?.image || "")
    }
  }, [user]);


  const handleUpdate = async (e) => {
  e.preventDefault();
const data = await authClient.updateUser({
   name,
    imageUrl,
})
  if(data){
    toast.success("Profile updated successfully!")
  }else{
    toast.error("something went to wrong")
  }
};
 
  

  return (
    <Modal>
      <Button>
        <Edit className="mr-2" />
        Edit Profile
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Edit className="size-5" />
              </Modal.Icon>

              <Modal.Heading>Update Your Profile</Modal.Heading>

              <p className="mt-1.5 text-sm text-muted">
                Update your personal information safely.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleUpdate} className="flex flex-col gap-4">

                  {/* Name */}
                  <TextField className="w-full">
                    <Label>Name</Label>
                    <Input
                      name="name"
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                    />
                  </TextField>

                  {/* Image URL */}
                  <TextField className="w-full">
                    <Label>Image URL</Label>
                    <Input
                      name="imageUrl"
                      value={imageUrl}
                      onChange={(e)=>setImageUrl(e.target.value)}
                    />
                  </TextField>

                  {/* Buttons */}
                  <div className="flex justify-end gap-3 pt-4">
                    <Button variant="secondary" type="button">
                      Cancel
                    </Button>

                    <Button type="submit"slot="close">
                      Update
                    </Button>
                  </div>

                </form>
              </Surface>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditProfile;